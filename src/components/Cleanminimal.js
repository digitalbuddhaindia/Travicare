import React from 'react'
import "../components/Cleanminimal.css"
import cardimage from "../assets/images/cleanimg1.svg"

function Cleanminimal() {
  return (
    <div>
        <div className='scroll-clean-minimal'>
            <div className='clean-minimal-card'>
                <div className='clean-minimal'>CLEAN AND MINIMAL</div>
                <p className='clean-minimal-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className='clean-minimal-card'>
                <img src={cardimage}  className="img-responsive"></img>
            </div>
            <div className='clean-minimal-card'>
                <div className='clean-minimal'>CLEAN AND MINIMAL</div>
                <p className='clean-minimal-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
        </div>
    </div>
  )
}

export default Cleanminimal