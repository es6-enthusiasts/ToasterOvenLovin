import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import Vendor from '../components/Vendor';
import { Vendors } from '../../api/vendors/Vendors';

/* Renders cards for every vendor for everyone to see */
const ListVendors = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, vendors } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Vendor documents.
    const subscription = Meteor.subscribe(Vendors.generalPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Vendor documents
    const vendorItems = Vendors.collection.find({}).fetch();
    return {
      vendors: vendorItems,
      ready: rdy,
    };
  }, []);

  // Now that we have the vendor data, we can render the cards
  return (ready ? (
    <Container id="vendor-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center  bg-white p-3 rounded">
            <h2>Vendors</h2>
          </Col>
          <br />
          <Row xs={1} md={2} lg={3} className="g-4">
            {vendors.map((vendor) => (<Col key={vendor._id}><Vendor vendor={vendor} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListVendors;
