import HomePage from "../pages/HomePage";

1
const Profile = () =>{ 
    return (
        <section className='flex-1 bg-[#222]'>
            <div className="background">
                <img src="https://ryancv.bslthemes.com/developer/wp-content/uploads/sites/3/2022/07/dev-bg-4-1200x744.jpg" className = 'w-full max-h-[500px] rounded-lg'/>
            </div>
            <HomePage />
        </section>
    )
};

export default Profile;