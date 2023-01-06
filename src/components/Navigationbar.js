import React from 'react';
import './navbar.css';
import Vector1 from "../assets/images/Vector1.svg";
import Vector2 from "../assets/images/Vector2.svg";
import Vector4 from "../assets/images/Vector4.svg";
import Vector5 from "../assets/images/Vector5.svg";
import Vector6 from "../assets/images/Vector6.svg";
import Vector7 from "../assets/images/Vector7.svg";
import Vector8 from "../assets/images/Vector8.svg";
import Vector9 from "../assets/images/Vector9.svg";
import Vector11 from "../assets/images/Vector11.svg";
function Navigationbar() {
  return (
    <div className ='par'>
     <span >HOME </span>
     <span >ABOUT  </span>
     <span>PACKAGES </span>
     <div className='par1'>
     <img src={Vector1} alt=''></img>
    <img src={Vector2} alt=''></img>
    <img src={Vector4} alt=''></img>
    <img src={Vector5} alt=''></img>
    <img src={Vector6} alt=''></img>
    <img src={Vector7} alt=''></img>
    <img src={Vector8} alt=''></img>
    <img src={Vector9} alt=''></img>
    
    <img src={Vector11} alt=''></img>
    
     </div>
     <div className='par12'>
     <span>BLOGS </span>
     <span >CONTACT </span>
     <button className='Booknow'>BOOkNOW</button>
    
     </div>
     
     </div>
     
  )
}

export default Navigationbar;