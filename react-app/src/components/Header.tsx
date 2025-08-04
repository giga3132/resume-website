import './Header.css'

const Header = () => {
  return (
      <header className="header">
        <div className="header-left">
          Gianluca Cabrera
        </div>
        <nav className="header-right">
          <a className="profile-access">Profile</a>
          <a className="education-access">Education</a>
          <a className="experience-access">Experience</a>
          <a className="projects-access">Projects</a>
          <a className="contact-access">Contact</a>
        </nav>
      </header>
  )
}

export default Header