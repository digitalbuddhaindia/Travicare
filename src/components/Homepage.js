import React from 'react';
import './Homepage.css';
import Rectangle5 from '../assets/images/Rectangle 5.svg';
import letter from '../assets/images/letter.svg';
import Line4 from '../assets/images/Line 4.svg';
import imag from '../assets/images/imag.svg';
import Rectangle2 from '../assets/images/Rectangle 2.svg'
import font from '../assets/images/font.svg'
function Homepage () {
  return (
    <div>
      <img className="homeimag"src={Rectangle2} alt="" />
      <div  className="homenavbar">
        
      <div className="bar">
        <li><a href ="/">HOME</a></li>
        <li><a href="/">ABOUT</a> </li>
        <li><a href="/">PACKAGES </a> </li>
      </div>
      <div className="bar1">
        <img src={letter} alt="" className="ima1"/>
      </div>
      <div className="bar2">
        <li><a href ="/" >BLOG</a></li>
        <li><a href ="/" >CONTACT </a></li>
        <li className="bok" >BOOkNOW</li>

      </div>

    

       <div className="text">
       <img src={font} alt=""  className="te"/>
        </div>
        <div className="text1">
          <span>iF YOU ARE LOOKING FOR A SUPERB RETREAT CENTRE IN</span><br />
          <span>GREECE, THEN YOU ARE IN THE RIGHT PLACE!</span>
        </div>
        <div className="tex">

          <span><img src={imag} alt="" /></span>

        </div> 
</div>
    </div>
  );
}
export default Homepage;
