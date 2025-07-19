import profileImage from'../assets/profile-image.png'
import Skills from './Skills';
const HeroSection = () => {

    return (


        <section id="home">
          
  
          <div className="profile-image w-24 h-24  ">
            <img src={profileImage} alt="profile" className="object-cover rounded-full overflow-hidden ml-50 " />
          </div>
        <div className="grid-container hero-section">
          <div className="intro-text">
            <p>Hi I am <b>Aashis Dangol</b></p>
            <p><b>Software Engineer</b></p>
            <br />
            <p>I love coding!</p>
            
            <a href="assets/myresume.pdf" download>
              <button className="download-btn">
                Download CV <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
        </div>
        <div>
          <Skills/>
        </div>
      </section>
    )
}

export default HeroSection;