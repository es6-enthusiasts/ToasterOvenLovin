import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-0">
    <Banner />
    <RecipeGrid />
  </Container>
);

export default Landing;
