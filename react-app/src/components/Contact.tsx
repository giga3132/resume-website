import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
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
            <img src="assets/github-icon.png" className="github-icon" />
            <img src="assets/linkedin-icon.png" className="linkedin-icon" />
          </div>
        </div>
        <div className="contact-right">
          Form
        </div>  
      </div>
    </section>
  )
}

export default Contact
