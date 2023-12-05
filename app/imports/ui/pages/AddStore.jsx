import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Vendors } from '../../api/vendors/Vendors';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  storeName: String,
  image: String,
  location: String,
  storeHours: String,
  ingredients: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddRecipe page for adding a single document. */
const AddStore = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const {
      storeName,
      image,
      location,
      storeHours,
      ingredients,
    } = data;
    const owner = Meteor.user().username;
    Vendors.collection.insert(
      {
        owner,
        storeName,
        image,
        location,
        storeHours,
        ingredients,
      },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Store added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container id="add-store-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Add Store</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card className="card recipe">
              <Card.Body>
                <Row>
                  <Col><TextField id="add-store-name" name="storeName" /></Col>
                  <Col><TextField id="add-store-image" name="image" /></Col>
                </Row>
                <Row>
                  <Col><TextField id="add-store-location" name="location" /></Col>
                  <Col><TextField id="add-store-hours" name="storeHours" /></Col>
                </Row>
                <LongTextField id="add-store-ingredients" name="ingredients" />

                <SubmitField id="add-store-submit" value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddStore;
