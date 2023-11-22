import React, { useState } from 'react';
import '../assets/css/book.css';
import pictureBg from '../assets/pictureBg.mp4'
import { useNavigate } from 'react-router-dom';
const BookingForm = () => {
 const [booking, setBooking] = useState({});

 const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(booking);
 };
 const navigation=useNavigate();
 const handlebook = () =>{
  navigation("/Book");
 }

 

 return (
  <>
      <video src={pictureBg} autoPlay loop muted/>
    <div className='conpg1' style={{lineHeight:3,height:1000,width:1000,top:220,position:'absolute',left:1050,bottom:1000}}>
    
      <h1 style={{fontFamily:'cursive',color:'white'}}>Check For Day</h1>
      <form onSubmit={handleSubmit}>
        <label style={{fontFamily:'cursive',color:'white'}}>
          Check-in Date:


          <input
            type="date"
            name="checkInDate"
            onChange={handleChange}style={{padding: '10px',fontSize: '16px',borderRadius: '5px',border: '1px solid #ccc',paddingRight:"20px"}}
          />
        </label>
        <br></br>
        <label  style={{fontFamily:'cursive',color:'white'}}>
          Check-out Date:
          <input type="date" name="checkOutDate" onChange={handleChange} style={{padding: '10px',fontSize: '16px',borderRadius: '5px',border: '1px solid #ccc'}}/>
        </label>
        <br></br>
        <label  style={{fontFamily:'cursive',color:'white'}}>
          Number of Guests:
          <input
            type="number"
            name="numGuests"
            onChange={handleChange} style={{padding: '10px',fontSize: '16px',borderRadius: '5px',border: '1px solid #ccc'}}/>
        </label>
        <br></br>
        <button type="submit"  style={{fontFamily:'cursive',padding: '10px',fontSize: '16px',borderRadius: '5px',border: '1px solid #ccc'}} onClick={handlebook}>Submit</button>
      </form>
        <a href='/' style={{textDecoration:'none',color:'white'}}>Go Back</a>
   
    </div>
    </>
 );
};
export default BookingForm;

