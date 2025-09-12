# Google Calendar Booking System Setup

This document explains how to set up the Google Calendar integration for the appointment booking system.

## Prerequisites

1. A Google account with access to Google Calendar
2. A Google Cloud Project with the Calendar API enabled

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click on it and press "Enable"

### 2. Create a Service Account

1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Give it a name like "calendar-booking"
4. Skip the role assignment (we'll handle permissions via calendar sharing)
5. Click "Done"

### 3. Generate Service Account Key

1. Click on the created service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" format and download the file
5. Copy the entire contents of the JSON file

### 4. Share Your Calendar

1. Open Google Calendar
2. Find your calendar in the left sidebar
3. Click the three dots next to it and select "Settings and sharing"
4. Under "Share with specific people", add the service account email
5. Give it "Make changes to events" permission
6. The service account email is in the JSON key file as `client_email`

### 5. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Copy the entire JSON key file contents as a single line
CALENDAR_ACCOUNT_KEY={"type":"service_account",...}

# Your calendar ID (usually your Gmail address)
CALENDAR_ID=your-email@gmail.com

# Your timezone (optional, defaults to America/New_York)
CALENDAR_BOOKING_TIMEZONE=America/New_York
```

### 6. Test the Setup

1. Start your development server: `npm run dev`
2. Visit `/api/test-calendar` to verify the connection works
3. You should see a success message with any existing events

## How It Works

### Availability Check (`/api/calendar/availability`)

- Takes a date parameter (YYYY-MM-DD format)
- Checks existing events for that date
- Returns available 30-minute slots between 9 AM and 5 PM
- Excludes past times and conflicting appointments

### Booking (`/api/calendar/book`)

- Creates a new calendar event
- Sends email invitations to the client
- Sets up reminders (24 hours and 1 hour before)
- Includes client contact information in the event description

### Security Features

- Clients can only see available time slots, not existing appointment details
- Double-booking prevention with conflict checking
- Input validation for all form fields
- Error handling for API failures

## Customization

### Business Hours

Edit the availability API at `/src/app/api/calendar/availability/route.ts`:

```typescript
// Change these values
const businessStart = 9; // 9 AM
const businessEnd = 17; // 5 PM
const slotDuration = 30; // 30 minutes
```

### Appointment Duration

Currently set to 30 minutes. To change:

1. Update `slotDuration` in the availability API
2. Update the booking API to adjust the end time calculation

### Timezone

Set the `CALENDAR_BOOKING_TIMEZONE` environment variable to your preferred timezone.

### Email Templates

The booking API automatically sends invitations. You can customize the event description in `/src/app/api/calendar/book/route.ts`.

## Troubleshooting

### 403 Permission Denied

- Verify the service account has access to the calendar
- Check that the calendar is shared with the service account email
- Ensure the Calendar API is enabled in Google Cloud Console

### 404 Calendar Not Found

- Verify the `CALENDAR_ID` is correct
- Make sure you're using the full email address or proper Calendar ID

### No Available Slots

- Check that you're not looking at past dates
- Verify business hours are set correctly
- Ensure there are no all-day events blocking the entire day

## Support

If you encounter issues, check:

1. Google Cloud Console for API quotas and errors
2. Browser developer tools for client-side errors
3. Server logs for API errors
4. The test endpoint `/api/test-calendar` for basic connectivity
