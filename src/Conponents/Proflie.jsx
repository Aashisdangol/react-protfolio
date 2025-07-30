import HomePage from "../pages/HomePage";
import HeroSection from "../assets/HeroSection.png"

1
const Profile = () =>{ 
    return (
        <section className='flex-1 bg-[#222]'>
            <div className="background">
                <img src={HeroSection} className = 'w-full max-h-[500px] rounded-lg'/>
            </div>
             
            <HomePage />
        </section>
    )
};

export default Profile;