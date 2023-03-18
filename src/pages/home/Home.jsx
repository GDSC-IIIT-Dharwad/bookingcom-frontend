import React, { useEffect, useState } from 'react'
import BrowseByProperty from './BrowseByProperty/BrowseByProperty'
import Explorearround from './explorearround'
import Slider from './Slider_Component/Slider'
import Searchbar from './Search_Component/Searchbar'
import { BeatLoader } from 'react-spinners';
import './Home.css'

function Home() {

  const [loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },2000)
  },[])


  return <div>
    
    {
      loading?
      <div className='beatloader'><BeatLoader color={'black'}/></div>
      :
      <>
      <Slider />
      <Searchbar/>
      <Explorearround />
      <BrowseByProperty />
      </>
    }
    
    
  </div>
}

export default Home
