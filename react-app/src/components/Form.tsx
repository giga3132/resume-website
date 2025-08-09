import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const gmailForm = useRef<HTMLFormElement>(null);
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const confirmationMessage = document.getElementById('confirmation-message') as HTMLElement;
  const [messageSent, setMessageSent] = useState<boolean | null>(null);


  function handleChange (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}))
  }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_fzwkn44',
        'template_49qekbg',
        gmailForm.current!,
        {
          publicKey: publicKey,
        })
      .then(
        () => {
          console.log('Message sent!');
          setMessageSent(true);
          confirmationMessage.style.display = 'block';
          setTimeout(() => confirmationMessage.style.display = 'none', 3000);
        },
        (error) => {
          console.log('Failed to send message:', error.text);
          setMessageSent(false);
          confirmationMessage.style.display = 'block';
          setTimeout(() => confirmationMessage.style.display = 'none', 3000);
        },
      );
  }
  return (
    <form ref={gmailForm} className="form" onSubmit={handleSubmit}>
      <input type="text" className="input-field" name="name" value={form.name} placeholder='Your Name' onChange={handleChange} required></input>
      <input type="text" className="input-field" name="email" value={form.email} placeholder='Your Email Address' onChange={handleChange} required></input>
      <textarea className="input-field" maxLength={200} name="message" rows={6} value={form.message} placeholder="Your Message" onChange={handleChange} required></textarea>
      <button type="submit" className="submit-button">Submit</button>
      <div id="confirmation-message" className="confirmation-message">{messageSent ? 'Message sent!' : 'Failed to send message.'}</div>
    </form>
  )
}

export default Form
