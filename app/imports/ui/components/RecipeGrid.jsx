import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import RecipeCard from './Recipe';
import { Recipes } from '../../api/stuff/Recipes';
import LoadingSpinner from './LoadingSpinner';

const RecipeGrid = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, recipes } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Recipes.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const RecipeItems = Recipes.collection.find({}).fetch();
    return {
      recipes: RecipeItems,
      ready: rdy,
    };
  }, []);
  console.log(ready);
  console.log(recipes);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        {recipes.map((recipe) => (
          <Col key={recipe.recipeID} md={3} xs={12}>
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default RecipeGrid;
