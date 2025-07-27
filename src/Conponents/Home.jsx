import MyService from "./MyService";

const Home = () => {
    return (
        <section className="p-7" > 
            <div >
                <h1 className="font-bold text-4xl flex justify-center mb-4">Welcome to My Portfolio</h1>
                <p className="">Experienced software developer proficient in JavaScript and Node.js, with a strong focus on designing and building RESTful APIs. Skilled at using Express.js and modern tooling to create scalable, maintainable back-end services and seamless integrations. Passionate about writing clean, efficient code and continuously learning new techniques to solve complex problems.</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2  w-full h-10 gap-4">
                <div >Age... 23</div>
                <div >Residence ... Australia</div>
                <div>FreeLance ... Available</div>
                <div >Address ... Sydney, Australia</div>
            </div>

            <div className="pt-8">
                <MyService />
            </div>



            
        </section>
    )
}

export default Home;