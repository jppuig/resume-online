// utils/sendEmail.js
import nodemailer from "nodemailer";

export async function sendEmail(name: string, email: string, subject: string, message: string) {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const mailOptions = {
    from: testAccount.user,
    to: "jppuigpesce@gmail.com",
    subject,
    text: `From: ${email}. Name: ${name}. Message: ${message}`,
  };

  await transporter.sendMail(mailOptions);
}