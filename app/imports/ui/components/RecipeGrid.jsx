import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RecipeCard from './Recipe';
import { Recipes } from '../../api/stuff/Recipes';
import { Stuffs } from '../../api/stuff/Stuff';


const RecipeGrid = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, recipes } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const recipes = Recipes.collection.find({}).fetch();
    return {
      recipes: recipes,
      ready: rdy,
    };
  }, []);
  return (ready ? (
  <Container className="py-3">
    <Row className="justify-content-center">
      {recipes.map((recipe) => (
        <Col md={3} xs={12}>
        <RecipeCard
          title="Chicken Tacos"
          description="Spicy and flavorful Chicken Tacos"
          ingredients={['Chicken', 'Tortillas', 'Lettuce', 'Tomatoes', 'Salsa']}
          instructions="Cook chicken, assemble in tortillas with lettuce, tomatoes, and salsa. Serve hot!"
          image="https://i0.wp.com/littlemissfinicky.com/wp-content/uploads/2019/04/IMG_3622.jpg?fit=982%2C655&ssl=1"
        />
      </Col>
    ))}
    </Row>
  </Container>

);

export default RecipeGrid;
