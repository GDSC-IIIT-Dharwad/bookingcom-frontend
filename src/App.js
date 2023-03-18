import React, {useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState} from "react";
import HotelPage from './pages/hotelList/HotelPage';
import Home from './pages/home/Home'
import ClipLoader from "react-spinners/ClipLoader";
import './index.css'





function App() {

  
    const [loading,setloading]=useState(false);
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{
        setloading(false)
      },2000)
    },[])


  return (
    <>
    {
      loading?
      <div className='loader'>
      <ClipLoader
        color={'#36d7b7'}
        loading={loading}
        size={100}
      />
      </div>
      :
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
        <Route path="/stays" element={<HotelPage/>
      }></Route>
      </Routes>
      <Footer/>
    </Router>
    }
     
    </>
  )
}

export default App
