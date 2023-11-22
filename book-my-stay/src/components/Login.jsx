import React, { useState } from 'react';
import '../assets/css/login.css';
import { Button } from '@mui/material';
import pictureBg from '../assets/pictureBg.mp4';
import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';

export const Login = () => {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[number,setNumber]=useState('');
    const[email,setEmail]=useState('');
    const navigation=useNavigate();
    const handleevent=()=>
    {
        navigation('/BookingForm');
        alert("You have Logged in!!!");
    }
    const Username1 = (event) =>{
        setUsername(event.target.value);
    }
    const Password1 = (event) => {
        setPassword(event.target.value);
    }
    const Number1 =(event) =>{
        setNumber(event.target.value);
    }
    const Submit1 = (event) =>{
        event.preventDefault();
        console.log(setUsername+" "+setPassword+" "+setNumber);
        console.log(username+" "+password+" "+number+" "+email);
    }
    const email1 = (event) => {
        setEmail(event.target.value);
    }

  return (
    <>
    <video src={pictureBg} autoPlay loop muted/>
    <div className='reality'>  
    <br></br>
    
    <form method="post" onSubmit={Submit1}>
    <h2 style={{right: "87%",position:"absolute",bottom:700,fontFamily:'cursive'}}>LOGIN</h2>
        <label htmlFor="email" style={{fontSize :20,fontFamily:'cursive'}}>Email</label><br></br>
        <input type="email" name="email" id="email" onChange={email1} required style={{borderRadius:"7px",height:"30px",width:"250px"}}></input><br></br><br></br>
        <label htmlFor="Username"style={{fontSize :20,fontFamily:'cursive'}}>UserName</label><br></br>
        <input type="text" name="username" id="username" onChange={Username1} required style={{borderRadius:"7px",height:"30px",width:"250px"}}></input><br></br><br></br>
        <label htmlFor="Password" style={{fontSize :20,fontFamily:'cursive'}}>Password</label><br></br>
        <input type="password" name="password" id="password" onChange={Password1} style={{borderRadius:"7px",height:"30px",width:"250px"}}></input><br></br><br></br>
        <label htmlFor="MobileNumber" style={{fontSize :20,fontFamily:'cursive'}}>MobileNumber</label><br></br>
        <input type="text" name="MobileNumber" id="MobileNumber" onChange={Number1} style={{borderRadius:"7px",height:"30px",width:"250px"}}></input><br></br><br></br>
        <Button variant='contained' type='submit' onClick={handleevent}>Login</Button>
        </form>
        <div className='damn'>
        <a href='/' style={{textDecoration:'none',color:'white'}}>Go Back</a>
        </div>
    </div>
    </>

  )
}
