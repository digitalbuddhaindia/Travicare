import React from 'react';
import './Package.css';
// import Rectangle11 from '../assets/images/Rectangle 11.svg';
import Rectangle14 from '../assets/images/Rectangle 14.svg';
import Rectangle17 from '../assets/images/Rectangle 17.svg';
function Package () {
  return (
    <div className="pac">
      <div className="pac1">
        {/* <img src={Rectangle11} /> */}
       
        <button className="Boo2">10 FEB 2023 - 20 MAR 2023</button>
       
        <div className="p1">
        <span>Package Name-1</span>
        </div>
        <div className="p2">
        <span>LOCATION NAME</span>
        </div>
        <div className="p4">
        <span  className="rs">$ 1000.00</span>
        <span className="rs2">/ Person</span>
        </div>
       
        <div className="p6">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </span>
        </div>
        <button className='Boo'>BOOkNOW</button>
      </div>
      <div className="pac2">
        {/* <img src={Rectangle14} /> */}
        <button className="Boo3">20 MAR 2023 - 20 APR 2023</button>
        <div className="b2">
        <span>Package Name-2</span>
        </div>
        <div className="b4">
        <span>LOCATION NAME</span>
        </div>
        <div className="b5">
        <span className="m5">$ 1000.00</span>
        <span className="m6">/ Person</span>
        </div>
       
      </div>
      <div className="pac3">
        {/* <img src={Rectangle17} /> */}
        <button className="Boo4">20 MAR 2023 - 20 APR 2023</button>
        <div className="c2">
        <span>Package Name-3</span>
        </div>
        <div className="c3">
        <span>LOCATION NAME</span>
        </div>
        <div className="c4">
        <span className="l5">$ 1000.00 </span>
        <span className="l6">/ Person</span>
        </div>
       
       
      </div>

    </div>
  );
}

export default Package;
