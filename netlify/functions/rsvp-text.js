const twilio = require("twilio");

const requiredEnvVars = [
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_FROM_PHONE",
  "RSVP_TO_PHONES",
];

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

  if (missingEnvVars.length > 0) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: `Missing required environment variables: ${missingEnvVars.join(", ")}`,
      }),
    };
  }

  let parsedBody;

  try {
    parsedBody = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Request body must be valid JSON" }),
    };
  }

  const { guestCount, guests } = parsedBody;

  if (!Number.isInteger(guestCount) || guestCount < 1 || !Array.isArray(guests) || guests.length !== guestCount) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Guest payload is invalid" }),
    };
  }

  let formattedGuests;

  try {
    formattedGuests = guests.map((guest, index) => {
      const firstName = typeof guest.firstName === "string" ? guest.firstName.trim() : "";
      const lastName = typeof guest.lastName === "string" ? guest.lastName.trim() : "";
      const allergies = typeof guest.allergies === "string" && guest.allergies.trim()
        ? guest.allergies.trim()
        : "None";

      if (!firstName || !lastName) {
        throw new Error(`Guest ${index + 1} is missing a first or last name`);
      }

      return `Guest ${index + 1}: ${firstName} ${lastName} | Allergies: ${allergies}`;
    });
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }

  const messageBody = [
    "New RSVP submission",
    `Guest count: ${guestCount}`,
    "",
    ...formattedGuests,
  ].join("\n");

  const recipients = process.env.RSVP_TO_PHONES
    .split(",")
    .map((phoneNumber) => phoneNumber.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "No RSVP recipient phone numbers are configured" }),
    };
  }

  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    await Promise.all(
      recipients.map((to) =>
        client.messages.create({
          body: messageBody,
          from: process.env.TWILIO_FROM_PHONE,
          to,
        })
      )
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("Failed to send RSVP text messages.", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send RSVP text messages" }),
    };
  }
};
