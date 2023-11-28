import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner';
import RandomRecipes from '../components/RandomRecipes';
import InfoCarousel from '../components/InfoCarousel';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-0">
    <InfoCarousel />
    <Banner />
    <Container className="content color1 my-2">
      <Row className="text-center">
        <h2> Featured Recipes </h2>
      </Row>
    </Container>
    <RandomRecipes />
  </Container>
);

export default Landing;
