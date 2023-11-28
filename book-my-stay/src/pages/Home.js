import './Home.css';

import Footer_div from './Footer.js';
import React, {useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import background from "./background.jpg";
import { useNavigate } from "react-router-dom";




  function CardData() {
   
    const rtn = [{
        title: "Hotel Taj",
        rooms:"41",
        count:"2",
        desc: "Premium and Deluxe rooms Available",
        url: "https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg"
      }, {
        title: "Hotel INN",
        rooms:"1",
        count:"2",
        desc: "Premium and Deluxe rooms Available.",
        url: "https://cdn.pixabay.com/photo/2017/08/01/20/06/storm-2567670__340.jpg"
      }, {
        title: "Chennai Hotel",
        rooms:"4",
        count:"3",
        desc: "Premium and Deluxe rooms Available",
        url: "https://www.itl.cat/pngfile/big/217-2175980_best-hotels-wallpapers-bellagio-hotel-and-casino.jpg"
      },  ,{
        title: "Hotel Mahali",
        rooms:"19",
        count:"2",
        desc: "Standard, Premium and Deluxe rooms Available",
        url: "https://cdn.pixabay.com/photo/2017/08/01/20/06/storm-2567670__340.jpg"
      },{
        title: "Ravan's Hotel",
        rooms:"10",
        count:"4",
        desc: "Standard, Premium and Deluxe rooms Available",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww"
      },{
        title: "BREAKFAST",
        rooms:"1",
        count:"2",
        desc: "Standard, Premium and Deluxe rooms Available",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdYW0HntC6-Dv7iypF1wJRqmQ1tx0-sOgjqhsixhbcVR1CZyuieNSQGHqqHpDXMDs-z4&usqp=CAU"
      }]
    return rtn;
    
  }
  
 
  class Cards extends React.Component {
    
    render() {
      const cardData = CardData();
      
      return (
        <section>
        {
          cardData.map((card, i) => {
            return (
              <a  style={{cursor:"pointer",color:"black"}} href="main">
              <div className="card" id="card" style={this.props.cardStyle} key={i}>
                <p className="title">{card.title}</p>
                
               <img src={card.url} />
                <p className="desc">{card.desc}</p>
                <p className="desc">Available Rooms:&nbsp;{card.rooms}<br/>
                Maximum People per Room:&nbsp;{card.count}<br/>
                <h3 style={{color:"#caca6a"}}> Fast Booking</h3></p>
               
                <button style={{cursor:"pointer"}}class="button1" type="button" Value="">Book Now</button>
              </div>
              </a>
             
            )
          })
        }
        </section>
      )
    }
  }
  
  class Display extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        currentCard: 0,
        position: 0,
        cardStyle: {
          transform: 'translateX(0px)'
        },
        width: 0,
      };
    }
  
    componentDidMount() {
      let boxWidth = document.getElementById("card").clientWidth;
      this.setState({ width: boxWidth });
    }
    
    // func: click the slider buttons
    handleClick(type) {
      console.log("hi");
      // get the card's margin-right
      let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
      margin = JSON.parse(margin.replace(/px/i, '')); 
  
      const cardWidth = this.state.width; // the card's width
      const cardMargin = margin; // the card's margin
      const cardNumber = CardData().length; // the number of cards
      let currentCard = this.state.currentCard; // the index of the current card
      let position = this.state.position; // the position of the cards
  
      // slide cards
      if(type === 'next' && currentCard < cardNumber-1) {
        currentCard++;
        position -= (cardWidth+cardMargin);
      } else if(type === 'prev' && currentCard > 0) {
        currentCard--;
        position += (cardWidth+cardMargin);
      }
      this.setCard(currentCard, position);
    }
    
    setCard(currentCard, position) {
      this.setState({
        currentCard: currentCard,
        position: position,
        cardStyle: {
          transform: `translateX(${position}px)`
        }
      })
    }
  
    render() {
    
      return (
        <body >
      
        <div className="cards-slider column1">
          <div className="slider-btns">
            <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
            <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
          </div>
          <Cards cardStyle={this.state.cardStyle} />
        </div>
<Footer_div />
       
        </body>
      )
    }
  }
  
  export default Display;