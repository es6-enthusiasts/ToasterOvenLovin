import React from 'react';
import { Row, Image, Col } from 'react-bootstrap';

const Banner = () => (
  <Row className="color2">
    <Col md={8} className="text-center align-middle">
      <div className="vertical-center"><h1>Welcome To Toaster Oven Lovin</h1>
        <h2>a site by students for students.</h2>
      </div>
    </Col>
    <Col md={4} className="justify-content-center">
      <Image src="/images/bannerSoup.png" />
    </Col>
  </Row>
);
export default Banner;
