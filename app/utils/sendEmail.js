// // utils/sendEmail.ts
// import nodemailer from "nodemailer";

// export async function sendEmail(name: string, email: string, subject: string, message: string) {
//   const transporter = await nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASS,
//     },
//     debug: true,
//     tls: {
//       rejectUnauthorized: false, // Ignore certificate validation (not recommended for production)
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL,
//     to: "jppuigpesce@gmail.com",
//     subject,
//     text: `From: ${email}. Name: ${name}. Message: ${message}`,
//   };

//   await transporter.sendMail(mailOptions);
// }

// import { connect } from 'node-mailjet';

// const mailjet = connect(process.env.API_KEY, process.env.SECRET_KEY);

// export async function sendEmail(name, email, subject, message) {
//   const request = mailjet.post('send', { version: 'v3.1' }).request({
//     Messages: [
//       {
//         From: {
//           Email: 'jpagonline@gmail.com',
//         },
//         To: [
//           {
//             Email: 'jppuigpesce@email.com',
//           }
//         ],
//         Subject: subject,
//         TextPart: `From: ${email}. Name: ${name}. Message: ${message}`,
//       }
//     ]
//   });
  
//   request
//     .then(result => {
//       console.log(result.body);
//     })
//     .catch(err => {
//       console.error(err.statusCode, err.message);
//     });
// }

