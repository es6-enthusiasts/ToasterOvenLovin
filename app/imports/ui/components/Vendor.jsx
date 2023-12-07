import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Image, Row, Button } from 'react-bootstrap';

/** Renders a single card for a vendor with an edit button at the bottom
 *  Card will have the store image, name, horus, and location as the header,
 *  in the body the ingredients will be listen in two columns */
const Vendor = ({ vendor }) => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  const selectiveEdit = () => {
    let retval = '';
    if (currentUser === vendor.owner) {
      retval = (
        <div className="d-flex justify-content-center mt-3">
          <Button id="edit-store" variant="primary" as={Link} to={`/editVendor/${vendor._id}`}>
            Edit
          </Button>
        </div>
      );
    }
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      retval = (
        <div>
          <br />
          <footer className="blockquote-footer">{vendor.owner}</footer>
          <div className="d-flex justify-content-center mt-3">
            <Button id="edit-store" variant="primary" as={Link} to={`/editVendor/${vendor._id}`}>
              Edit
            </Button>
          </div>
        </div>
      );
    }
    return retval;
  };
  return (
    <Card className="card store h-100">
      <Card.Header className="d-flex flex-column align-items-center">
        <Image src={vendor.image} width={150} />
        <Card.Title className="text-center">{vendor.storeName}</Card.Title>
        <br />
        <Card.Subtitle className="text-center">Hours: {vendor.storeHours}</Card.Subtitle>
        <br />
        <Card.Subtitle className="text-center">Location: {vendor.location}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <Card.Text>
              <ul style={{ listStyleType: 'circle' }}>
                {vendor.ingredients.split(', ').slice(0, Math.ceil(vendor.ingredients.split(', ').length / 2)).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </Card.Text>
          </Col>
          <Col md={6}>
            <Card.Text>
              <ul style={{ listStyleType: 'circle' }}>
                {vendor.ingredients.split(', ').slice(Math.ceil(vendor.ingredients.split(', ').length / 2)).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </Card.Text>
          </Col>
        </Row>
        {selectiveEdit()}
      </Card.Body>
    </Card>
  );
};

// Require a document to be passed to this component.
Vendor.propTypes = {
  vendor: PropTypes.shape({
    storeName: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    storeHours: PropTypes.string,
    owner: PropTypes.string,
    ingredients: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Vendor;
