import React from 'react'
import HotelListCard from './HotelListCard'
import './HotelPage.css'
import {hotelListCardData} from './hotelListCardData'

function HotelPage() {
  return (
    <div className="main-page">
      <div className="HotelPage">
        <div className="search">Search</div>
        <div className="dest_input">
          <label className="destination">Destination</label>
          <div>
            <input type="text" placeholder="City" />
          </div>
        </div>
        <div className="date_input">
          <label className="Cindate">Check-in date</label>
          <div>
            <input type="date" /> to
            <input type="date" />
          </div>
        </div>
        <div className="filter">
          Filter
          <div className="filter_contain">
            <div className="filter_elements">
              <label id="">Min Price(per night)</label>
              <input type="number" placeholder="₹" />
            </div>
            <div className="filter_elements">
              <label id="">Max Price(per night)</label>
              <input type="number" placeholder="₹" />
            </div>
            <div className="filter_elements">
              <label id="">Adult</label>
              <input type="number" />
            </div>
            <div className="filter_elements">
              <label id="">Children</label>
              <input type="number" />
            </div>
            <div className="filter_elements">
              <label id="">Room</label>
              <input type="number" />
            </div>
          </div>
        </div>
        <div className="sub_btn">
          <button type="submit">Search</button>
        </div>
      </div>
      <div className="list">
        {
          hotelListCardData.map((data)=>(
            <HotelListCard img={data.img} title={data.title} text={data.text} price={data.price} location={data.location}/>
          ))
        }
      </div>
    </div>
  )
}

export default HotelPage
