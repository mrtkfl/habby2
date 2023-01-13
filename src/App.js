import React from 'react'
import Navbar from './Components/Navbar'
import Search from "./Components/pages/Search"
import Home from './Components/pages/Home'
import { Route, Routes } from "react-router-dom"
import BottomNav from './Components/BottomNav'
import Profile from './Components/pages/Profile'
import Chat from './Components/pages/Chat'
import CreateEvent from './Components/pages/CreateEvent'
import Event from './Components/pages/Event'
import "./styles.css"
import YourSchedule from './Components/pages/YourSchedule'
import Landing from './Components/pages/Landing'
import Login from './Components/pages/Login'
import Sign from './Components/pages/Sign'

function App() {
  return (
  <>
  <div className='wrapper'>
    <Navbar />
    <div className='content-container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/schedule" element={<YourSchedule />} />
        <Route path="/landing" element={<Landing />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/singup" element={<Sign />} /> 
      
      </Routes>
    </div>
  </div>
  <div className='b-wrapper'>
    <BottomNav />
  </div>
  

  </>
  )
  
    
  
}

export default App
