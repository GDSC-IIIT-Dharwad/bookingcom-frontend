import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HotelPage from './pages/hotelList/HotelPage'

import './index.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route path="/stays" element={<HotelPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
