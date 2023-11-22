import React from 'react'
import pictureBg from '../assets/pictureBg.mp4';
import '../assets/css/contact.css'
export const Contact = () => {
  return (
    <>
      <video src={pictureBg} autoPlay loop muted/>
    <div className='Bermuda'>
        <h1>Feedback section</h1>
        <p>Contact details:</p><br></br>
        <p>9328363820</p>
        <p>
        Tell us about your Problems:
        </p>
    </div>
    <div className='owner'>
        <p>Manager</p><br></br>
        <p>Contact:9839383983</p>
        <p>email:baymaxsnj@gmail.com</p><br></br>
        <p>Assistant Manager</p><br></br>
        <p>Contact:898790474033</p>
        <p>email:sanjaysanjay@gmail.com</p>
    </div>
    </>
  )
}
