import React from 'react';
import { Container, Row, Carousel, Col } from 'react-bootstrap';
import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';
import Blurb from '../components/Blurb';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-0">
    <Banner />
    <Carousel className="color2">
      <Carousel.Item>
        <Col className="slantRight color1" md={4}>
          <div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Col>
      </Carousel.Item>
    </Carousel>

    <Container className="content color2 my-2">
      <Row className="text-center">
        <h1> Featured Recipes </h1>
      </Row>
    </Container>
    <Row className="text-center color1">
      <Blurb title="Eat Fresh To stay Healthy" description="eating fresh is your civic duty." image="https://p7.hiclipart.com/preview/172/798/515/junk-food-health-food-healthy-diet-fruits-and-vegetables-thumbnail.jpg" />
      <Blurb title="Eat Fresh To stay Healthy" description="eating fresh is your civic duty." image="https://p7.hiclipart.com/preview/172/798/515/junk-food-health-food-healthy-diet-fruits-and-vegetables-thumbnail.jpg" />
      <Blurb title="Eat Fresh To stay Healthy" description="eating fresh is your civic duty." image="https://p7.hiclipart.com/preview/172/798/515/junk-food-health-food-healthy-diet-fruits-and-vegetables-thumbnail.jpg" />
    </Row>
    <RecipeGrid />
    <Row className="text-center accent1">
      Join our newsletter to find out about... stuff
    </Row>

  </Container>
);

export default Landing;
