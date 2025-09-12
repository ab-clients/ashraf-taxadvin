import { NextRequest, NextResponse } from "next/server";
import { toZonedTime, fromZonedTime } from "date-fns-tz";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") || "2025-09-12"; // Use tomorrow as example

  const timezone = process.env.CALENDAR_BOOKING_TIMEZONE || "America/New_York";
  
  // Parse date the same way as the availability API
  const [year, month, dayOfMonth] = date.split("-").map(Number);
  const dateString = `${year}-${month.toString().padStart(2, '0')}-${dayOfMonth.toString().padStart(2, '0')}`;
  const midnightInTargetTz = fromZonedTime(new Date(`${dateString}T00:00:00`), timezone);
  const selectedDate = toZonedTime(midnightInTargetTz, timezone);

  // Create a 9 AM slot
  const nineAmLocal = new Date(selectedDate);
  nineAmLocal.setHours(9, 0, 0, 0);
  const nineAmUtc = fromZonedTime(nineAmLocal, timezone);

  return NextResponse.json({
    inputDate: date,
    timezone: timezone,
    serverTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    selectedDateLocal: selectedDate.toISOString(),
    nineAmLocal: nineAmLocal.toISOString(),
    nineAmUtc: nineAmUtc.toISOString(),
    nineAmFormatted: nineAmUtc.toLocaleString("en-US", {
      timeZone: timezone,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  });
}
