import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    accessToken: process.env.GOOGLE_ACCESS_TOKEN,
  },
});

try {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Enquiry From Portfolio Website",
    html: `<h1>Hi, Abdulbasit</h1> <br/> <p>This is ${req.body.name} contacting you from your personal portfolio website</p> <br/> <p>${req.body.message}</p> <br/> <p>For more informatio, you can reach me via my email: ${req.body.email}</p>`,
  });
  res.status(200).json({ success: true, message: "Email sent!" });
} catch (error) {
  res.status(500).json({ success: false, error: error.message });
}
