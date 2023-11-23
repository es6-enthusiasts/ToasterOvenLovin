import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AccountCard = ({ account }) => (
  <Card className="card color2 pt-4 text-center h-100">
    <Card.Img className="cardImg" variant="top" src={account.image} alt={account.dishName} />
    <Card.Body>
      <Card.Title>{account.dishName}</Card.Title>
      <Card.Text>{account.description}</Card.Text>

      <Card.Title>Ingredients</Card.Title>
      <ul>
        {account.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <Card.Title>Instructions</Card.Title>
      <Card.Text>{account.dishName}</Card.Text>

      <Link to={`/edit/${account._id}`}>
        <Button variant="primary">Edit</Button>
      </Link>
    </Card.Body>
  </Card>
);

AccountCard.propTypes = {
  account: PropTypes.shape({
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

export default AccountCard;
