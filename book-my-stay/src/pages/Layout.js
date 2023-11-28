import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div> 
       
       <nav class="navbar background"> 
           <ul class="nav-list"> 
               <div class="logo"> 
               <img src= 
"https://previews.123rf.com/images/deimosz/deimosz1502/deimosz150200863/36532168-black-circle-vintage-style-hotel-or-apartment-booking-sign-icon-sticker-or-label-isolated-on-white-b.jpg" /> 
<h1>&nbsp;Book My Stay</h1>
               </div> 
               
               <li><h2> </h2></li>
               <li><h2><Link to="/">Home</Link></h2></li> 
               <li><h2> <Link to="/Login">Login</Link></h2></li>
               <li><h2> <Link to="/Signup">Sign up</Link></h2></li>
               <li><h2><Link to="/About">About us</Link></h2></li>
               
           </ul> 

         
       </nav> 
       </div>
      

      <Outlet />
    </>
  )
};

export default Layout;