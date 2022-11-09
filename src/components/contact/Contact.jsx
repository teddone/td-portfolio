import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaTelegramPlane} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();
  
  
  const sendEmail = (e) => {
    const btn = document.querySelector('#send-email');
    e.preventDefault();
    
    btn.innerHTML = "Sending..."
    
    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_PUBLIC_KEY;
    
    emailjs.sendForm(service_id, template_id, form.current, public_key)
    .then((result) => {
      form.current.children.from_name.value = ''
      form.current.children.from_email.value = ''
      form.current.children.message.value = ''
      btn.innerHTML = "Send Message"
      alert(`
      Message Sent!
      Thank you for contacting.
      I will get back to you shortly.`)
          console.log(result.text);
      }, (error) => {
          btn.innerHTML = "Send Message"
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="option">
            <MdOutlineEmail className="option__icon" />
            <h4>Email</h4>
            <h5>dmtworker@email.com</h5>
            <a href="mailto:dmtworker@email.com">Send Email</a>
          </article>
          <article className="option">
            <RiMessengerLine className="option__icon" />
            <h4>Messenger</h4>
            <h5>Toan Do</h5>
            <a href="http://m.me/tdonmeta">Messenger</a>
          </article>
          <article className="option">
            <FaTelegramPlane className="option__icon" />
            <h4>Telegram</h4>
            <h5>@vietape</h5>
            <a href="http://t.me/vietape">Connect on Telegram</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" row="7" placeholder="Enter Your Message..." required />
          <button id='send-email' type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact