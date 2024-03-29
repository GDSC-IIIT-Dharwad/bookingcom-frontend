import Buttons2 from './Buttons2'
import { FaHotel } from 'react-icons/fa'
import React from 'react'
import { MdFlight, MdCarRental, MdOutlineAttractions } from 'react-icons/md'
import { NavLink } from "react-router-dom";

function NavbarBottomItems() {
  return (
    <>
      <NavLink to='/stays'>
        <Buttons2 icon={<FaHotel size="1.2rem" />} text={'Stays'} />
      </NavLink>
      <Buttons2
        icon={<MdOutlineAttractions size="1.4rem" />}
        text={'Attractions'}
      />
      <Buttons2 icon={<MdFlight size="1.4rem" />} text={'Flights'} />
      <Buttons2 icon={<MdCarRental size="1.5rem" />} text={'Rentals'} />
    </>
  )
}

export default NavbarBottomItems
