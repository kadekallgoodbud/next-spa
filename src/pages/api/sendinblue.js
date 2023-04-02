const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: "dekgusnfs@gmail.com",
    pass: "ODNsaKYRFC6MJ3bh"
  }
});

const sendinBlue = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const info = await transporter.sendMail({
        from: `${name} <${email}>`,
        to: "dekgusnfs@gmail.com",
        subject: "New Contact Form Submission",
        text: message,
        html: `<p>${message}</p>`
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
};

export default sendinBlue;
