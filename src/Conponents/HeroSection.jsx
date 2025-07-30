import profileImage from "../assets/profile-image.png";
import Link from "./common/Link";
import HeroSectionAnimation from "./HeroSectionAnimation";
const HeroSection = () => {
  return (
    <section id="home" className="-mt-8">
      <div className="profile-image ">
        <img
          src={profileImage}
          alt="profile"
          className="object-cover rounded-full overflow-hidden w-25 h-25 mx-auto"
        />
      </div>
      <div className=" flex justify-center">
        <div className="intro-text">
         <HeroSectionAnimation />
          <br />
        </div>
      </div>

          <div className="flex gap-8 justify-center ">
            <a href="https://www.linkedin.com/in/aashis-dangol-8b0bb0270/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Aashisdangol" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a><i className="fa-brands fa-youtube"></i></a>
            <a href="tel:04161453369"><i className="fa-solid fa-mobile"></i></a>
          </div>
        
      
      <div className="flex justify-around">
        <Link href="/assets/myresume.pdf" text="Download CV" download>
          Download CV <i className="fa-solid fa-download"></i>
        </Link>
        <Link href="tel:+61452519338" text="Download CV" download>
          Contact Me <i className="fa-solid fa-phone-volume"></i>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
