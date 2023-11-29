import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Recipes } from '../../api/recipe/Recipes';
import Recipe from '../components/Recipe';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Recipe documents. Use <Recipe> to render each row. */
const Cookbook = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, recipes } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Recipe documents.
    const subscription = Meteor.subscribe(Recipes.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Recipe documents
    const recipeItems = Recipes.collection.find({}).fetch();
    return {
      recipes: recipeItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container id="cookbook-page" className="py-3">
      <Row>
        <Col className="text-center  bg-white p-3 rounded">
          <h2>My Cookbook</h2>
          <Link to="/addRecipe">
            <Button id="add-recipe" variant="primary">Add New Recipe</Button>
          </Link>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Col md={10}>
          <Row xs={1} md={2} lg={3} className="g-4">
            {recipes.map((recipe) => (<Col key={recipe._id} xs={12} md={4}><Recipe recipe={recipe} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Cookbook;
