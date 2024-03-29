import nodemailer from "nodemailer";

export default async function sendEmail({
  name,
  emailAddress,
  message,
}: I_EmailMessage) {
  const SMTP_HOST = import.meta.env.SMTP_HOST;
  const EMAIL_CLIENT_ADDRESS = import.meta.env.EMAIL_CLIENT_ADDRESS;
  const EMAIL_CLIENT_PASSWORD = import.meta.env.EMAIL_CLIENT_PASSWORD;
  const EMAIL_FORWARD_ADDRESS = import.meta.env.EMAIL_FORWARD_ADDRESS;

  const transporter = nodemailer.createTransport({
    service: "SMTP",
    host: SMTP_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL_CLIENT_ADDRESS,
      pass: EMAIL_CLIENT_PASSWORD,
    },
  });

  let info;

  try {
    info = await transporter.sendMail({
      from: name,
      //replyTo: emailAddress,
      priority: "high",
      to: EMAIL_FORWARD_ADDRESS,
      subject: `${name} - via your portfolio site 🚀`,
      text: message,
      html: `<h1>${name}</h1><address>${emailAddress}</address><p>${message}</p>`,
    });
    // console.log("Message sent: %s", info.messageId);
  } catch (err: any) {
    // console.log("Error:", err ?? "unknown error");
    throw new Error(err.message ?? "Something went wrong.");
  }
}
