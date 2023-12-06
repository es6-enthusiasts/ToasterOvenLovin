import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Recipes } from '../../api/recipe/Recipes';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  dishName: String,
  description: String,
  image: String,
  ingredients: String,
  equipment: String,
  instructions: String,
  dietaryRestriction: String,
  costPerServing: SimpleSchema.Integer,
  noServings: SimpleSchema.Integer,
  timeToMake: SimpleSchema.Integer,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddRecipe page for adding a single document. */
const AddRecipe = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
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
    const owner = Meteor.user().username;
    Recipes.collection.insert(
      {
        owner,
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
      },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Recipe added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container id="add-recipe-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Add Recipe</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card className="card recipe">
              <Card.Body>
                <Row>
                  <Col><TextField id="add-recipe-name" name="dishName" /></Col>
                  <Col><TextField id="add-recipe-image" name="image" /></Col>
                </Row>
                <LongTextField id="add-recipe-description" name="description" />
                <Row>
                  <Col><TextField id="add-recipe-equipment" name="equipment" /></Col>
                  <Col><TextField id="add-recipe-ingredients" name="ingredients" /></Col>
                </Row>
                <LongTextField id="add-recipe-instructions" name="instructions" />
                <Row>
                  <Col><TextField id="add-recipe-restrictions" name="dietaryRestriction" /></Col>
                  <Col><TextField id="add-recipe-cost" name="costPerServing" /></Col>
                  <Col><TextField id="add-recipe-servings" name="noServings" /></Col>
                  <Col><TextField id="add-recipe-time" name="timeToMake" /></Col>
                </Row>
                <SubmitField id="add-recipe-submit" value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddRecipe;
