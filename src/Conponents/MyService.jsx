const MyService = () => {
    return (

        <section className="pt-4">
            <div className="font-bold text-xl flex justify-center"> My Services</div>
            <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                <i class="fab fa-html5 fa-2x"></i>
                <p className="font-bold">Front-end</p>
                <p>Modern and mobile-ready website that will help you reach all of your marketing.</p>



                </div>
                <div>
                <i class="fab fa-node-js fa-2x"></i>
                <p className="font-bold">Back-end</p>
                <p>Building and maintaining the server-side logic and database interactions.</p>
                </div>
                <div>
                <i class="fab fa-wordpress fa-2x"></i>
                <p className="font-bold">WordPress Development</p>
                <p>Creating and managing WordPress websites, themes, and plugins.</p>
                </div>
                <div>
                <i class="fas fa-shield-alt fa-2x"></i>
                <p className="font-bold">WordPress Security</p>
                <p>Implementing security measures to protect WordPress websites from vulnerabilities.</p>
                </div>

            </div>
        </section>
    )
}

export default MyService;