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
        {' '}
        <br />
        <a href="https://es6-enthusiasts.github.io/CollegeCuisineConnection/">About College-Cuisine-Connection</a>
        <br />
        <a href="https://docs.google.com/document/d/1o7tGRP024l86Usm7qH7RX9-gTofHFc-ff8x5b5ZbVPA/edit">Team Contract</a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
