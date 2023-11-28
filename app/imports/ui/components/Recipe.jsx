import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => (
  <Card className="card color2 pt-4 text-center h-100">
    <Card.Img className="cardImg" variant="top" src={recipe.image} alt={recipe.dishName} />
    <Card.Body>
      <Card.Title>{recipe.dishName}</Card.Title>
      <Card.Text>{recipe.description}</Card.Text>

      <Card.Title>Ingredients</Card.Title>
      <ul style={{ listStyleType: 'circle' }}>
        {recipe.ingredients.split(', ').map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <Card.Title>Equipment</Card.Title>
      <ul style={{ listStyleType: 'circle' }}>
        {recipe.equipment.split(', ').map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>

      <Card.Title>Instructions</Card.Title>
      <Card.Text>{recipe.instructions}</Card.Text>

      <Card.Title>Dietary Restriction</Card.Title>
      <Card.Text>{recipe.dietaryRestriction}</Card.Text>

      <Card.Title>Cost Per Serving</Card.Title>
      <Card.Text>{recipe.costPerServing}</Card.Text>

      <Card.Title>Number of Servings</Card.Title>
      <Card.Text>{recipe.noServings}</Card.Text>

      <Card.Title>Time to Make</Card.Title>
      <Card.Text>{recipe.timeToMake}</Card.Text>

      <Link to={`/edit/${recipe._id}`}>
        <Button variant="primary">Edit</Button>
      </Link>
    </Card.Body>
  </Card>
);

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    owner: PropTypes.string,
    dishName: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    ingredients: PropTypes.string,
    equipment: PropTypes.string,
    instructions: PropTypes.string,
    dietaryRestriction: PropTypes.string,
    costPerServing: PropTypes.number,
    noServings: PropTypes.number,
    timeToMake: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;
