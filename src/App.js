import logo from './logo.svg';
import './App.css';
import Header from '././components/Header';
import Header2 from './components/Header2';
import Homepage from '././components/Homepage';
import Navigationbar from '../src/components/Navigationbar';
import Welcome from ".././src/components/Welcome";
import Unique from '.././src/components/Unique';
import StaySocial from  "././components/StaySocial";
import Blog from "./components/blog"
import Cleanminimal from "././components/Cleanminimal";
import Footer from "././components/Footer";
import Package from "./components/Package";
import Back from "././components/Back"
function App() {
  return (
     <div >
       {/* <Header></Header>
     <Header2></Header2> */}
     {/* <Back></Back>  */}
      <Homepage></Homepage>

      <Navigationbar></Navigationbar>
      
      <Welcome></Welcome> 
     <Package></Package>
      <Unique></Unique>
     <Cleanminimal></Cleanminimal>
      <Blog></Blog>
     <StaySocial></StaySocial>
      <Footer></Footer>  
  
     
    </div>
  );
}

export default App;