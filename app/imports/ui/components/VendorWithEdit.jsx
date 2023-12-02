import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Image, Button } from 'react-bootstrap';

/** Renders a single card for a vendor with an edit button at the bottom
 *  Card will have the store image, name, horus, and location as the header,
 *  in the body the ingredients will be listen in two columns,
 *  there will be an edit button at the bottom */
const VendorWithEdit = ({ vendor }) => (
  <Card className="h-100">
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
              {vendor.ingredients.split(', ').slice(0, Math.ceil(vendor.ingredients.length / 2)).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Text>
        </Col>
        <Col md={6}>
          <Card.Text>
            <ul style={{ listStyleType: 'circle' }}>
              {vendor.ingredients.split(', ').slice(Math.ceil(vendor.ingredients.length / 2)).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card.Text>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mt-3">
        <Button variant="primary" as={Link} to={`/editVendor/${vendor._id}`}>
          Edit
        </Button>
      </div>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
VendorWithEdit.propTypes = {
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

export default VendorWithEdit;
