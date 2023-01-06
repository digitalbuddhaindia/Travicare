import React from 'react'
import "./Staysocial.css"
import social1 from "../assets/images/social1.svg"
import social2 from "../assets/images/social2.svg"
import social3 from "../assets/images/social3.svg"
import social4 from "../assets/images/social4.svg"
import social5 from "../assets/images/social5.svg"
import social6 from "../assets/images/social6.svg"
import social7 from "../assets/images/social7.svg"



function StaySocial() {
  return (
    <div>
        <div className='stay-social'>
            <div className='stay-social-title'>Stay Social</div>
            <p>FOLLOW @NOURA-RETREATS</p>
        </div>
        <div class="scrolling-wrapper" id='style'>
          <img className="social-image" src={social5}></img>
          <img className="social-image" src={social6}></img>
          <img className="social-image" src={social7}></img>
          <img className="social-image" src={social4}></img>
          <img className="social-image" src={social1}></img>
          <img className="social-image" src={social2}></img>
          <img className="social-image" src={social3}></img>
        </div>

    </div>
  )
}

export default StaySocial