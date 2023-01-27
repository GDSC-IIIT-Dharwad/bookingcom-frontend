import React from 'react'
import BrowseByProperty from './BrowseByProperty/BrowseByProperty'
import Explorearround from './explorearround'
import Slider from './Slider_Component/Slider'
import Searchbar from './Search_Component/Searchbar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'


function Home() {
  return <div>
    <Navbar />
    <Slider />
    <Searchbar/>
    <Explorearround />
    <BrowseByProperty />
    <Footer />
  </div>
}

export default Home
