import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 color5">
    <Container>
      <Col className="text-center">
        &copy; ES6-Enthusiasts
        {' '}
        <br />
        Honolulu Hawaii
      </Col>
    </Container>
  </footer>
);

export default Footer;
