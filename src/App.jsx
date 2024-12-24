import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Aboutme from './pages/Aboutme'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Timeline from './pages/Timeline'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);
  return (
    <>
        <Toaster/>
        <Navbar />
        <LandingPage />
        {/* <Aboutme /> */}
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
    </>
  )
}

export default App
