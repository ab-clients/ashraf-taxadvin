import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

interface BookingRequest {
  dateTime: string;
  name: string;
  email: string;
  phone: string;
  meetingType: "" | "in-person" | "virtual";
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();
    const { dateTime, name, email, phone, meetingType } = body;

    // Validate required fields
    if (!dateTime || !name || !email || !phone || !meetingType) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Parse the service account key from environment variable
    const serviceAccountKey = JSON.parse(process.env.CALENDAR_ACCOUNT_KEY!);

    // Create auth client with write permissions
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    // Create calendar instance
    const calendar = google.calendar({ version: "v3", auth });

    // Get the timezone and calendar ID from environment variables
    const timezone =
      process.env.CALENDAR_BOOKING_TIMEZONE || "America/New_York";
    const calendarId = process.env.CALENDAR_ID;

    // Create start and end times for the appointment (30 minutes)
    const startTime = new Date(dateTime);
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + 30);

    // Check if the slot is still available before booking
    const existingEvents = await calendar.events.list({
      calendarId: calendarId,
      timeMin: startTime.toISOString(),
      timeMax: endTime.toISOString(),
      singleEvents: true,
    });

    if (existingEvents.data.items && existingEvents.data.items.length > 0) {
      return NextResponse.json(
        { error: "This time slot is no longer available" },
        { status: 409 }
      );
    }

    // Create the event
    const event = {
      summary: `TaxAdvin meeting with ${name}`,
      description: `
Client Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Meeting Type: ${meetingType === "in-person" ? "In Person" : "Virtual (Google Meet)"}

This is a 30-minute consultation appointment booked through the TaxAdvin website.

Note: Client will need to be contacted separately to send calendar invitation.
      `.trim(),
      start: {
        dateTime: startTime.toISOString(),
        timeZone: timezone,
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: timezone,
      },
      // Remove attendees to avoid permission issues
      // attendees: [
      //   {
      //     email: email,
      //     displayName: name,
      //   },
      // ],
      reminders: {
        useDefault: true, // Use default reminders for the calendar owner
      },
    };

    // Insert the main appointment event without sending invitations
    const response = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: event,
      sendUpdates: "all", // Don't send email invitations
    });

    // Create grace period event (15 minutes after the main appointment)
    const gracePeriodStart = new Date(endTime);
    const gracePeriodEnd = new Date(gracePeriodStart);
    gracePeriodEnd.setMinutes(gracePeriodEnd.getMinutes() + 15); // 15-minute grace period

    const gracePeriodEvent = {
      summary: `Grace period after ${name}`,
      description: `
Grace period for:
- Meeting follow-up and data entry
- Buffer time for potential meeting overrun
- Administrative tasks related to the consultation

Previous appointment:
- Client: ${name}
- Email: ${email}
- Phone: ${phone}
      `.trim(),
      start: {
        dateTime: gracePeriodStart.toISOString(),
        timeZone: timezone,
      },
      end: {
        dateTime: gracePeriodEnd.toISOString(),
        timeZone: timezone,
      },
      reminders: {
        useDefault: false, // No reminders needed for grace period
        overrides: [],
      },
      colorId: "8", // Use a different color (graphite/gray) to distinguish from main appointments
    };

    // Insert the grace period event
    const gracePeriodResponse = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: gracePeriodEvent,
      sendUpdates: "none",
    });

    return NextResponse.json({
      success: true,
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
      gracePeriodEventId: gracePeriodResponse.data.id,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      gracePeriodEnd: gracePeriodEnd.toISOString(),
      message: "Appointment booked successfully with grace period!",
    });
  } catch (error: unknown) {
    console.error("❌ Error booking appointment:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorCode =
      error && typeof error === "object" && "code" in error
        ? (error as { code: number }).code
        : null;

    let userFriendlyMessage = "Failed to book appointment. Please try again.";

    if (errorCode === 403) {
      userFriendlyMessage = "Permission denied. Please contact support.";
    } else if (errorCode === 409) {
      console.log("ERROR", error, errorMessage);
      userFriendlyMessage = "This time slot is no longer available.";
    }

    return NextResponse.json(
      {
        success: false,
        error: userFriendlyMessage,
        details: errorMessage,
      },
      { status: errorCode || 500 }
    );
  }
}
