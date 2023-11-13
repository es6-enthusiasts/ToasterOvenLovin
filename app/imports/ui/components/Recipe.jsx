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
      <Card.Text>{recipe.instructions}</Card.Text>

      <Button variant="primary">View Recipe</Button>
    </Card.Body>
  </Card>
);
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    recipeID: PropTypes.number.isRequired,
    ownerId: PropTypes.string.isRequired,
    dishName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    equipment: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    dietaryRestriction: PropTypes.string,
    costPerServing: PropTypes.number.isRequired,
    noServings: PropTypes.number.isRequired,
    timeToMake: PropTypes.number.isRequired,
  }).isRequired,
};
export default RecipeCard;
