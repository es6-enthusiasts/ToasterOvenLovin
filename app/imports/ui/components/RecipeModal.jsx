import React from 'react';
import { Row, Col, Button, Modal, Image, ModalTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeModal = ({ recipe, visibility, onClose }) => (
  <Modal size="xl" show={visibility}>
    <Modal.Header className="color2">
      <ModalTitle className="text-center">{recipe.dishName}</ModalTitle>
    </Modal.Header>
    <Modal.Body className="color2">
      <Image className="cardImg" variant="top" src={recipe.image} alt={recipe.dishName} />
      <Row>
        <p>{recipe.description}</p>
      </Row>
      <Row>
        <Col xs={6}><strong>Ingredients</strong>
          <ul style={{ listStyleType: 'circle' }}>
            {recipe.ingredients.split(', ').map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Col>
        <Col xs={6}>
          <strong>Equipment</strong>
          <ul style={{ listStyleType: 'circle' }}>
            {recipe.equipment.split(', ').map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        <strong>Instructions</strong>
        <p>{recipe.instructions}</p>
      </Row>
      <Row>
        <Col xs={4}>
          <strong>Cost Per Serving</strong>
          <p>{recipe.costPerServing}</p>
        </Col>
        <Col xs={4}><strong>Number of Servings</strong>
          <p>{recipe.noServings}</p>
        </Col>
        <Col xs={4}>
          <strong>Time to Make</strong>
          <p>{recipe.timeToMake}</p>
        </Col>
      </Row>
      <Row>
        <strong>Dietary Restriction</strong>
        <p>{recipe.dietaryRestriction}</p>
      </Row>

      <Link to={`/edit/${recipe._id}`}>
        <Button variant="primary">Edit</Button>
      </Link>
      <br />
      <Button variant="secondary" onClick={onClose}>
        Exit
      </Button>
    </Modal.Body>
  </Modal>

);
RecipeModal.propTypes = {
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
  visibility: PropTypes.bool,
  onClose: PropTypes.func,
};

export default RecipeModal;
