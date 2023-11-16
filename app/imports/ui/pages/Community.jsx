import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';

/* A simple static component to render some text for the landing page. */
const Community = () => (
  <Container id="landing-page" fluid className="py-0">
    <Banner />
    <Container className="content color1 my-2">
      <Row className="text-center">
        <h1> Featured Recipes </h1>
      </Row>
    </Container>
    <RecipeGrid />
  </Container>
);

export default Community;
