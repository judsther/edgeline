import  { useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_461pma5'; 
    const templateID = 'template_7pspshu'; 
    const userID = 'DkWw27CJmIj1n4r1M'; 

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((response) => {
        alert('Email sent.', response.status, response.text);
        setStatus("Message sent! We'll get back to you soon.");
      }, (error) => {
        alert('Error sending your message, please try again.', error);
        setStatus('Error sending your message, please try again.');
      });

   
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">E-mail:</label>
        <input className='form-control'
          type="email"
          id="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>

        <div className="mb-3">
        <label className='form-label' htmlFor="message">Menssage:</label>
        <textarea className='form-control p-4'
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        </div>
        <button className='btn btn-outline-light' type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
};
