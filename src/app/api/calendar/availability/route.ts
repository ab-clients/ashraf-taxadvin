import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { toZonedTime, fromZonedTime } from "date-fns-tz";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
      return NextResponse.json(
        { error: "Date parameter is required" },
        { status: 400 }
      );
    }

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

    // Parse the date correctly to avoid timezone issues
    // The date comes in as YYYY-MM-DD format, we need to parse it in the target timezone
    const [year, month, dayOfMonth] = date.split("-").map(Number);
    
    // Create a date object that represents midnight in the target timezone
    // This ensures business hours (9 AM - 5 PM) are in the correct timezone
    const dateString = `${year}-${month.toString().padStart(2, '0')}-${dayOfMonth.toString().padStart(2, '0')}`;
    const midnightInTargetTz = fromZonedTime(new Date(`${dateString}T00:00:00`), timezone);
    const selectedDate = toZonedTime(midnightInTargetTz, timezone);

    // Check if the selected date is a weekend (Saturday = 6, Sunday = 0)
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return NextResponse.json({
        success: true,
        date: date,
        timezone,
        availableSlots: [],
        existingEventsCount: 0,
        message:
          "No appointments available on weekends. Please select a weekday.",
      });
    }

    const startOfDayLocal = new Date(selectedDate);
    startOfDayLocal.setHours(0, 0, 0, 0);
    const startOfDay = fromZonedTime(startOfDayLocal, timezone);

    const endOfDayLocal = new Date(selectedDate);
    endOfDayLocal.setHours(23, 59, 59, 999);
    const endOfDay = fromZonedTime(endOfDayLocal, timezone);

    // Get existing events for the selected date
    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      timeZone: timezone,
    });

    const existingEvents = response.data.items || [];

    // Define business hours (9 AM to 5 PM)
    const businessStart = 9; // 9 AM
    const businessEnd = 17; // 5 PM
    const appointmentDuration = 30; // 30 minutes
    const gracePeriodDuration = 15; // 15 minutes
    const totalBlockDuration = appointmentDuration + gracePeriodDuration; // 45 minutes total
    const slotInterval = 15; // Offer slots every 15 minutes

    // Generate slots every 15 minutes during business hours
    const availableSlots: string[] = [];
    const allSlots: { time: string; available: boolean; reason?: string }[] =
      [];

    for (let hour = businessStart; hour < businessEnd; hour++) {
      for (let minute = 0; minute < 60; minute += slotInterval) {
        // Create slot start time in the target timezone
        const slotStartLocal = new Date(selectedDate);
        slotStartLocal.setHours(hour, minute, 0, 0);
        
        // Convert to UTC for API calls and storage
        const slotStart = fromZonedTime(slotStartLocal, timezone);
        
        const slotEnd = new Date(slotStart);
        slotEnd.setMinutes(slotEnd.getMinutes() + appointmentDuration);

        // Account for grace period: need 45 total minutes from slot start
        const gracePeriodEnd = new Date(slotStart);
        gracePeriodEnd.setMinutes(
          gracePeriodEnd.getMinutes() + totalBlockDuration
        );

        // Check if the grace period would extend beyond business hours (5:00 PM)
        const businessEndTimeLocal = new Date(selectedDate);
        businessEndTimeLocal.setHours(businessEnd, 0, 0, 0); // 5:00 PM in local timezone
        const businessEndTime = fromZonedTime(businessEndTimeLocal, timezone);

        const exceedsBusinessHours = gracePeriodEnd > businessEndTime;

        // Check if this slot (including grace period) conflicts with any existing event
        const hasConflict = existingEvents.some((event) => {
          if (!event.start?.dateTime || !event.end?.dateTime) {
            return false; // Skip all-day events
          }

          const eventStart = new Date(event.start.dateTime);
          const eventEnd = new Date(event.end.dateTime);

          // Check for overlap: slot (including grace period) overlaps with event if:
          // slot starts before event ends AND grace period ends after event starts
          return slotStart < eventEnd && gracePeriodEnd > eventStart;
        });

        const isInPast = slotStart <= new Date();
        const isAvailable = !hasConflict && !isInPast && !exceedsBusinessHours;

        // Add to all slots for display
        let reason;
        if (isInPast) {
          reason = "Past time";
        } else if (exceedsBusinessHours) {
          reason = "Outside business hours";
        } else if (hasConflict) {
          reason = "Unavailable";
        }

        allSlots.push({
          time: slotStart.toISOString(),
          available: isAvailable,
          reason,
        });

        // Only add to available slots if it's actually available
        if (isAvailable) {
          availableSlots.push(slotStart.toISOString());
        }
      }
    }

    return NextResponse.json({
      success: true,
      date: date,
      timezone,
      availableSlots,
      allSlots, // New field with all slots and their status
      existingEventsCount: existingEvents.length,
    });
  } catch (error: unknown) {
    console.error("❌ Error getting calendar availability:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
