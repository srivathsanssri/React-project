import './Dashboard.css';
import './LoginUi.css';
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import {useEffect, useState} from "react";
import image from "./images.jpg";

import Footer_div from './Footer.js';

const columns = [
  {
    name: "name",
    selecter:row=>row.id
  },
  {
    name: "name",
    selecter:row=>row.name
  },
  {
    name: "name",
    selecter:row=>row.email
  },
]
function Settings() {
  const [column, setColumn] = useState([])
  const [records, setRecords] = useState([])
   
    const navigate = useNavigate();
    const callfunction = (event) => {
      
       alert("Hotel Booked successfully");
       navigate('../');
    };
  return (
    <body>
        <div> 
       
        <div class="wrapper">
        <div class="section">
        <header>
 
</header>

        </div>
       

    </div>
       <div class="centered"> <div className="app new">
    <div className="login-form1"  style={{top: "8%"}}>
      
    <div className="form">
    <div>
   

<div class='main'>
    <div class='main__header'>
      <h2>Book Your Stay</h2>
    </div>
    <div class='main__content'>
      <div class='main__avatar'>
        <div class='main__avatar--overlay'>
          Hotel Taj
        </div>
      </div>
      <div class='main__settings-form'>
        <form action='#' method='post'/>
          <label class='main__input-label'>Your name:</label>
          <input class='main__input' placeholder='Admin' type='text' required/>
          <label class='main__input-label'>Your e-mail:</label>
          <input class='main__input' placeholder='johndoe@gmail.com' required type='text'/>
          <label class='main__input-label'>Date:</label>
          <input class='main__input' required style={{border: "1px solid rgba(0, 0, 0, 0.2)"}}placeholder='johndoe@gmail.com' type='date'/>
        
        <button onClick={callfunction}class='btn main__save-button' type="submit">Submit</button>
        <a href="./"class='btn main__cancel-button'>Back</a>
      </div>
    </div>
  </div>
      </div> 
    </div>
    </div>
    </div>

    
</div>
<footer class="footer" style={{marginTop:"75%"}}>
            <div class="container row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">visit website</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>online shop</h4>
                    <div class="social-links">
                        <a href="#"><img src= 
"https://i.pinimg.com/564x/7e/3b/29/7e3b29aa5e0961b95a0f9dfed14eb797.jpg" /> </a>
                        <a href="#"><img src= 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwkilxzZyfRt380glVe7EP7DmoBhMMYeU_2f9pane4GaBPzoP29sgn-rrXq6MN9PUxOg&usqp=CAU" /></a>
                        <a href="#"><img src= 
"https://i.pinimg.com/564x/7e/3b/29/7e3b29aa5e0961b95a0f9dfed14eb797.jpg" /></a>
                        <a href="#"><img src= 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwkilxzZyfRt380glVe7EP7DmoBhMMYeU_2f9pane4GaBPzoP29sgn-rrXq6MN9PUxOg&usqp=CAU" /></a>
                    </div>
                </div>
                
            </div>
        </footer>
        </div>
        </body>

    
  );
}

export default Settings;