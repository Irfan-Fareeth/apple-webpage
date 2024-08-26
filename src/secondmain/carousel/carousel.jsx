import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SlideBlocks.css'; // Import the CSS file

const SlideBlocks = (props) => {
  return (
    <div className="carousel-container">
      <Carousel controls={false} indicators={false} interval={props.interval} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.source1}
            alt="First slide"
          />
     
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.source2}
            alt="Second slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.source3}
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideBlocks;
