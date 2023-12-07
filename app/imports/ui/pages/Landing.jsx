import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import Banner from '../components/Banner';
import RandomRecipes from '../components/RandomRecipes';
import InfoCarousel from '../components/InfoCarousel';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-0">
    <InfoCarousel className="pb-5" />
    {/* <Banner /> */}
    <Container className="content color1 my-2">
      <Row className="text-center">
        <h2> Featured Recipes </h2>
      </Row>
    </Container>
    <RandomRecipes />
    <Container className="content color1 my-2 p-2">
      <Row className="text-center">
        <h2>
          <a href="https://es6-enthusiasts.github.io/CollegeCuisineConnect/tutorial">Learn to Get Started!</a>
        </h2>
      </Row>
    </Container>
  </Container>
);

export default Landing;
