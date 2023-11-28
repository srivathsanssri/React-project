import './About.css';
import './LoginUi.css';
import Footer_div from './Footer.js';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import avatar from "./avatar.png";
import background from "./background.jpg";
function About() {
   
  return (
    <body class="">
    <div> 

    <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
  <p><h2>Watch our demo from here please find the youtube link: <a style={{color:"#dd8585"}}href="https://www.youtube.com/watch?v=MV8AT9a2oSM&list=PLWxTHN2c_6cbh1C7yIskoXszoTl-okogt">https://www.youtube.com/watch</a></h2></p>
</div>

<div class="about_sec">
<h2 class="header">Our Reviews</h2>
<div class="row2">
  <div class="column">
    <div class="card_card">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">Chennai</p>
        <p>This is the best site for hotel booking.</p>
        <p>jane@example.com</p>
        <p>Rating: 4/5</p>
      </div>
    </div>
  </div>
  

  <div class="column">
    <div class="card_card">
     
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Coimbatore</p>
        <p>This is the best site for hotel booking.</p>
        <p>mike@example.com</p>
        <p>Rating: 4.3/5</p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card_card">
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Erode</p>
        <p>This is the best site for hotel booking.</p>
        <p>john@example.com</p>
        <p>Rating: 4/5</p>
      </div>
    </div>
  </div>
  
  </div>
<div class="row2" style={{marginTop:"12%"}}>
  <div class="column">
    <div class="card_card">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">Chennai</p>
        <p>This is the best site for hotel booking.</p>
        <p>jane@example.com</p>
        <p>Rating: 4/5</p>
      </div>
    </div>
  </div>
  

  <div class="column">
    <div class="card_card">
     
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Coimbatore</p>
        <p>This is the best site for hotel booking.</p>
        <p>mike@example.com</p>
        <p>Rating: 4.3/5</p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card_card">
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Erode</p>
        <p>This is the best site for hotel booking.</p>
        <p>john@example.com</p>
        <p>Rating: 4/5</p>
      </div>
    </div>
  </div>
  
  </div>
  
  
</div>


            <Footer_div />
        </div>
        </body>

    
  );
}

export default About;