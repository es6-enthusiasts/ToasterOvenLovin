import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const navContent = function (User, role) {
  let retVal;
  if (User === '') {
    retVal = (
      <Nav className="mx-auto pt-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/listRecipes">Recipes</Nav.Link>
        <Nav.Link href="/listVendors">Vendors</Nav.Link>
        <Nav.Link href="/community">Community</Nav.Link>
      </Nav>
    );
  } else {
    if (role === 'Admin') {
      retVal = (
        <Nav className="mx-auto pt-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/listRecipes">Recipes</Nav.Link>
          <Nav.Link href="/listVendors">Vendors</Nav.Link>
          <Nav.Link href="/listIngredients">Ingredients</Nav.Link>
          <Nav.Link href="/community">Community</Nav.Link>
        </Nav>
      );
    } if (role === 'Vendor') {
      retVal = (
        <Nav className="mx-auto pt-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/listRecipes">Recipes</Nav.Link>
          <Nav.Link href="/listVendors">Vendors</Nav.Link>
          <Nav.Link href="/listIngredients">Ingredients</Nav.Link>
          <Nav.Link href="/community">Community</Nav.Link>
        </Nav>
      );
    }
    retVal = (
      <Nav className="mx-auto pt-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/listRecipes">Recipes</Nav.Link>
        <Nav.Link href="/listVendors">Vendors</Nav.Link>
        <Nav.Link href="/listVendors">MyCookbook</Nav.Link>
        <Nav.Link href="/listIngredients">Ingredients</Nav.Link>
        <Nav.Link href="/community">Community</Nav.Link>
      </Nav>
    );
  }
  return retVal;

};

// Use navContent in your component
const TopMenu = () => {

  const { currentUser, role } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
    role: 'Admin',
  }), []);

  return (
    <Navbar className="color5" expand="sm">
      <Container>
        <Navbar.Brand href="/home"><Image className="bannerLogo" src="images/logo.png" alt="logo" /><strong>College Cuisine Connection</strong></Navbar.Brand>
        {navContent(currentUser, role)}
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
