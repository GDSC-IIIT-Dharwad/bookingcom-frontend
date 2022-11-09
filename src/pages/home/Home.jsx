import React from 'react'
<<<<<<< HEAD
import HomeCss from './home.css';
function Home() {
  return (
    <div>
<div className="offers">
  <h1>Offers</h1>
  <h3>Promotions,Deals & Special offers for you.</h3>
</div>

<section id="sn-banner" class="section-p1">


  <div class="banner-box">
   <h3>Save 15% with Late Escape Deals</h3>
   <h4>Check one more</h4>
    <h4>dedtination off your wishlist </h4>
    <button class="white"> Explore Deals </button>
=======
import Explorearround from './explorearround'
import Slider from './Slider_Component/Slider'
import Searchbar from './Search_Component/Searchbar'

function Home() {
  return <div>
    <Slider />
    <Searchbar/>
    <Explorearround />
>>>>>>> 023016c432abd1ad95a06f359847111e9a9bf737
  </div>



  <div class="banner-box banner-box2">
    <h3>Escape for a while</h3>
    
<p>Enjoy the fredom of an extended stay on Booking.com</p>
    <button class="white">Discover Extended Stays</button>
  </div>
</section>

    </div>
  )
}

export default Home
