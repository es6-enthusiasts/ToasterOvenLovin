import React from 'react';
import { Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AccountCard = ({ account }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={account.image} width={75} />
      <Card.Title>{account.firstName}{account.lastName}</Card.Title>
      <Card.Subtitle>{account.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{account.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
AccountCard.propTypes = {
  account: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default AccountCard;
