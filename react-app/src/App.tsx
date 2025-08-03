import { useState } from 'react'
import './components/general.css'
import './components/header.css'
import './components/main.css'


import './App.css'

function App() {

  return (
    <>
      <header className="header">
        <div className="header-left">
          Gianluca Cabrera
        </div>
        <div className="header-right">
          <div className="profile-access">Profile</div>
          <div className="education-access">Education</div>
          <div className="experience-access">Experience</div>
          <div className="projects-access">Projects</div>
          <div className="contact-access">Contact</div>
        </div>
      </header>
        <main>
        <section className="profile">
          <div className="profile-container">
            <div className="profile-left">
              <div className="profile-description">Hello, I'm Gianluca Cabrera a bachelor student at Eindhoven University of Technology</div>
            </div>
            <div className="profile-right">
              <img className="profile-picture" src="assets/passport-photo-2025-07.JPG" />
            </div>
          </div>
        </section>
        <section>
          <hr className="section-delimiter" />
          <h1 className="section-header">Education</h1>
          <hr className="section-delimiter" />
          <div className="timeline">
            <div className="evidence-container">
              <div className="evidence-container-left">
                <h3>2021 - 2022</h3>
              </div>
              <div className="evidence-container-right">
                <p className="evidence-title">International Baccalaureate Diploma Program (IBDP)</p>
                <p>St George&#39;s College, Quilmes.<br />Subjects: Mathematics (AA HL), Physics (HL), English (HL), Spanish (SL),  Economics (SL), and History (SL).</p>
              </div>
            </div>
            <div className="evidence-container">
              <div className="evidence-container-left">
                <h3>2022</h3>
              </div>
              <div className="evidence-container-right">
                <p className="evidence-title">IELTS Academic</p>
                <p>Band score of 8.5.</p>
              </div>
            </div>
            <div className="evidence-container">
              <div className="evidence-container-left">
                <h3>2022</h3>
              </div>
              <div className="evidence-container-right">
                <p className="evidence-title">Japanese Language Proficiency Test (JLPT)</p>
                <p>Centro de Cultura e Idioma Japonés en la Argentina.<br />N2 Level.</p>
              </div>
            </div>
            <div className="evidence-container">
              <div className="evidence-container-left">
                <h3>2023 - Present</h3>
              </div>
              <div className="evidence-container-right">
                <p className="evidence-title">Bachelor of Computer Science and Engineering</p>
                <p>Eindhoven University of Technology (TU/e).<br />Expected graduation: 2026.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <hr className="section-delimiter" />
          <h1 className="section-header">Experience</h1>
          <hr className="section-delimiter" />
          <div className="timeline">
            <div className="evidence-container">
              <div className="evidence-container-left">
                <h3>March - June 2022</h3>
              </div>
              <div className="evidence-container-right">
                <p className="evidence-title">Teaching chess at local school</p>
              </div>
            </div>
            <div className="evidence-container">
              <div className="evidence-container-left">
                <h3>May 2022</h3>
              </div>
              <div className="evidence-container-right">
                <p className="evidence-title">Competed in Argentine Mathematics Olympiad.</p>
              </div>
            </div>
            <div className="evidence-container">
              <div className="evidence-container-left">
                <h3>March - October 2024</h3>
              </div>
              <div className="evidence-container-right">
                <p className="evidence-title">Logistics Handler at Prodrive Technologies</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <hr className="section-delimiter" />
          <h1 className="section-header">Projects</h1>
          <hr className="section-delimiter" />
          <div className="project-grid" >
            <div className="project-container">
              <div className="project-image-container">
                <img className="project-image" src="assets/placeholder.jpg" />
              </div>
              <div className="project-description-container">
                <p>
                  A short description of the project
                </p>
                <button>View on GitHub</button>
              </div>
            </div>
            <div className="project-container">
              <div className="project-image-container">
                <img className="project-image" src="assets/placeholder.jpg" />
              </div>
              <div className="project-description-container">
                <p>
                  A short description of the project
                </p>
                <button>View on GitHub</button>
              </div>
            </div>
          </div>
        </section>
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
      </main>
    </>
  )
}

export default App
