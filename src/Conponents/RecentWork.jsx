import protfolioImage from'../assets/portfolio-image.png'
import RecentWork1 from'../assets/RecentWork1.png'

const RecentWork = () => {

    return (
        <section id="projects">

        <center><h2>My Recent Work</h2></center>

<div className="flex-container">
  {/* <!----Project 1------> */}
  <div className="project-card">
    <div className="card-image">
      <img src={RecentWork1} alt="project-image" />
    </div>

    <div className="card-icons">
      <a href="#"><i className="fa-brands fa-github"></i></a>
      <a href="#"><i className="fa-brands fa-chrome"></i></a>
    </div>

    <div className="card-text">
      <h4>MailMuse</h4>
      <p>Send your mail in Fast And Easy way</p>
    </div>
  </div>

  {/* <!----Project 2------> */}
  <div className="project-card">
    <div className="card-image">
      <img src={protfolioImage} alt="project-image" />
    </div>

    <div className="card-icons">
      <a href="#"><i className="fa-brands fa-github"></i></a>
      <a href="#"><i className="fa-brands fa-chrome"></i></a>
    </div>

    <div className="card-text">
      <h4>Personal Portfolio</h4>
      <p>HTML | CSS</p>
    </div>
  </div>

  {/* <!----Project 3------> */}
  <div className="project-card">
    <div className="card-image">
    <img src={protfolioImage} alt="project-image" />
    </div>

    <div className="card-icons">
      <a href="#"><i className="fa-brands fa-github"></i></a>
      <a href="#"><i className="fa-brands fa-chrome"></i></a>
    </div>

    <div className="card-text">
      <h4>Personal Portfolio</h4>
      <p>HTML | CSS</p>
    </div>
  </div>

  {/* <!----Project 4------> */}
  <div className="project-card">
    <div className="card-image">
      <img src={protfolioImage} alt="project-image" />
    </div>

    <div className="card-icons">
      <a href="#"><i className="fa-brands fa-github"></i></a>
      <a href="#"><i className="fa-brands fa-chrome"></i></a>
    </div>

    <div className="card-text">
      <h4>Personal Portfolio</h4>
      <p>HTML | CSS</p>
    </div>
  </div>

  {/* <!----Project 5------> */}
  <div className="project-card">
    <div className="card-image">
      <img src={protfolioImage} alt="project-image" />
    </div>

    <div className="card-icons">
      <a href="#"><i className="fa-brands fa-github"></i></a>
      <a href="#"><i className="fa-brands fa-chrome"></i></a>
    </div>

    <div className="card-text">
      <h4>Personal Portfolio</h4>
      <p>HTML | CSS</p>
    </div>
  </div>

  {/* <!----Project 6------> */}
  <div className="project-card">
    <div className="card-image">
      <img src={protfolioImage} alt="project-image" />
    </div>

    <div className="card-icons">
      <a href="#"><i className="fa-brands fa-github"></i></a>
      <a href="#"><i className="fa-brands fa-chrome"></i></a>
    </div>

    <div className="card-text">
      <h4>Personal Portfolio</h4>
      <p>HTML | CSS</p>
    </div>
  </div>

  {/* <!----Project 7------> */}
  <div className="project-card">
    <div className="card-image">
      <img src={protfolioImage} alt="project-image" />
    </div>

    <div className="card-icons">
      <a href="#"><i className="fa-brands fa-github"></i></a>
      <a href="#"><i className="fa-brands fa-chrome"></i></a>
    </div>

    <div className="card-text">
      <h4>Personal Portfolio</h4>
      <p>HTML | CSS</p>
    </div>
  </div>
</div>
        </section>
    )
}

export default RecentWork;