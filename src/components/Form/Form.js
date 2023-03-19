import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data.error || 'An error occurred while submitting the form');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting the form');
    }
  };
    return(
            <main>
                    <div className='bg-white w-[600px] p-10 rounded-md'>         
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                          <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe..." />
                        </div>
                        <div className="mb-6">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@yourdomain.com" required />
                        </div>
                        <div className="mb-6">
                          <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20" placeholder="Type Your Message..." required />
                        </div>
                        {error && <p>{error}</p>}
                        {success ? (
                          <p>Thank you for your message!</p>
                        ) : (
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                        )}
                    </form>
                    </div>
                </main>
        )

};

