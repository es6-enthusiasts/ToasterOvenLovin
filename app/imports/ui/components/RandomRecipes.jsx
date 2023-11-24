import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { Recipes } from '../../api/recipe/Recipes';
import LoadingSpinner from './LoadingSpinner';
import RecipeCard from './Recipe';

const _ = require('underscore/underscore-umd.js');

const RandomRecipes = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, recipes } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Recipes.generalPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const RecipeItems = Recipes.collection.find({}).fetch();
    return {
      recipes: RecipeItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row>
        {_.map(_.sample(recipes, 3), (recipe) => (<Col key={recipe._id} xs={12} md={4}><RecipeCard recipe={recipe} /></Col>))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default RandomRecipes;
