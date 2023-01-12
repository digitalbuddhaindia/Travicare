import React from 'react';
import './Homepage.css';
import Rectangle5 from '../assets/images/Rectangle 5.svg';
import logo1 from '../assets/images/letter.svg';
import Line4 from '../assets/images/Line 4.svg';
import imag from '../assets/images/imag.svg';
import Rectangle2 from '../assets/images/Rectangle 2.svg'
import font from '../assets/images/font.svg'

function Homepage() {
  return (
    <div>
      <img className="home-backgroundimage" src={Rectangle2} alt="" />
      <div className="homenavbar1">
        <div className="navleft">
          <div className='tab'>HOME</div>
          <div className='tab'>ABOUT</div>
          <div className='tab'>PACKAGES </div>
        </div>
        <div className="navcenter">
          <img src={logo1} alt="" className="travlogo1" />
        </div>
        <div className="navright">
          <div className='tab'>BLOG</div>
          <div className='tab'>CONTACT</div>
          <div className="tab booknow" >BOOK&nbsp;NOW</div>
        </div>
      </div>
      <div className="text-box">
        <div className="text1" ><img src={font} alt="" /></div>
        <div className="text2">
          <span>iF YOU ARE LOOKING FOR A SUPERB RETREAT CENTRE IN</span><br></br>
          <span>GREECE, THEN YOU ARE IN THE RIGHT PLACE!</span>
        </div>
        <div className="scroll">
        <a href="#Welcome"><img src={imag} alt=""/></a>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
