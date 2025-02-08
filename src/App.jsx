
import './App.css'
import DarkMode from './Conponents/DarkMode'
import NavBar from './Conponents/NavBar'
import Footer from './Conponents/Footer'
import GOToTop from './Conponents/GOToTop'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import SkillPage from './pages/SkillPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <DarkMode/>

  <div className="wrapper-container">
      <NavBar/>
      <Routes>
          <Route path = '/' element={<HomePage/>} />
          <Route path = '/Skills' element={<SkillPage/>} />
          <Route path = '/Projects' element={<ProjectsPage/>} />
          <Route path = '/About' element={<AboutPage/>} />
          <Route path = '/Contact' element={<ContactPage/>} />
      </Routes>
  <Footer/>
  <GOToTop/>
  </div>
    </>
  )
}

export default App
