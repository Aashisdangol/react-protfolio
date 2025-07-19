
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
import NewHome from './pages/NewHome'
import Header from './Conponents/Header'
import Profile from './Conponents/Proflie'

function App() {

  return (
    <>
      <DarkMode/>

  <div className="container mx-auto">
      <div className="flex flex-wrap justufy-items-center ">
        <Header/>
        <Profile />
        <div className='flex-1'>
          <Routes>
            <Route path = '/' element={<HomePage/>} />
            <Route path = '/Skills' element={<SkillPage/>} />
            <Route path = '/Projects' element={<ProjectsPage/>} />
            <Route path = '/About' element={<AboutPage/>} />
            <Route path = '/Contact' element={<ContactPage/>} />
            <Route path = '/new' element = {<NewHome/>}/>
        </Routes>
        </div>
      </div>
      
    <GOToTop/>
  </div>
    <Footer/>
    </>
  )
}

export default App
