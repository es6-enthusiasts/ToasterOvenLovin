import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Banner = () => (
  <Container className="content pb-3">
    <Row>
      <Col md={8} className="align-middle justify-content-center">
        <div className="vertical-center justify-content-center">
          <Row>
            <h1 className="text-uppercase">Discover<br /> New<br /> Tastes</h1>
            <h4>Find simple recipes made for students, by students.</h4>
          </Row>
        </div>
      </Col>
      <Col md={4} className="justify-content-center" />
    </Row>
  </Container>
);
export default Banner;
