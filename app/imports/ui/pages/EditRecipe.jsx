import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
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
    const subscription = Meteor.subscribe(Recipes.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Recipes.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditRecipe', doc, ready);
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
    } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center  bg-white p-3 rounded">
            <h2>Edit Recipe</h2>
          </Col>
          <br />

          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="dishName" /></Col>
                  <Col><TextField name="image" /></Col>
                </Row>
                <LongTextField name="description" />
                <Row>
                  <Col><TextField name="equipment" /></Col>
                  <Col><TextField name="ingredients" /></Col>
                </Row>
                <LongTextField name="instructions" />
                <Row>
                  <Col><TextField name="dietaryRestriction" /></Col>
                  <Col><TextField name="costPerServing" /></Col>
                  <Col><TextField name="noServings" /></Col>
                  <Col><TextField name="timeToMake" /></Col>
                </Row>
                <SubmitField value="Submit" />
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
