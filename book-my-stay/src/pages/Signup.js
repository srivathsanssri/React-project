import './Home.css';
import './LoginUi.css';
import Footer_div from './Footer.js';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addnewuser } from './API.js';

function Signup() {
    // React States
    const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data,setdata]=useState({name:"",email:"",mn:"",pass:"",address:""});

  // User Login info
  const database = [
    {
      username: "admin",
      password: "12345678"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    //Prevent page reload
    event.preventDefault();

      addnewuser(data);
        alert("Form submitted Successfully");
        navigate('/');
        
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
          <label>Name </label>
          <input type="text" onChange={(event)=>setdata({...data,name:event.target.value})} name="uname" required />
         
        </div>
        
        <div className="input-container">
          <label>E-mail ID </label>
          <input type="text" onChange={(event)=>setdata({...data,email:event.target.value})} name="email" required />
        </div>
        <div className="input-container">
          <label>Mobile No </label>
          <input type="number" onChange={(event)=>setdata({...data,mn:event.target.value})} name="number" required />
         
        </div>
        {/* <div className="input-container">
          <label>Primary Skill</label>
          <select type="number" name="number" required >
            <option>Machine Learning</option>
            <option>Python</option>
            <option>MATLAB</option>
            <option>C Programming</option>
          </select>
        </div> */}
         <div className="input-container">
          <label>Address </label>
          <input type="text" onChange={(event)=>setdata({...data,address:event.target.value})} name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" onChange={(event)=>setdata({...data,pass:event.target.value})} name="email" required />
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
       
           
         <div class="left_div">   <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div></div> : renderForm}
        
      </div>
    </div>

    
</div>
       
           
            <Footer_div />
        </div>
        </body>

    
  );
}

export default Signup;