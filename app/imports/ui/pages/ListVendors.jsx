import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/Stuff';
import LoadingSpinner from '../components/LoadingSpinner';
import Vendor from '../components/Vendor';
/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListVendors = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const stuffItems = Stuffs.collection.find({}).fetch();
    return {
      stuffs: stuffItems,
      ready: rdy,
    };
  }, []);

  const vendors = [{
    name: 'Philip',
    image: 'https://github.com/philipmjohnson.png',
    hours: '9-5',
    ingredients: ['milk', 'sugar', 'flour'],
  },
  {
    name: 'Philip',
    image: 'https://github.com/philipmjohnson.png',
    hours: '9-5',
    ingredients: ['milk', 'sugar', 'flour'],
  },
  {
    name: 'Philip',
    image: 'https://github.com/philipmjohnson.png',
    hours: '9-5',
    ingredients: ['milk', 'sugar', 'flour'],
  },
  ];

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Vendors</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {vendors.map((vendor, index) => (<Col key={index}><Vendor vendor={vendor} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListVendors;
