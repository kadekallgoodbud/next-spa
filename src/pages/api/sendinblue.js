const nodemailer = require("nodemailer");
require('dotenv').config()

var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

// Uncomment below two lines to configure authorization using: partner-key
// var partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = 'YOUR API KEY';

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    service: "sendinblue",
    port: 587,
    auth: {
      user: process.env.SENDINBLUE_EMAIL,
      pass: process.env.SENDINBLUE_PASSWORD
    },
  });

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // Send transactional email using SendinBlue API
      var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
      sendSmtpEmail.to = [{email: email, name: name}];
      sendSmtpEmail.templateId = 59;
      sendSmtpEmail.params = { name: name, surname: '', message: message }; // Update with required parameters
      sendSmtpEmail.headers = { 'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2' };

      const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log('SendinBlue API called successfully. Returned data: ' + JSON.stringify(response));

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
