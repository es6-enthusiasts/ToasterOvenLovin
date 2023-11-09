import React from 'react';
import { Row, Image, Col, Container, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const Banner = () => (
  <Row className="color2">
    <Container>
      <Row>
        <Col md={8} className="text-center align-middle justify-content-center">
          <div className="vertical-center justify-content-center">
            <Row>
              <h1>Welcome To College Cuisine Connection</h1>
              <h2>a project by students for students.</h2>
            </Row>
            <Row className="justify-content-center">
              <Col xs="6">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1"><Search /></InputGroup.Text>
                  <Form.Control placeholder="Search for recipes" />
                </InputGroup>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4} className="justify-content-center">
          <Image src="/images/bannerSoup.png" width="100%" />
        </Col>
      </Row>
    </Container>
  </Row>
);
export default Banner;
