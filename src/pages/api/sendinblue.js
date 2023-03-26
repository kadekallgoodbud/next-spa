const axios = require('axios')

const API_KEY = process.env.SENDINBLUE_API_KEY;

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    // inital state of loading status
    let isLoading = true; 
    
    try {
      const response = await axios.post(
        'https://api.sendinblue.com/v3/smtp/email',
        {
          sender: {
            name: name,
            email: email
          },
          to: [{ email: 'dekgusnfs@gmail.com' }],
          replyTo: { email },
          subject: 'New Contact Form Submission',
          textContent: message,
          htmlContent: `<p>${message}</p>`
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
          }
        }
      );

      isLoading = false; 
      res.status(200).json({ success: true });
    
    } catch (error) {
      console.error(error);
 
      isLoading = false; 
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
};
