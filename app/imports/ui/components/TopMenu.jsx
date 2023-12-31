import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BoxArrowRight, PersonFill, PersonPlusFill, PersonCircle } from 'react-bootstrap-icons';
// import { Profiles } from '../../api/profiles/Profiles';

const navContent = function () {
  let retVal;
  if (Roles.userIsInRole(Meteor.userId(), 'student')) {
    retVal = (
      <Nav className="mx-auto pt-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link id="recipe-nav" href="/listRecipes">Recipes</Nav.Link>
        <Nav.Link id="vendor-nav" href="/listVendors">Vendors</Nav.Link>
        <Nav.Link id="cookbook-nav" href="/Cookbook">My Cookbook</Nav.Link>
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
        <Nav.Link id="stores-nav" href="/Stores">My Stores</Nav.Link>
        <Nav.Link id="community-nav" href="/community">Community</Nav.Link>
      </Nav>
    );
  } else {
    retVal = (
      <Nav className="mx-auto pt-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link id="recipe-nav" href="/listRecipes">Recipes</Nav.Link>
        <Nav.Link id="vendor-nav" href="/listVendors">Vendors</Nav.Link>
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
  return (
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
              <NavDropdown.Item id="navbar-edit-profile" as={NavLink} to={`/editProfile/${currentUser}`}>
                <PersonCircle />
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
  );
};

export default TopMenu;
