import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';
import Accounts from '../server/Accounts.js';

/* A simple static component to render some text for the landing page. */
const Community = () => (
  <Container id="landing-page" fluid className="py-0">
    <Banner />
    <Container className="content color1 my-2">
      <Row xs={1} md={2} lg={3} className="g-4">
        {Accounts.map((username) => (<Col key={username}><Accounts username={username} /></Col>))}
      </Row>
    </Container>
    <RecipeGrid />
  </Container>
);

export default Community;
