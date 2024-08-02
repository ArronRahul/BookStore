import React from 'react'
import Home from './Pages/Home'
import Course from './Pages/Course'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App