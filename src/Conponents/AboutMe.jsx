import profileImage from'../assets/profile-image.png'
const AboutME = () => {

    return (
        <section className="about-me-section" id="about">
      <center><h2>About Me</h2></center>

      <div className="flex-container about-me-container">
        <div><img src={profileImage} alt="profile-image" /></div>
        
        <div className="bio-container">
          <h4>Aashis Dangol</h4>
          <p>Ashis Dangol is a passionate and driven software developer with a growing command of full-stack technologies, including React, Node.js, and Express.js. Known for a strong foundation in web development, Aashis brings creativity and precision to every project—from responsive front-end designs to efficient back-end logic. With a curious mindset and a commitment to continuous learning, he actively explores emerging trends like Ghibli-style UI/UX, CSS animations, and REST API integration. Aashis thrives in collaborative environments, values clean and maintainable code, and is equally enthusiastic about sharing knowledge with peers. His focus on both the art and science of development reflects a long-term vision for creating meaningful, user-centered applications.
          </p>
        </div>
      </div>
    </section>
    )
}

export default AboutME;