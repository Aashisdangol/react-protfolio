import { Link } from "react-router";

const Header = () => {
    return (
        <header className="flex-0 pl-6 bg-[#222]"> 
            <nav className="h-full flex items-center flex-wrap ">   
               <ul className="nav-items">
                    <li className="px-8">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-8">
                    <Link to="/skills">Skills</Link>
                </li>
                <li className="px-8">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="px-8">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-8">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="px-8">
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;
