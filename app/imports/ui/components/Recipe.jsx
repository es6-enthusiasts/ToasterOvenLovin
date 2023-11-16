import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => (
  <Card className="card color2 pt-4 text-center h-100">
    <Card.Img className="cardImg" variant="top" src={recipe.image} alt={recipe.dishName} />
    <Card.Body>
      <Card.Title>{recipe.dishName}</Card.Title>
      <Card.Text>{recipe.description}</Card.Text>

      <Card.Title>Ingredients</Card.Title>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <Card.Title>Instructions</Card.Title>
      <Card.Text>{recipe.dishName}</Card.Text>

      <Button variant="primary">View Recipe</Button>
    </Card.Body>
  </Card>
);
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    owner: PropTypes.string,
    dishName: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    equipment: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.string,
    dietaryRestriction: PropTypes.string,
    costPerServing: PropTypes.number,
    noServings: PropTypes.number,
    timeToMake: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};
export default RecipeCard;
