import React from 'react';
import pictureBg from '../assets/pictureBg.mp4';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../assets/css/book.css';
import Cardbgvid from './Cardbgvid'
const BgVideo =()=>
{
  const navigation=useNavigate();
    const handleevent=()=>
    {
        navigation('/Login');
    }
    const handleevent1=()=>
    {
        navigation('/Contact');
    }
    
  return (
    <div className="Bgcontainer">
        
              
                
        <div className="overlay">
            <video src={pictureBg} autoPlay loop muted/>
            <div className="container" style={{display:'flex'}}>
                 <h3 className="wlc">Welcome to</h3>
                 <h1 className="title">Healthy Stay</h1>
                <div className='simple'>
                  <div className='todo' >
                    <div className='first'>
        <Cardbgvid name='https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg'/>\
                    </div>
                    <div className='second'>

        <Cardbgvid name='https://muffingroup.com/blog/wp-content/uploads/2020/10/hotel.jpg'/>
                    </div>
                  </div>
                  <div className='todo'>
                    <div className='third'>

        <Cardbgvid   name='https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/61608791963258.jpg'/>
                    </div>
                    <div className='second'>

        <Cardbgvid name='https://2.bp.blogspot.com/-E1x8KgYHhn4/WD9qKBmssKI/AAAAAAAAAPc/HlwTstXIO0YpWwM6kNWwLWQB8CBJQ_QCwCEw/s1600/waldorf.jpg'/>
                    </div>
                  </div>
                 </div>
            </div>
        
                <div className='next' style={{color:'white'}}>
                  <div className='home'style={{bottom:750,right:150}}>
                  <Button variant='text' style={{color:'white'}} onClick={handleevent}>Login</Button>
                  
                  </div>
                  <div style={{bottom:750,position:"absolute"}}>
                  <Button variant='text' style={{color:'white'}} onClick={handleevent1}>Contact us</Button>
                  </div>
                  <br></br>
                  <br></br>
                  <a href='/' style={{textDecoration:'none',color:'white',}}>Go Back</a>
                </div>
        </div>
        <div>
       </div>
    </div>
  );
}
export default BgVideo;
