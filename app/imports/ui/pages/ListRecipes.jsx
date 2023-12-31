import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Recipes } from '../../api/recipe/Recipes';
import Recipe from '../components/Recipe';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Recipe documents. Use <Recipe> to render each row. */
const ListRecipes = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, recipes } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Recipe documents.
    const subscription = Meteor.subscribe(Recipes.generalPublicationName);
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
    <Container id="recipes-page" className="py-3">
      <Row className="justify-content-center">
        <Col md={10}>
          <Col className="text-center  bg-white p-3 rounded">
            <h2>Recipes</h2>
          </Col>
          <br />
          <Row xs={1} md={2} lg={3} className="g-4">
            {recipes.map((recipe) => (<Col key={recipe._id}><Recipe recipe={recipe} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListRecipes;
