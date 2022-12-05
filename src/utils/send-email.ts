import nodemailer from "nodemailer";

export default async function sendEmail({
  name,
  emailAddress,
  message,
}: {
  name: string;
  emailAddress: string;
  message: string;
}) {
  const SMTP_HOST = import.meta.env.SMTP_HOST;
  const EMAIL_CLIENT_ADDRESS = import.meta.env.EMAIL_CLIENT_ADDRESS;
  const EMAIL_CLIENT_PASSWORD = import.meta.env.EMAIL_CLIENT_PASSWORD;

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
      // replyTo: emailAddress,
      priority: "high",
      to: EMAIL_CLIENT_ADDRESS,
      subject: `${name} - via your portfolio site 🚀`,
      text: message,
      html: `<h1>${name} ${emailAddress}</h1><b>${message}</b>`,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (err: any) {
    throw new Error(err.message ?? "Something went wrong.");
  }
}
