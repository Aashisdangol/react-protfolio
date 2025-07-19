import profileImage from'../assets/profile-image.png'
const HeroSection = () => {

    return (


        <section id="home" className="-mt-8 bg-(--primary-color)">
          
  
          <div className="profile-image ">
            <img src={profileImage} alt="profile" className="object-cover rounded-full overflow-hidden w-25 h-25 mx-auto" />
          </div>
        <div className=" flex justify-center">
          <div className="intro-text">
            <p>Hi I am <b>Aashis Dangol</b></p>
            <p><b>Software Engineer</b></p>
            <br />
            <p>I love coding!</p>
          </div>
        </div>
        <div className='flex justify-around'>
              <a href="assets/myresume.pdf" download>
                <button className="download-btn">
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>

              <a href="tel:+61452519338" className=" items-center rounded-full py-6 px-6 bg-black text-white ">
                Contact Me <i className="fa-solid fa-phone-volume"></i>
              </a>
            </div>
      </section>
    )
}

export default HeroSection;