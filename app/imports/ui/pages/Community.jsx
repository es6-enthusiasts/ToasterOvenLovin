import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import AccountCard from '../components/Account';
import { Recipes } from '../../api/recipe/Recipes';

import LoadingSpinner from '../components/LoadingSpinner';

/* A simple static component to render some text for the landing page. */
const Community = () => {
// useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, accounts } = useTracker(() => {
  // Note that this subscription will get cleaned up
  // when your component is unmounted or deps change.
  // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Recipes.generalPublicationName);
    const sample = [
      {
        firstName: 'William',
        lastName: 'Simmons',
        address: '1234 candyCane Lane',
        image: 'https://github.com/willjsimmons.png',
        description: 'an adept leader who succeeds everywhere all the time.',
      },
      {
        firstName: 'Juliette',
        lastName: 'Raubolt',
        address: '1234 candyCane Lane',
        image: 'https://github.com/julietteraubolt.png',
        description: 'an adept leader who succeeds everywhere all the time.',
      },
      {
        firstName: 'Loelle',
        lastName: 'Lam',
        address: '1234 candyCane Lane',
        image: 'https://github.com/loellelam.png',
        description: 'an adept leader who succeeds everywhere all the time.',
      },
      {
        firstName: 'Janel',
        lastName: 'Joson',
        address: '1234 candyCane Lane',
        image: 'https://github.com/janeljo.png',
        description: 'an adept leader who succeeds everywhere all the time.',
      },
      {
        firstName: 'Kyla',
        lastName: 'Lee',
        address: '1234 candyCane Lane',
        image: 'https://github.com/kyla8.png',
        description: 'an adept leader who succeeds everywhere all the time.',
      },
    ];
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const accountItems = Recipes.collection.find({}).fetch();
    return {
      accounts: sample,
      ready: rdy,
    };
  }, []);
  return (
    ready ? (
      <Container id="landing-page" fluid className="py-0">
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
