import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Blurb = ({ title, description, image }) => (
  <Col md="4" xs="12">
    <Card className="card color2 pt-4 text-center h-100">
      <Card.Header>
        <Card.Img className="blurbImg" variant="top" src={image} alt={title} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">View Recipe</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default Blurb;
