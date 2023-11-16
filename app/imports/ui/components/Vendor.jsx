import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Vendor = ({ vendor }) => {
  console.log(vendor);
  return (
    <Card className="h-100">
      <Card.Header>
        <Image src={vendor.image} width={75} />
        <Card.Title>{vendor.storeName}</Card.Title>
        <Card.Subtitle>Hours: {vendor.storeHours}</Card.Subtitle>
        <Card.Subtitle>Location: {vendor.location}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <ul style={{ listStyleType: 'circle' }}>
            {vendor.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
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
    ingredients: PropTypes.arrayOf(PropTypes.string),
    _id: PropTypes.string,
  }).isRequired,
};

export default Vendor;
