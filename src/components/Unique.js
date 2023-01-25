import React from 'react';
import '../components/Unique.css';
import uniquebackground from '../assets/images/uniquebackground.svg';
import logo1 from '../assets/images/logo1.svg';
import logo2 from '../assets/images/logo2.svg';
import logo3 from '../assets/images/logo3.svg';
import logo4 from '../assets/images/logo4.svg';
import logo5 from '../assets/images/logo5.svg';

function Unique () {
  return (
    <div className="unique-component">
      <div className="image-box">
        <img src={uniquebackground} />
        <div className="black-shade" />
        <p className="unique-title">THE UNIQUE LOCATION</p>
        <p className="unique-caption">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </p>
        <button className="view-btn">VIEW MORE</button>
      </div>
      <div className="luxury-stay">
        <div className="luxury-title">The luxurious stay</div>
        <div className="luxury-caption">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </div>
      </div>
      <div className="unique-logos">
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
        <img src={logo4} />
        <img src={logo5} />
      </div>
    </div>
  );
}
export default Unique;
