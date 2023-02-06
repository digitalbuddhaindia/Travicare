import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '././components/Header';
import Header2 from './components/Header2';
import Homepage from '././components/Homepage';
import Navigationbar from '../src/components/Navigationbar';
import Welcome from ".././src/components/Welcome";
import Unique from '.././src/components/Unique';
import StaySocial from "././components/StaySocial";
import Blog from "./components/blog"
import Cleanminimal from "././components/Cleanminimal";
import Footer from "././components/Footer";
import Package from "./components/Package";

export const MobileContext = React.createContext();

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => { },
});

function App() {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [cursorType, setCursorType] = useState("");
  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MouseContextProvider = (props) => {
    
  }

  return (
    <div className='main-body'>
      <MobileContext.Provider value={screenSize.width}>
        <Homepage></Homepage>
        <Welcome></Welcome>
        <Package></Package>
        <Unique></Unique>
        <MouseContext.Provider
          value={{
            cursorType: cursorType,
            cursorChangeHandler: cursorChangeHandler,
          }}
        >
          <Cleanminimal></Cleanminimal>
        </MouseContext.Provider>
        <Blog></Blog>
        <StaySocial></StaySocial>
        <Footer></Footer>
      </MobileContext.Provider>
    </div>
  );
}

export default App;
