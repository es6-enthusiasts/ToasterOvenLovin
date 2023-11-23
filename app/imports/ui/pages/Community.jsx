import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';
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
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const accountItems = Recipes.collection.find({}).fetch();
    const sample = {
      {
        owner: 'john@foo.com',
        dishName: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish with eggs, bacon, and cheese.',
        image: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg',
        ingredients: ['spaghetti', 'eggs', 'bacon', 'cheese'],
        equipment: ['pot', 'pan', 'whisk'],
        instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        dietaryRestriction: 'None',
        costPerServing: 5,
        noServings: 4,
        timeToMake: 30,
      },
      {
        owner: 'alice@bar.com',
        dishName: 'Chicken Alfredo',
        description: 'Creamy Alfredo sauce with grilled chicken served over fettuccine.',
        image: 'https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4-1152x1536.jpg',
        ingredients: ['chicken', 'fettuccine', 'heavy cream', 'parmesan'],
        equipment: ['grill', 'pot', 'pan'],
        instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        dietaryRestriction: 'None',
        costPerServing: 8,
        noServings: 4,
        timeToMake: 45,
      },
    };
    return {
      accounts: accountItems,
      ready: rdy,
    };
  }, []);
  return (
    ready ? (
      <Container id="landing-page" fluid className="py-0">
        <Banner />
        <Container className="content color1 my-2">
          <Row xs={1} md={2} lg={3} className="g-4">
            {accounts.map((acct) => (<Col key={acct._id}><AccountCard username={acct} /></Col>))}
          </Row>
        </Container>
        <RecipeGrid />
      </Container>
    ) : <LoadingSpinner />
  );
};

export default Community;
