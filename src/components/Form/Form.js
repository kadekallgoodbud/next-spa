import { useState, useEffect } from 'react';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


export default function ContactForm(props) {
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
      const response = await axios.post(`${process.env.MAIN_NEXT_HOST}/sendinblue`, formData);

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

  const handleReset = () => {
      setFormData({name: '', email: '', message: ''});
  }

  // Call handleReset when the formStatus changes
  useEffect(() => {
    let timer;
    if (formStatus === 'success') {
      timer = setTimeout(() => {
        setFormStatus(null);
      }, 5000); // show the message for 5 seconds
    }
    else if (formStatus === 'error') {
      timer = setTimeout(() => {
        setFormStatus(null);
      }, 5000); // show the message for 5 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [formStatus]);

  return (
  <>
    <div className='w-full p-0'>
      <form onSubmit={handleSubmit} >
        <h2 className='text-3xl xs:text-2xl font-bold bg-gradient-to-r from-[color:var(---clr-headline-gradient)] to-[color:var(---clr-headline-gradient-secondary)] bg-clip-text text-transparent leading-normal mt-3 mb-7 xs:mb-4'>Contact Me</h2>
         <div className='flex flex-col gap-3'>
            <label className='text-md font-medium text-[color:var(--clr-label-modal)]' htmlFor="name">Name</label>
            <input placeholder='Your name...' className='h-10 px-3 focus:outline-none py-2 text-base xs:text-sm rounded-lg border-[1px] text-[color:var(--clr-input-text-modal)] border-solid border-[color:var(--clr-border-label)] bg-[color:var(--clr-input-modal)]' type="text" name="name"  id="name" value={formData.name} onChange={handleInputChange}  required onInvalid={e => e.target.setCustomValidity("Name is required")} onInput={e => e.target.setCustomValidity("")}/>
            
            <label className='text-md font-medium text-[color:var(--clr-label-modal)]' htmlFor="email">Email</label>
            <input placeholder='Your email...' className='h-10 px-3 focus:outline-none py-2 text-base xs:text-sm rounded-lg border-[1px] text-[color:var(--clr-input-text-modal)] border-solid border-[color:var(--clr-border-label)] bg-[color:var(--clr-input-modal)]' type="email" name="email"  id="email" value={formData.email} onChange={handleInputChange} required onInvalid={e => e.target.setCustomValidity("Email is required and enter a valid email address")} onInput={e => e.target.setCustomValidity("")} />
            
            <label className='text-md font-medium text-[color:var(--clr-label-modal)]' htmlFor="message">Message</label>
            <textarea placeholder="Tell me something here..." className="h-24 px-3 focus:outline-none py-2 text-base xs:text-sm rounded-lg border-[1px] text-[color:var(--clr-input-text-modal)] border-solid border-[color:var(--clr-border-label)] bg-[color:var(--clr-input-modal)]" name="message"  id="message" value={formData.message} onChange={handleInputChange} required onInvalid={e => e.target.setCustomValidity("Message is required")} onInput={e => e.target.setCustomValidity("")} ></textarea>
         </div>

          {/* Callback Status Message */}
          <div className='callback-response-wrapper mt-5 p-0 mb-0'>
            {formStatus === 'success' && (
              <div className='flex flex-row gap-3 xs:gap-2 items-center'>
                <CheckCircleOutlineIcon 
                sx={{
                  fill:"#16A34A",
                  fontSize:"15px",
                  '@media (max-width: 600px)': {
                    fontSize: '13px',
                  }
                }}
                />
                <p className=' text-sm text-green-600 font-md '>Thank you! Your message has been sent.</p>
              </div>  
            )}
            {formStatus === 'error' && (
              <div className='flex flex-row gap-3 xs:gap-2 items-center'>
                <ErrorOutlineIcon 
                sx={{
                  fill:"#DC2626",
                  fontSize:"15px",
                  '@media (max-width: 600px)': {
                    fontSize: '13px',
                  }
                  }}
                />
                <p className=' text-sm text-red-600 font-md '>Sorry, there was an error sending your message. Please try again later.</p>
              </div>  
            )}
          </div>

         <div className='flex flex-row items-center justify-end gap-8 xs:gap-6 pt-4 '>
            <button type='button' onClick={() => { handleReset(); props.onClick(); }} className='text-[color:var(--clr-label-modal)] text-md xs:text-sm font-medium'>Cancle</button>
            <button className='text-white text-md xs:text-sm bg-[#0C40B0] px-4 py-2 rounded-lg ' type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className='flex flex-row gap-2' role="status">
                    <span className='text-md'>Sending</span>
                    <svg aria-hidden="true" className="inline w-6 h-6 mx-auto animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </>
              ):(
                <>
                  Submit <SendIcon sx={{
                    fontSize: "17px",
                    marginTop: "-3px",
                    marginLeft: "7px"
                }}/>
                </>
              )}
            </button>
          </div>
      </form>                
    </div>
  </>
  );
};
