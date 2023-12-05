import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import Banner from '../components/Banner';
import AccountCard from '../components/Account';
import LoadingSpinner from '../components/LoadingSpinner';
import { Profiles } from '../../api/profiles/Profiles';

/* A simple static component to render some text for the landing page. */
const Community = () => {
// useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, accounts } = useTracker(() => {
  // Note that this subscription will get cleaned up
  // when your component is unmounted or deps change.
  // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Profiles.generalPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const accountItems = Profiles.collection.find({}).fetch();
    return {
      accounts: accountItems,
      ready: rdy,
    };
  }, []);
  return (
    ready ? (
      <Container id="community-page" fluid className="py-0">
        <Banner />
        <Container className="content my-2">
          <Row xs={1} md={2} lg={3} className="g-4">
            {accounts.map((acct) => (<Col key={acct._id}><AccountCard account={acct} /></Col>))}
          </Row>
        </Container>

      </Container>
    ) : <LoadingSpinner />
  );
};

export default Community;
