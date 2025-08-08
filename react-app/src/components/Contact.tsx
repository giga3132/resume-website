import React from 'react'
import GitHubIcon from "../assets/github-icon.png"
import LinkedInIcon from "../assets/linkedin-icon.png"
import Form from '../components/Form.tsx';

const Contact = () => {

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-title">
            Contact Me
          </div>
          <div className="contact-email">
            <p className="email-title">Email</p>
            <p className="personal-email">gianlucacabrera@gmail.com</p>
          </div>
          <div className="socials-container">
            <a href="https://github.com/giga3132" target="_blank">
              <img src={GitHubIcon} className="github-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gianluca-cabrera-8bb0102a0" target="_blank">
              <img src={LinkedInIcon} className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="contact-right">
          <Form />
        </div>  
      </div>
    </section>
  )
}

export default Contact
