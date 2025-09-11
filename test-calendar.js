const { google } = require("googleapis");
require("dotenv").config();

// Parse the service account key from environment variable
const serviceAccountKey = JSON.parse(process.env.CALENDAR_ACCOUNT_KEY);

// Create auth client
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccountKey,
  scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
});

// Create calendar instance
const calendar = google.calendar({ version: "v3", auth });

async function listTodaysEvents() {
  try {
    console.log("🔍 Testing Google Calendar API access...\n");

    // Get the timezone from environment variables
    const timezone =
      process.env.CALENDAR_BOOKING_TIMEZONE || "America/New_York";
    const calendarId = process.env.CALENDAR_ID;

    console.log(`📅 Calendar ID: ${calendarId}`);
    console.log(`🌍 Timezone: ${timezone}\n`);

    // Get today's date range in the specified timezone
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    console.log(`🕐 Searching for events today: ${startOfDay.toDateString()}`);
    console.log(`   From: ${startOfDay.toISOString()}`);
    console.log(`   To: ${endOfDay.toISOString()}\n`);

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
      console.log("📭 No events found for today.");
      return;
    }

    console.log(`📋 Found ${events.length} event(s) for today:\n`);

    events.forEach((event, index) => {
      const start = event.start.dateTime || event.start.date;
      const end = event.end.dateTime || event.end.date;

      console.log(`${index + 1}. 📌 ${event.summary || "No title"}`);
      console.log(`   🕐 Start: ${start}`);
      console.log(`   🕑 End: ${end}`);

      if (event.description) {
        console.log(
          `   📝 Description: ${event.description.substring(0, 100)}${event.description.length > 100 ? "..." : ""}`
        );
      }

      if (event.location) {
        console.log(`   📍 Location: ${event.location}`);
      }

      if (event.attendees && event.attendees.length > 0) {
        console.log(`   👥 Attendees: ${event.attendees.length}`);
      }

      console.log(""); // Empty line for spacing
    });
  } catch (error) {
    console.error("❌ Error accessing Google Calendar:", error.message);

    if (error.code === 403) {
      console.log("\n💡 This might be a permissions issue. Make sure:");
      console.log("   1. The service account has access to the calendar");
      console.log(
        "   2. The calendar is shared with the service account email"
      );
      console.log("   3. The service account has Calendar API enabled");
    }

    if (error.code === 404) {
      console.log("\n💡 Calendar not found. Check:");
      console.log("   1. The CALENDAR_ID is correct");
      console.log("   2. The calendar exists and is accessible");
    }
  }
}

// Test calendar access
console.log("🚀 Starting Google Calendar API Test\n");
listTodaysEvents();
