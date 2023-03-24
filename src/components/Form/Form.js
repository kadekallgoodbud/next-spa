import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/sendinblue', formData);

      if (response.data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
  };
  return (
    <form onSubmit={handleSubmit} >
      <h2>Contact Us</h2>

      {formStatus === 'success' && (
        <div >Thank you! Your message has been sent.</div>
      )}

      {formStatus === 'error' && (
        <div >Sorry, there was an error sending your message. Please try again later.</div>
      )}

      <div >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required />
      </div>

      <div >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
      </div>

      <div >
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
};
