import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
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
      html: `<p>Hi, Abdulbasit</p> <br/> <span>This is ${req.body.name} contacting you from your personal portfolio website</span> <br/> <p>${req.body.message}</p> <br/> <span>For more information, you can reach me via my email: ${req.body.email}</span>`,
    });
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
