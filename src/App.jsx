
import './App.css'
import DarkMode from './Conponents/DarkMode'
import GOToTop from './Conponents/GOToTop'
import { Route, Routes } from 'react-router'
import SkillPage from './pages/SkillPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Header from './Conponents/Header'
import Profile from './Conponents/Proflie'
import Home from './Conponents/Home'
import Background from './Conponents/common/Background'
import BlogsPage from './pages/BlogPage'

function App() {

  return (
    <>
      <DarkMode/>

  <div className= "h-screen flex-container items-center container mx-auto ">
      <Background />
      <div className="lg:flex lg:max-h-[65vh] w-full lg:flex-nowrap rounded-lg border-white">
        <Header/>
        <Profile />
        <section className='flex-1 bg-[#222] '>
          <div className='overflow-y-auto h-full'>
            <Routes>
              <Route path = '/' element={<Home/>} />
              <Route path = '/Skills' element={<SkillPage/>} />
              <Route path = '/Projects' element={<ProjectsPage/>} />
              <Route path = '/About' element={<AboutPage/>} />
              <Route path = '/Contact' element={<ContactPage/>} />
              <Route path = '/Blogs' element = {<BlogsPage/>}/>
          </Routes>
          </div>
        </section>
      </div>
      
    <GOToTop/>
  </div>
    </>
  )
}

export default App
