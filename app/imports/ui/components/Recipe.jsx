import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeModal from './RecipeModal';

const RecipeCard = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Card className="card recipe color2 pt-4 text-center h-100">
      <Card.Img className="cardImg" variant="top" src={recipe.image} alt={recipe.dishName} />
      <Card.Body>
        <Card.Title>{recipe.dishName}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
        <Card.Title>Ingredients</Card.Title>
        <ul>
          {recipe.ingredients.split(', ').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Link to={`/edit/${recipe._id}`}>
          <Button variant="primary">Edit</Button>
        </Link>
        <br/><br/>
        <Button variant="primary" onClick={handleShow}>View Recipe</Button>
        <RecipeModal recipe={recipe} visibility={show} onClose={handleClose}/>
      </Card.Body>
    </Card>
  );
};

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
