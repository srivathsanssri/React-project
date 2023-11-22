import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomAvailabilityComponent = () => {
  const [persons, setPersons] = useState(4);
  const [availableRooms, setAvailableRooms] = useState(10);
  const navigate = useNavigate();

  const handlePersonChange = (event) => {
    const newPersons = parseInt(event.target.value, 10);
    setPersons(newPersons);

    if (newPersons === 4) {
      setAvailableRooms(10 - 1);
    } else {
      setAvailableRooms(10);
    }
  };

  const bookRoom = () => {
    setAvailableRooms((prevRooms) => prevRooms - 1);
    navigate('/BgVideo');
  };

  return (
    <div className='newcon' style={{lineHeight:3,height:1000,width:1000,top:220,position:'absolute',left:1050,bottom:1000}}>
      <h2 style={{}}>Room Availability</h2>
      <p style={{}}>Number of Persons: {persons}</p>
      <p style={{}}>Available Rooms: {availableRooms}</p>
      <label>
        Number of Persons:
        <input
          type="number"
          min="1"
          max="4"
          value={persons}
          onChange={handlePersonChange}
        />
      </label>

      <button onClick={bookRoom}>Book Room</button>
    </div>
  );
};

export default RoomAvailabilityComponent;
