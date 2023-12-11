import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm,ErrorsField, SubmitField, TextField, SelectField, HiddenField} from 'uniforms-bootstrap5';
import swal from "sweetalert";
import {Profiles} from "../../api/profiles/Profiles";

/**
 * SignUp component is similar to signin component, but we create a new user instead.
 */
const SignUp = ({ location }) => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    email: String,
    password: String,
    role: {
      type: String,
      allowedValues: ['student', 'vendor'],
      defaultValue: 'student',
    },
    firstName: String,
    lastName: String,
    address: String,
    image: String,
    description: String,

  });
  const bridge = new SimpleSchema2Bridge(schema);

  /* Handle SignUp submission. Create user account and a profile entry, then redirect to the home page. */
  const submit = (doc) => {
    const { email, password, role } = doc;
    Accounts.createUser({ email, username: email, password, role }, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setError('');
        setRedirectToRef(true);
      let firstName = doc.firstName;
      let lastName = doc.lastName;
      let address = doc.address;
      let image = doc.image;
      let description = doc.description;
      let owner = doc.email;
      Profiles.collection.insert(
          {
            firstName,
            lastName,
            address,
            image,
            description,
            owner,
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
      }
    });

  };
  /* Display the signup form. Redirect to add page after successful registration and login. */
  const { from } = location?.state || { from: { pathname: '/home' } };
  // if correct authentication, redirect to from: page instead of signup screen
  if (redirectToReferer) {
    return <Navigate to={from} />;
  }
  return (
    <Container id="signup-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Register your account</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card id="signup-card">
              <Card.Body>
                <TextField name="email" id="signup-form-email" placeholder="E-mail address" />
                <TextField name="password" id="signup-form-password" placeholder="Password" type="password" />
                <SelectField name="role" id="signup-form-role" placeholder="Role" />
                <Row>
                  <Col><TextField name="firstName"/></Col>
                  <Col><TextField name="lastName"/></Col>
                </Row>
                <TextField name="image"/>
                <Row>
                  <Col><TextField name="address"/></Col>
                  <Col><TextField name="description"/></Col>
                </Row>
                <ErrorsField />
                <SubmitField id="signup-form-submit" />
              </Card.Body>
            </Card>
          </AutoForm>
          <Alert variant="light">
            Already have an account? Login
            {' '}
            <Link to="/signin">here</Link>
          </Alert>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Registration was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

/* Ensure that the React Router location object is available in case we need to redirect. */
SignUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  location: { state: '' },
};

export default SignUp;
