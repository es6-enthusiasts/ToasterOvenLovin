import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { Profiles } from '../../api/profiles/Profiles';
import LoadingSpinner from './LoadingSpinner';

const navContent = function (User) {
  let retVal;
  if (User === '') {
    retVal = (
      <Nav className="mx-auto pt-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link id="vendor-nav" href="/listRecipes">Recipes</Nav.Link>
        <Nav.Link href="/listVendors">Vendors</Nav.Link>
        <Nav.Link id="community-nav" href="/community">Community</Nav.Link>
      </Nav>
    );
  } else if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
    retVal = (
      <Nav className="mx-auto pt-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link id="recipe-nav" href="/listRecipes">Recipes</Nav.Link>
        <Nav.Link id="vendor-nav" href="/listVendors">Vendors</Nav.Link>
        <Nav.Link id="community-nav" href="/community">Community</Nav.Link>
      </Nav>
    );
  } else if (Roles.userIsInRole(Meteor.userId(), 'vendor')) {
    retVal = (
      <Nav className="mx-auto pt-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link id="recipe-nav" href="/listRecipes">Recipes</Nav.Link>
        <Nav.Link id="vendor-nav" href="/listVendors">Vendors</Nav.Link>
        <Nav.Link href="/Stores">My Stores</Nav.Link>
        <Nav.Link id="community-nav" href="/community">Community</Nav.Link>
      </Nav>
    );
  } else {
    retVal = (
      <Nav className="mx-auto pt-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link id="recipe-nav" href="/listRecipes">Recipes</Nav.Link>
        <Nav.Link id="vendor-nav" href="/listVendors">Vendors</Nav.Link>
        <Nav.Link id="cookbook-nav" href="/Cookbook">My Cookbook</Nav.Link>
        <Nav.Link id="community-nav" href="/community">Community</Nav.Link>
      </Nav>
    );
  }
  return retVal;
};
const TopMenu = () => {

  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, profiles } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Recipe documents.
    const subscription = Meteor.subscribe(Profiles.generalPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Recipe documents
    const profileItems = Profiles.collection.find({}).fetch();
    return {
      profiles: profileItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Navbar className="color5" expand="sm" id="basic-navbar-nav">
      <Container>
        <Navbar.Brand href="/home"><Image className="bannerLogo" src="images/toastlogo.png" alt="logo" width="40px" /></Navbar.Brand>
        {navContent(currentUser)}
        <Nav className="justify-content-end">
          {currentUser === '' ? (
            <NavDropdown id="login-dropdown" title="Login">
              <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                <PersonFill />
                Sign
                in
              </NavDropdown.Item>
              <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                <PersonPlusFill />
                Sign
                up
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown id="navbar-current-user" title={currentUser}>
              <NavDropdown.Item id="navbar-sign-out" as={NavLink} to={`/edit/${profiles._id}`}>
                <BoxArrowRight />
                {' '}
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                <BoxArrowRight />
                {' '}
                Sign
                out
              </NavDropdown.Item>
            </NavDropdown>
          )}

        </Nav>
      </Container>
    </Navbar>
  ) : <LoadingSpinner />);
};

export default TopMenu;
