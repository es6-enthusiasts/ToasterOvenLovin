import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Roles } from 'meteor/alanning:roles';
import { Recipes } from '../../api/recipe/Recipes';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Recipes.schema);

/* Renders the EditRecipe page for editing a single document. */
const EditRecipe = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditRecipe', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Recipe documents.
    let subscription = '';
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      subscription = Meteor.subscribe(Recipes.adminPublicationName);
    } else {
      subscription = Meteor.subscribe(Recipes.userPublicationName);
    }
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Recipes.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // On successful submit, insert the data.
  const submit = (data) => {
    const {
      dishName,
      description,
      image,
      ingredients,
      equipment,
      instructions,
      dietaryRestriction,
      costPerServing,
      noServings,
      timeToMake,
      owner,
    } = data;
    Recipes.collection.update(_id, { $set: {
      dishName,
      description,
      image,
      ingredients,
      equipment,
      instructions,
      dietaryRestriction,
      costPerServing,
      noServings,
      timeToMake,
      owner,
    } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container id="edit-recipe-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Recipe</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card id="edit-recipe-card">
              <Card.Body>
                <Row>
                  <Col><TextField id="edit-recipe-name" name="dishName" /></Col>
                  <Col><TextField id="edit-recipe-image" name="image" /></Col>
                </Row>
                <LongTextField id="edit-recipe-description" name="description" />
                <Row>
                  <Col><TextField id="edit-recipe-equipment" name="equipment" /></Col>
                  <Col><TextField id="edit-recipe-ingredients" name="ingredients" /></Col>
                </Row>
                <LongTextField id="edit-recipe-instructions" name="instructions" />
                <Row>
                  <Col><TextField id="edit-recipe-restrictions" name="dietaryRestriction" /></Col>
                  <Col><TextField id="edit-recipe-cost" name="costPerServing" /></Col>
                  <Col><TextField id="edit-recipe-servings" name="noServings" /></Col>
                  <Col><TextField id="edit-recipe-time" name="timeToMake" /></Col>
                </Row>
                <SubmitField id="edit-recipe-submit" value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditRecipe;
