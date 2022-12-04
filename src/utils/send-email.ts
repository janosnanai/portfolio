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
  const TARGET_EMAIL = import.meta.env.TARGET_EMAIL;
  const GOOGLE_EMAIL = import.meta.env.GOOGLE_EMAIL;
  const GOOGLE_APP_PASSWORD = import.meta.env.GOOGLE_APP_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: GOOGLE_EMAIL,
      pass: GOOGLE_APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    // from: `${name} ${email}`, // sender address
    from: { name, address: emailAddress }, // sender address
    to: `${TARGET_EMAIL}, ${GOOGLE_EMAIL}`, // list of receivers
    subject: `Message from ${name} via your portfolio site 🚀`, // Subject line
    html: `<h1>${name} ${emailAddress}</h1><b>${message}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
