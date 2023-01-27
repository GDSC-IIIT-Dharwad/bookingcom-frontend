import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import HotelsList from './pages/hotelsList/HotelsList'
import Hotel from './pages/hotel/Hotel'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotelsList" element={<HotelsList/>}/>
        <Route path="/hotelsList/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>      
      
      
  )
}

export default App
