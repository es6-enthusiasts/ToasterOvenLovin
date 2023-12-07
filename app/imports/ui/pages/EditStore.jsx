import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Roles } from 'meteor/alanning:roles';
import { Vendors } from '../../api/vendors/Vendors';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Vendors.schema);

const EditStore = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Vendors documents.
    let subscription = '';
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      subscription = Meteor.subscribe(Vendors.adminPublicationName);
    } else {
      subscription = Meteor.subscribe(Vendors.userPublicationName);
    }
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Vendors.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);

  const submit = (data) => {
    const {
      storeName,
      image,
      location,
      storeHours,
      owner,
      ingredients,
    } = data;

    Vendors.collection.update(_id, { $set: {
      storeName,
      image,
      location,
      storeHours,
      owner,
      ingredients,
    } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container id="edit-store-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Store Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField id="edit-store-name" name="storeName" /></Col>
                  <Col><TextField id="edit-store-image" name="image" /></Col>
                </Row>
                <LongTextField id="edit-store-location" name="location" />
                <LongTextField id="edit-store-hours" name="storeHours" />
                <LongTextField id="edit-store-ingredients" name="ingredients" />
                <SubmitField id="edit-store-submit" value="Submit" />
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

export default EditStore;
