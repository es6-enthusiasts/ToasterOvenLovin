import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

// Renders one recipe on a recipe card
const RecipeCard = ({ title, description, ingredients, instructions, image }) => (
  <Card className="card color2 pt-4 text-center h-100">
    <Card.Img className="cardImg" variant="top" src={image} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>

      <Card.Title>Ingredients</Card.Title>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <Card.Title>Instructions</Card.Title>
      <Card.Text>{instructions}</Card.Text>

      <Button variant="primary">View Recipe</Button>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // _id: PropTypes.string,
}.isRequired;

export default RecipeCard;
