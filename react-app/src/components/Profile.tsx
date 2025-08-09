import ProfilePicture from '../assets/passport-photo-2025-07.jpg';


const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-title">About Me</div>
          <div className="profile-description">Hello, I'm Gianluca Cabrera, a bachelor student at Eindhoven University of Technology. <br />  I am enthusiastic about technology and programming.</div>
        </div>
        <div className="profile-right">
          <img className="profile-picture" src={ProfilePicture} />
        </div>
      </div>
    </section>
  )
}

export default Profile
