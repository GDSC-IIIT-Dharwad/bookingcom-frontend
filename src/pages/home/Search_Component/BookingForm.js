import React, { useState } from 'react';
import "./BookingFrom.css";

function BookingForm() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      <button className="dropdown-btn" onClick={() => setShowOptions(!showOptions)}>
        {adults} Adult, {children} Children, {rooms} Rooms
        <i className="fa fa-caret-down"></i>
      </button>
      {showOptions && (
        <div className="dropdown-container">
          <div className="form-group">
            <label>Adults</label>
            <button onClick={() => setAdults(adults - 1)}>-</button>
            {adults}
            <button onClick={() => setAdults(adults + 1)}>+</button>
          </div>
          <div className="form-group">
            <label>Children</label>
            <button onClick={() => setChildren(children - 1)}>-</button>
            {children}
            <button onClick={() => setChildren(children + 1)}>+</button>
          </div>
          <div className="form-group">
            <label>Rooms</label>
            <button onClick={() => setRooms(rooms - 1)}>-</button>
            {rooms}
            <button onClick={() => setRooms(rooms + 1)}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
