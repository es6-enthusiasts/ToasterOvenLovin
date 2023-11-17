import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';
import Blurb from '../components/Blurb';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-0">
    <Banner />
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/carousel.png" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/carousel.png" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/carousel.png" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>;

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
