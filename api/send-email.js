// Serverless function pour envoyer un email via Gmail SMTP (nodemailer)
// This uses Gmail App Passwords (recommended) and is simple to configure.
// Environment variables required (set in Vercel):
// - GMAIL_USER (your Gmail address)
// - GMAIL_APP_PASSWORD (app password from Google Account -> Security -> App passwords)
// - CONTACT_EMAIL (optional, recipient address; defaults to GMAIL_USER)

import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || GMAIL_USER;

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message } = req.body || {};
  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
    return res
      .status(500)
      .json({ error: "Server not configured to send email" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: GMAIL_USER,
      replyTo: `${name} <${email}>`,
      to: RECIPIENT_EMAIL,
      subject: `Nouveau message de ${name}`,
      html: `<h2>Nouveau message de contact</h2>
               <p><strong>Nom :</strong> ${name}</p>
               <p><strong>Email :</strong> ${email}</p>
               <p><strong>Message :</strong></p>
               <p>${(message || "").replace(/\n/g, "<br>")}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: "Email envoyé avec succès" });
  } catch (err) {
    console.error(
      "Error sending email:",
      err && err.message ? err.message : err
    );
    return res.status(500).json({ error: "Erreur lors de l'envoi" });
  }
}
