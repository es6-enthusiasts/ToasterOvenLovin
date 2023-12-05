import React from 'react';
import { Col, Carousel } from 'react-bootstrap';

const InfoCarousel = () => (
  <Carousel className="color2">
    <Carousel.Item className=" slide1 fullBg">
      <Col className="slantRight accent1" md={4}>
        <div>
          <Carousel.Caption className="unslant text">
            <h3>Student-Friendly Feasts</h3>
            <p>Effortless recipes, maximum flavor satisfaction.</p>
          </Carousel.Caption>
        </div>
      </Col>
    </Carousel.Item>
    <Carousel.Item className=" slide2 fullBg">
      <Col className="slantRight accent2" md={4}>
        <div>
          <Carousel.Caption className="unslant text">
            <h3>Quick and Tasty</h3>
            <p>Easy recipes for busy days and hungry nights.</p>
          </Carousel.Caption>
        </div>
      </Col>
    </Carousel.Item>
    <Carousel.Item className=" slide3 fullBg">
      <Col className="slantRight accent3" md={4}>
        <div>
          <Carousel.Caption className="unslant text">
            <h3>Meals Made Easy</h3>
            <p>Turn simple ingredients into culinary delights.</p>
          </Carousel.Caption>
        </div>
      </Col>
    </Carousel.Item>
  </Carousel>
);
export default InfoCarousel;
