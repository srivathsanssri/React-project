import './Home.css';
import './LoginUi.css';
import Footer_div from './Footer.js';
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import background from "./background.jpg";
import { getAllDatas } from './API.js';

function Login() {
    // React States
    const navigate = useNavigate();
    const[data,setdata]=useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  useEffect(()=>
  {
    const fetchdata=async()=>{
      const res=await getAllDatas();
      setdata(res.data);
    }
    fetchdata();
  },[])

  const handleSubmit = (event) => {
    
    //Prevent page reload
    event.preventDefault();
    const Uname=document.getElementById("uname").value;
    const Pass=document.getElementById("pass").value;
    const uind=data.findIndex((data)=>data.name===Uname);
    if(uind===-1)
    alert("Username doesn't Exist");
    else if(uind!==-1&&data[uind].pass===Pass)
    navigate('/');
  else
  alert("Invalid Password");
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" id='uname' name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" id='pass' name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
       
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <body>
    <div> 
    
           
         <div class="left">  <h1 style={{color:"black"}} class="heading">Welcome Admin! </h1> 
         <p style={{color:"black"}} class="heading">Kindly Login to continue with Book My Stay ! </p> 
         <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        
      </div>
    </div>

    
</div>
       
           
            <Footer_div />
        </div>
        </body>

    
  );
}

export default Login;