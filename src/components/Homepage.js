import React from 'react';
import './Homepage.css';
import Rectangle5 from "../assets/images/Rectangle 5.svg"
import Vector from "../assets/images/Vector.svg";
import Vec1 from "../assets/images/Vec1.svg";
import Vec2 from "../assets/images/Vec2.svg";
import Vec3 from "../assets/images/Vec3.svg";
import Vec4 from "../assets/images/Vec4.svg";
import Vec5 from "../assets/images/Vec5.svg";
import Vec6 from "../assets/images/Vec6.svg";
import Vec7 from "../assets/images/Vec7.svg";
import Vec8 from "../assets/images/Vec8.svg";
import Line4 from "../assets/images/Line 4.svg"


function Homepage() {
    return (
    <div className ='home1'>
    <span >HOME   </span>
    <span >ABOUT  </span>
    <span>PACKAGES  </span>
  
    <div className='tr1'>
    <img src={Vector} alt=''></img>
    <img src={Vec1} alt=''></img>
    <img src={Vec2} alt=''></img>
    <img src={Vec3} alt=''></img>
    <img src={Vec4} alt=''></img>
    <img src={Vec5} alt=''></img>
    <img src={Vec6} alt=''></img>
    <img src={Vec7} alt=''></img>
    
    <img src={Vec8} alt=''></img>
    
    
    </div>
    <div className='tr12'>
    <span>BLOG</span>
    <span >CONTACT  </span>
    <button className='Booknowbtn12'>BOOkNOW</button>
   
     </div>
     <div className='text'>
        <p>A Unique greek hideaway</p>
        </div>
     <div  className='text1'>
     <span>iF YOU ARE LOOKING FOR A SUPERB RETREAT CENTRE IN</span><br/>
        <span>GREECE, THEN YOU ARE IN THE RIGHT PLACE!</span>
     </div>
     <div  className='text2'>
    
     <span className='t8'><img src={Rectangle5} alt=''></img></span>
     <span>Scroll down</span>
      <span className='t7'><img src={Line4} alt=''></img></span>
   
     
     
     </div>
     
     <div className='disc'>
     <span>TO DISCOVER MORE</span>
    
     </div>
   
    </div>
    
 )
}
export default Homepage;