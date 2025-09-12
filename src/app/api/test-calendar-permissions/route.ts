import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🔍 Testing Google Calendar write permissions...");

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

    console.log(`📅 Calendar ID: ${calendarId}`);
    console.log(`🌍 Timezone: ${timezone}`);
    console.log(`📧 Service Account Email: ${serviceAccountKey.client_email}`);

    // Test 1: Check if we can read the calendar
    console.log("📖 Testing read access...");
    const readTest = await calendar.calendars.get({
      calendarId: calendarId,
    });

    console.log(`✅ Read access successful: ${readTest.data.summary}`);

    // Test 2: Check calendar ACL (permissions)
    console.log("🔑 Testing calendar permissions...");
    try {
      const aclList = await calendar.acl.list({
        calendarId: calendarId,
      });

      const serviceAccountAccess = aclList.data.items?.find(
        (item) => item.scope?.value === serviceAccountKey.client_email
      );

      if (serviceAccountAccess) {
        console.log(
          `✅ Service account has access: ${serviceAccountAccess.role}`
        );
      } else {
        console.log(`❌ Service account not found in calendar permissions`);
      }
    } catch (aclError) {
      console.log(`⚠️  Could not check ACL:`, aclError);
    }

    // Test 3: Try to create a test event
    console.log("✍️  Testing write access with test event...");

    const testEventStart = new Date();
    testEventStart.setHours(23, 0, 0, 0); // 11 PM today (unlikely to conflict)

    const testEventEnd = new Date(testEventStart);
    testEventEnd.setMinutes(testEventEnd.getMinutes() + 1); // 1 minute duration

    const testEvent = {
      summary: "🧪 API Test Event (Safe to Delete)",
      description:
        "This is a test event created by the booking system API test. Safe to delete.",
      start: {
        dateTime: testEventStart.toISOString(),
        timeZone: timezone,
      },
      end: {
        dateTime: testEventEnd.toISOString(),
        timeZone: timezone,
      },
    };

    const createResponse = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: testEvent,
    });

    console.log(
      `✅ Write test successful! Event ID: ${createResponse.data.id}`
    );

    // Clean up: Delete the test event immediately
    if (createResponse.data.id) {
      await calendar.events.delete({
        calendarId: calendarId,
        eventId: createResponse.data.id,
      });
      console.log(`🧹 Test event cleaned up`);
    }

    return NextResponse.json({
      success: true,
      message: "All permissions tests passed!",
      details: {
        calendarId,
        calendarName: readTest.data.summary,
        serviceAccountEmail: serviceAccountKey.client_email,
        timezone,
        permissions: "Read and Write access confirmed",
      },
    });
  } catch (error: unknown) {
    console.error("❌ Permission test error:", error);

    let errorAnalysis = "Unknown error";
    let suggestions: string[] = [];

    const errorCode =
      error && typeof error === "object" && "code" in error
        ? (error as { code: number }).code
        : null;
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    if (errorCode === 403) {
      errorAnalysis = "Permission denied - Service account lacks access";
      suggestions = [
        "1. Share your Google Calendar with the service account email",
        "2. Give the service account 'Make changes to events' permission",
        "3. Ensure the Calendar API is enabled in Google Cloud Console",
        `4. Service account email: ${JSON.parse(process.env.CALENDAR_ACCOUNT_KEY!).client_email}`,
      ];
    } else if (errorCode === 404) {
      errorAnalysis = "Calendar not found";
      suggestions = [
        "1. Check that CALENDAR_ID is correct",
        "2. Verify the calendar exists and is accessible",
        `3. Current CALENDAR_ID: ${process.env.CALENDAR_ID}`,
      ];
    } else if (errorCode === 401) {
      errorAnalysis = "Authentication failed";
      suggestions = [
        "1. Check that CALENDAR_ACCOUNT_KEY is valid JSON",
        "2. Verify the service account key hasn't expired",
        "3. Ensure the service account exists in Google Cloud Console",
      ];
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        errorCode: errorCode,
        errorAnalysis,
        suggestions,
        serviceAccountEmail: JSON.parse(process.env.CALENDAR_ACCOUNT_KEY!)
          .client_email,
        calendarId: process.env.CALENDAR_ID,
      },
      { status: 500 }
    );
  }
}
