import React from 'react';
import { Col, Carousel } from 'react-bootstrap';

const InfoCarousel = () => (
  <Carousel className="color2">
    <Carousel.Item className=" slide1 fullBg">
      <Col className="slantRight accent1" md={4}>
        <div>
          <Carousel.Caption className="unslant">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Col>
    </Carousel.Item>
    <Carousel.Item className=" slide2 fullBg">
      <Col className="slantRight accent2" md={4}>
        <div>
          <Carousel.Caption className="unslant">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Col>
    </Carousel.Item>
    <Carousel.Item className=" slide3 fullBg">
      <Col className="slantRight accent3" md={4}>
        <div>
          <Carousel.Caption className="unslant">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Col>
    </Carousel.Item>
  </Carousel>
);
export default InfoCarousel;
