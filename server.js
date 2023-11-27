const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const app = express();
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

// const sendEmail = async (options) => {
//   //1) create a transporter
//   //2) Define the email options
//   const mailOptions = {
//     from: "support <support@versionxpress.com>",
//     to: "samsonmeseretb@gmail.com",
//     subject: options.subject,
//     text: options.message,
//   };
//   //3) Actually send the email
//   return await transporter.sendMail(mailOptions);
//   // console.log(response);
// };

app.get("/send", async (req, res, next) => {
  const mailOptions = {
    from: "support <support@versionxpress.com>",
    to: "samsonmeseretb@gmail.com",
    subject: "options.subject",
    text: "options.message",
  };
  await transporter.sendMail(mailOptions);

  res.status(200).json({
    message: "email sent",
  });
});

app.listen(8000, console.log("server running 8000"));
