import './Header.css'

const Header = () => {


  return (
      <header className="header">
        <div className="header-left">
          Gianluca Cabrera
        </div>
        <nav className="header-right">
          <a href="#" className="profile-access">Profile</a>
          <a href="#education" className="education-access">Education</a>
          <a href="#experience" className="experience-access">Experience</a>
          <a href="#projects" className="projects-access">Projects</a>
          <a href="#contact" className="contact-access">Contact</a>
        </nav>
      </header>
  )
}

export default Header