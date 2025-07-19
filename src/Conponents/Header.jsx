import { Link } from "react-router";

const Header = () => {
    return (
        <header className="flex-0 pl-6"> 
            <nav className="h-full flex items-center flex-wrap ">   
               <ul className="nav-items">
                    <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;
