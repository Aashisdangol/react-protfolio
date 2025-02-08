const NavBar = () => {

    return (
        <>
        <div className="flex-container">
            <div className="logo-name">Dented</div>
            <div className="line">|</div>
            <div>Soft. Engineer</div>
          </div>
       <ul className="flex-container nav-items">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </>
    )
}

export default NavBar;