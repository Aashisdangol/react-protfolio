const SideMenu = () => {

    return (
        <>

        < label for="hamburger-menu">
            <i className="fa-solid fa-bars"></i>
          </label>

          <input type="checkbox" id="hamburger-menu" />
       <div className="side-menu">
            <ul className="flex-container side-menu-items">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </>
    )
}

export default SideMenu;