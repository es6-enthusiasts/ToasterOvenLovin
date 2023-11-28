import React from 'react';
import { Row, Image, Col, Container, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const Banner = () => (
  <Container className="content pb-3">
    <Row>
      <Col md={8} className="align-middle justify-content-center">
        <div className="vertical-center justify-content-center">
          <Row>
            <h1 className="text-uppercase">Discover<br /> New<br /> Tastes</h1>
            <h4>Find simple recipes made for students, by students.</h4>
          </Row>
          <Row className="justify-content-center">
            <Col xs="6">
              <InputGroup>
                <InputGroup.Text id="basic-addon1"><Search /></InputGroup.Text>
                <Form.Control placeholder="Search for recipes" className="search" />
              </InputGroup>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={4} className="justify-content-center" />
    </Row>
  </Container>
);
export default Banner;
