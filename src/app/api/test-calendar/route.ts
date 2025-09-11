import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🔍 Testing Google Calendar API access...");

    // Parse the service account key from environment variable
    const serviceAccountKey = JSON.parse(process.env.CALENDAR_ACCOUNT_KEY!);

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    // Create calendar instance
    const calendar = google.calendar({ version: "v3", auth });

    // Get the timezone and calendar ID from environment variables
    const timezone =
      process.env.CALENDAR_BOOKING_TIMEZONE || "America/New_York";
    const calendarId = process.env.CALENDAR_ID;

    console.log(`📅 Calendar ID: ${calendarId}`);
    console.log(`🌍 Timezone: ${timezone}`);

    // Get today's date range in the specified timezone
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    console.log(`🕐 Searching for events today: ${startOfDay.toDateString()}`);
    console.log(`   From: ${startOfDay.toISOString()}`);
    console.log(`   To: ${endOfDay.toISOString()}`);

    // List events for today
    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      timeZone: timezone,
    });

    const events = response.data.items;

    if (!events || events.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No events found for today",
        date: now.toDateString(),
        timezone,
        calendarId,
        events: [],
      });
    }

    const formattedEvents = events.map((event) => ({
      id: event.id,
      summary: event.summary || "No title",
      start: event.start?.dateTime || event.start?.date,
      end: event.end?.dateTime || event.end?.date,
      description: event.description?.substring(0, 200) || null,
      location: event.location || null,
      attendeesCount: event.attendees?.length || 0,
    }));

    return NextResponse.json({
      success: true,
      message: `Found ${events.length} event(s) for today`,
      date: now.toDateString(),
      timezone,
      calendarId,
      events: formattedEvents,
    });
  } catch (error: unknown) {
    console.error("❌ Error accessing Google Calendar:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorCode =
      error && typeof error === "object" && "code" in error
        ? (error as { code: number }).code
        : null;
    let suggestions: string[] = [];

    if (errorCode === 403) {
      suggestions = [
        "The service account needs access to the calendar",
        "The calendar should be shared with the service account email",
        "The service account should have Calendar API enabled",
      ];
    }

    if (errorCode === 404) {
      suggestions = [
        "Check if the CALENDAR_ID is correct",
        "Verify the calendar exists and is accessible",
      ];
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        code: errorCode,
        suggestions,
      },
      { status: 500 }
    );
  }
}
