import React, { useEffect, useState } from 'react';
import './Homepage.css';
import Rectangle5 from '../assets/images/Rectangle 5.svg';
import logo1 from '../assets/images/letter.svg';
import Line4 from '../assets/images/Line 4.svg';
import imag from '../assets/images/imag.svg';
import Rectangle2 from '../assets/images/Rectangle 2.svg'
import font from '../assets/images/font.svg'
import Navigationbar from './Navigationbar';
import './navbar.css';
import logo2 from '../assets/images/newlet.svg'

function Homepage() {
  const [navClass, setNavClass] = useState('homenavbar1');
  const [navHeader, setnavHeader] = useState(logo1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset != 0) {
        setNavClass('stick-homenavbar1');
        setnavHeader(logo2);
      } else {
        setNavClass('homenavbar1');
        setnavHeader(logo1);
      };
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollWidth,
    behavior: 'smooth',
  });
};
  return (
    <div>
      <img className="home-backgroundimage" src={Rectangle2} alt="" />
      <div>
        <div className={navClass}>
          <div className="navleft">
            <div className='tab'>HOME</div>
            <div className='tab'>ABOUT</div>
            <div className='tab'>PACKAGES </div>
          </div>
          <div className="navcenter">
            <img src={navHeader} alt="" className="travlogo1"className='img-res' />
          </div>
          <div className="navright">
            <div className='tab'>BLOG</div>
            <div className='tab'>CONTACT</div>
            <div className="tab booknow" >BOOK&nbsp;NOW</div>
          </div>
        </div>
      </div>
      <div className="text-box">
        <div className="text1" ><img src={font} alt=""className='imglogo' /></div>
        <div className="text2">
          <span>iF YOU ARE LOOKING FOR A SUPERB RETREAT CENTRE IN</span><br></br>
          <span>GREECE, THEN YOU ARE IN THE RIGHT PLACE!</span>
        </div>
        <div className="scroll">
          {/* <a href="#Welcome"><img src={imag} alt="" className='imgscroll'/></a> */}
          <img onClick={scrollToBottom} src={imag} alt=""  className='imgscroll'/>
        </div>
      </div>
    </div>
  );
}
export default Homepage;