import React,{useState} from 'react';
import '../components/Cleanminimal.css';
import cardimage from '../assets/images/cleanimg1.svg';
import drag from '../assets/images/drag.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// corousel

function Cleanminimal() {
  const [cursor, setCursor] = useState('grab');
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
 
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="img-drag">
       
      </div>
    );
  };

  return (
    <div style={{ cursor }}
    onMouseDown={() => setCursor('grabbing')}
    onMouseUp={() => setCursor('grab')} className='carousal-container'>
     
      <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <div className="clean-minimal-card">
          <div className="clean-minimal">CLEAN AND MINIMAL</div>
          <p className="clean-minimal-card-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <div className="clean-minimal-card">
          <img src={cardimage} className="img-responsive" />
        </div>
        <div className="clean-minimal-card">
          <div className="clean-minimal">CLEAN AND MINIMAL</div>
          <p className="clean-minimal-card-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <div className='clean-minimal-card'>
          <img src={cardimage} className="img-responsive" />
        </div>
        <div className='clean-minimal-card'>
          <div className='clean-minimal'>CLEAN AND MINIMAL</div>
          <p className='clean-minimal-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
        <div className='clean-minimal-card'>
          <img src={cardimage} className="img-responsive" />
        </div>
        <div className='clean-minimal-card'>
          <div className='clean-minimal'>CLEAN AND MINIMAL</div>
          <p className='clean-minimal-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
        <div className='clean-minimal-card'>
          <img src={cardimage} className="img-responsive" />
        </div>
        <div className='clean-minimal-card'>
          <div className='clean-minimal'>CLEAN AND MINIMAL</div>
          <p className='clean-minimal-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
      </ Carousel>
    </div>
  );
}

export default Cleanminimal;
