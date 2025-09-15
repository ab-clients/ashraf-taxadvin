import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { firstName, lastName, email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId: "46b53ecf-b5c3-4859-a958-f3690266df74",
    });

    console.log("Contact created:", response);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    return new Response(JSON.stringify({ error: "Failed to create contact" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
