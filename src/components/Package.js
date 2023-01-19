import React from 'react';
import './Package.css';
import Rectangle14 from '../assets/images/Rectangle 14.svg';
import Rectangle17 from '../assets/images/Rectangle 17.svg';
import Arrow2 from '../assets/images/Arrow 2.svg';
import Line5 from '../assets/images/Line5.svg';
import Arrow1 from '../assets/images/Arrow 1.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Package() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="arrow-slide-container">
        <div className="carousel-button-group">
          <img src={Arrow1} className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
          <img src={Line5}/>
          <img src={Arrow2} onClick={() => next()} />
        </div>
        <div className="slide-text">
          <div className="count">001</div>
          <img className="line" src={Line5}/>
          <div className="count">003</div>
        </div>
      </div>
    );
  };

  return (
    <div className='parent'>
      <Carousel responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <div className="package1">
          <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
          <div className="package-text">
            <div className="package-t1">
              Package Name-1
            </div>
            <div className="package-l1">
              LOCATION NAME
            </div>
            <div className="package-r1">
              $ 1000.00 /Person
            </div>
            <div className="package-des">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </span>
            </div>
            <div className="package-btn">BOOK NOW</div>
          </div>
        </div>
        <div className="package2">
          <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
          <div className="package-text">
            <div className="package-t1">
              Package Name-2
            </div>
            <div className="package-l1">
              LOCATION NAME
            </div>
            <div className="package-r1">
              $ 1000.00 /Person
            </div>
            <div className="package-des">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </span>
            </div>
            <div className="package-btn">BOOK NOW</div>
          </div>
        </div>
        <div className="package3">
          <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
          <div className="package-text">
            <div className="package-t1">
              Package Name-3
            </div>
            <div className="package-l1">
              LOCATION NAME
            </div>
            <div className="package-r1">
              $ 1000.00 /Person
            </div>
            <div className="package-des">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </span>
            </div>
            <div className="package-btn">BOOK NOW</div>
          </div>
        </div>
        <div className="package1">
          <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
          <div className="package-text">
            <div className="package-t1">
              Package Name-1
            </div>
            <div className="package-l1">
              LOCATION NAME
            </div>
            <div className="package-r1">
              $ 1000.00 /Person
            </div>
            <div className="package-des">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </span>
            </div>
            <div className="package-btn">BOOK NOW</div>
          </div>
        </div>
        <div className="package2">
          <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
          <div className="package-text">
            <div className="package-t1">
              Package Name-2
            </div>
            <div className="package-l1">
              LOCATION NAME
            </div>
            <div className="package-r1">
              $ 1000.00 /Person
            </div>
            <div className="package-des">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </span>
            </div>
            <div className="package-btn">BOOK NOW</div>
          </div>
        </div>
        <div className="package3">
          <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
          <div className="package-text">
            <div className="package-t1">
              Package Name-3
            </div>
            <div className="package-l1">
              LOCATION NAME
            </div>
            <div className="package-r1">
              $ 1000.00 /Person
            </div>
            <div className="package-des">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </span>
            </div>
            <div className="package-btn">BOOK NOW</div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default Package;