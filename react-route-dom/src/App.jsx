import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Explore from './components/Explore'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
