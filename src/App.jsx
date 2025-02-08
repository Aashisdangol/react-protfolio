// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import profileImage from'./assets/profile-image.png'
import DarkMode from './Conponents/DarkMode'
import NavBar from './Conponents/NavBar'
import SideMenu from './Conponents/SideMenu'
import Work from './Conponents/Work'
import Skills from './Conponents/Skills'
import RecentWork from './Conponents/RecentWork'
import HeroSection from './Conponents/HeroSection'
import AboutME from './Conponents/AboutMe'
import Footer from './Conponents/Footer'
import GOToTop from './Conponents/GOToTop'
import GetInTouch from './Conponents/GetInTouch'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <DarkMode/>

  <div className="wrapper-container">
    <header>
      
      <nav>
        <div className="flex-container navbar-container">
          

          <NavBar/>
          <SideMenu/>
        </div>
      </nav>
    </header>
      <HeroSection/>

    
      <Work/>
      <Skills/>
    

    <section id="projects">
      <RecentWork/>
    </section>

    <AboutME/>

    <GetInTouch/>

    <Footer/>

    <GOToTop/>
  </div>
    </>
  )
}

export default App
