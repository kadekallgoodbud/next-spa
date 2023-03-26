import { useState } from 'react';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post('/api/sendinblue', formData);

      if(response.data.success) {
        setIsLoading(false); 
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } 
      else {
        setIsLoading(false); 
        setFormStatus('error');
      }
    } catch (error) {
      setIsLoading(false); 
      console.error(error);
      setFormStatus('error');
    }
  };
  return (
  <>
    <div className='w-full'>
      <form onSubmit={handleSubmit} >
        <h2 className='text-3xl font-bold text-[#0652A0] mt-3 mb-11'>Contact Me</h2>
         <div className='flex flex-col gap-3'>
            <label className='text-[#0652A0] text-lg font-medium' htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange}  />
            <label className='text-[#0652A0] text-lg font-medium' htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange}  />
            <label className='text-[#0652A0] text-lg font-medium' htmlFor="message">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} ></textarea>
         </div>
          <button className='text-white text-md bg-[#0C40B0] my-7 px-4 py-2 rounded-md' type="submit" disabled={isLoading}>
            {isLoading && "Sending your flying paper" }
            Submit <SendIcon sx={{
                fontSize: "17px",
                marginTop: "-3px",
                marginLeft: "7px"
            }}/>
          </button>
      </form>

      <div className='callback-response-wrapper' >
        {formStatus === 'success' && (
          <p className=' text-sm text-green-500 font-md '>Thank you! Your message has been sent.</p>
        )}
        {formStatus === 'error' && (
          <p className=' text-sm text-red-500 font-md '>Sorry, there was an error sending your message. Please try again later.</p>
        )}
      </div>
    </div>
  </>
  );
};
