import { Link } from "react-router";

const Footer = () => {

    return (
        <footer>
        <div className="flex-container footer-container">
          <div>
            <h6>Links</h6>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
  
          <div>
            <h6>Social Links</h6>
            <ul>
              <li><Link to="https://www.linkedin.com/in/aashis-dangol-8b0bb0270/" target="_black">LinkedIn</Link></li>
              <li><Link to="https://github.com/Aashisdangol" target="_blank">Github</Link></li>
              <li><Link to="https://www.facebook.com/dangol.aasish/" target="_blank">Facebook</Link></li>
              <li><Link to="https://www.instagram.com/dangol_aashis/" target="_blank">Instagram</Link></li>
              <li><Link to="/"></Link></li>
          </ul>
          </div>
        </div>
  
        <center className="copy-right-text">&copy; Copy right all reserved. Made by Aashis Dangol</center>
      </footer>
    )
}

export default Footer;