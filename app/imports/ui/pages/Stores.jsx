import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Vendors } from '../../api/vendors/Vendors';
import VendorWithEdit from '../components/VendorWithEdit';

/* Renders cards for every vendor the user owns, unlike the list vendors this page will allow the user to edit their stores with an additional edit button */
const Stores = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, vendors } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Vendor documents.
    const subscription = Meteor.subscribe(Vendors.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Vendor documents
    const vendorItems = Vendors.collection.find({}).fetch();
    return {
      vendors: vendorItems,
      ready: rdy,
    };
  }, []);

  // Now that we have the vendor data, we can render the cards, note that this is the same as list vendors except it uses VendorWithEdit instead of Vendor so there is an edit button
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center  bg-white p-3 rounded">
            <h2>Your Vendors</h2>
          </Col>
          <br />
          <Row xs={1} md={2} lg={3} className="g-4">
            {vendors.map((vendor) => (<Col key={vendor._id}><VendorWithEdit vendor={vendor} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Stores;
