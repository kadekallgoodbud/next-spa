import React, {useState} from 'react';

export const FormContact = () => {
    const [ message, setMessage ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ subject, setSubject ] = useState('');
  
      const handleSubmit = async (e) => {
          e.preventDefault();
      
          let isValidForm = handleValidation();
           
            const res = await fetch("/api/sendgrid", {
              body: JSON.stringify({
                email: email,
                fullname: fullname,
                subject: subject,
                message: message,
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            });
      
            const { error } = await res.json();
            if (error) {
              console.log(error);
              return;
            }
          console.log(fullname, email, subject, message);
        };
  
};