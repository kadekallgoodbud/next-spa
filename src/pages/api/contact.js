const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // Validate form data
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields' });
  }

  // Create a new transporter instance
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'dekgusnfs@gmail.com',
      pass: '[Wibawa080501[dekgusnfs$*)#&^]]',
    },
  });
  
  //using nodemailer

  // Send the email
  try {
    await transporter.sendMail({
      from: 'dekgusnfs@gmail.com',
      to: 'dekgusnfs@gmail.com',
      subject: 'New message from your website',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while sending the message' });
  }
}
