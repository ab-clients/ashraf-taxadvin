// Simple test script to verify the booking system works
// Run with: node test-booking.js (make sure to have .env file configured)

const testBookingFlow = async () => {
  const baseUrl = "http://localhost:3000";

  console.log("🧪 Testing TaxAdvin Booking System\n");

  // Test 1: Check availability for tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split("T")[0];

  console.log(`📅 Testing availability for: ${dateStr}`);

  try {
    const availabilityResponse = await fetch(
      `${baseUrl}/api/calendar/availability?date=${dateStr}`
    );
    const availabilityData = await availabilityResponse.json();

    if (availabilityData.success) {
      console.log(`✅ Availability check successful`);
      console.log(
        `   Available slots: ${availabilityData.availableSlots.length}`
      );

      if (availabilityData.availableSlots.length > 0) {
        console.log(
          `   First slot: ${new Date(availabilityData.availableSlots[0]).toLocaleTimeString()}`
        );
      }
    } else {
      console.log(`❌ Availability check failed: ${availabilityData.error}`);
      return;
    }
  } catch (error) {
    console.log(`❌ Availability API error: ${error.message}`);
    return;
  }

  console.log("\n🎉 Basic booking system test completed!");
  console.log("\n📋 Next steps:");
  console.log("1. Set up your Google Calendar API credentials in .env.local");
  console.log("2. Visit http://localhost:3000/book-appointment to test the UI");
  console.log(
    "3. Check /api/test-calendar for detailed calendar connection status"
  );
};

// Only run if called directly
if (require.main === module) {
  testBookingFlow().catch(console.error);
}

module.exports = { testBookingFlow };
