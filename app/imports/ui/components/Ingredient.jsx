import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Ingredient = ({ ingredient }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={ingredient.image} width={75} />
      <Card.Title>{ingredient.name}</Card.Title>
    </Card.Header>
  </Card>
);

// Require a document to be passed to this component.
Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    // owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Ingredient;
