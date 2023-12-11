import React from 'react';
import swal from 'sweetalert';
import {Col, Container, Image, Row,Card} from 'react-bootstrap';
import {AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField} from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { Profiles } from '../../api/profiles/Profiles';

const bridge = new SimpleSchema2Bridge(Profiles.schema);

const EditProfile = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Vendors documents.
    const subscription = Meteor.subscribe(Profiles.generalPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    console.log(`owner: ${_id}`);
    const document = Profiles.collection.findOne({owner: _id});
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  console.log(`the document is ${doc}`)
  const submit = (data) => {
    const {
      firstName,
      lastName,
      address,
      image,
      description,
    } = data;

    Profiles.collection.update(doc._id, { $set: {
      firstName,
      lastName,
      address,
      image,
      description,
    } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };
  return ready ? (
    <Container className="py-3" className={"py-3"}>
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc} className={"color2"}>
            <Card>
            <Card.Header>
              <Image src={doc.image} width={75} className="h-25 cardImg "/>
            </Card.Header>

              <Card.Body>
              <Row>
                <Col><TextField name="firstName"/></Col>
                <Col><TextField name="lastName"/></Col>
              </Row>
              <TextField name="image"/>
              <Row>
                <Col><TextField name="address"/></Col>
                <Col><TextField name="description"/></Col>
              </Row>
              <SubmitField value="Submit"/>
              <ErrorsField/>
              <HiddenField name="owner"/>
              </Card.Body>
        </Card>
          </AutoForm>
        </Col>
      </Row>

    </Container>
  ) : <LoadingSpinner />;
};

export default EditProfile;
