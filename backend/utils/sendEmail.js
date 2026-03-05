const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ to, subject, html }) {
  try {

    console.log("Sending email to:", to);

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [to],
      subject,
      html,
    });

    console.log("Email response:", response);

  } catch (error) {
    console.error("RESEND ERROR:", error);
    throw error;
  }
}

module.exports = sendEmail;