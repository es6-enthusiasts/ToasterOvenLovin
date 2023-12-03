import React from 'react';
import { Row, Col, Button, Modal, Image, ModalTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeModal = ({ recipe, visibility, onClose , canEdit}) => (
  <Modal size="lg" show={visibility}>
    <Modal.Header className="color2 text-center">
      <ModalTitle>{recipe.dishName}</ModalTitle>
    </Modal.Header>
    <Modal.Body className="color2">
      <Row>
        <Col  xs={4}>
      <Image className="cardImg" variant="top" src={recipe.image} alt={recipe.dishName} />
        </Col>
          <Col xs={4}><strong>Ingredients</strong>
            <ul style={{ listStyleType: 'circle' }}>
              {recipe.ingredients.split(', ').map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Col>
          <Col xs={4}>
            <strong>Equipment</strong>
            <ul style={{ listStyleType: 'circle' }}>
              {recipe.equipment.split(', ').map((equipment, index) => (
                  <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Col>
      </Row>
      <Row>
        <strong>Description:</strong>
        <p>{recipe.description}</p>
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
      <Row className={"text-center"}>
        {canEdit()}
        <br/>
        <br/>
        <div>
        <Button variant="secondary" size="sm" onClick={onClose}>
          Exit
        </Button>
        </div>
      </Row>
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
  canEdit: PropTypes.func,
};

export default RecipeModal;
