import React from "react";
import "./Contact.css";
import linkedin from "./assets/social-icons/LinkedIn.svg";
import github from "./assets/social-icons/GitHub.svg";

function Contact() {
  return (
    <>
      <section id="contact" className="section contact">
        <h1 className="contact-title">contact.</h1>
        <p>Get in touch with me via social media or send me an email.</p>
        <div className="social-icons-container">
          <img src={linkedin} className="social-icon" alt="LinkedIn" />
          <img src={github} className="social-icon" alt="GitHub" />
        </div>
      </section>

      <section className="section contact-form-frame">
        <p className="contact-form-title">Send me an email</p>
        <form className="contact-form">
          <div className="form-left">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-right">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" />
          </div>

          <button type="submit" className="cta-btn-email">Send Email</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
