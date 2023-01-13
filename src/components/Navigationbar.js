import React from 'react';
import './navbar.css';
import newlet from '../assets/images/newlet.svg'
function Navigationbar() {
  return (
    <div className ='par'>
     <span >HOME </span>
     <span >ABOUT  </span>
     <span>PACKAGES </span>
     <div className='par1'>
     <img src={newlet} alt='' className="bod1"></img>
   
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