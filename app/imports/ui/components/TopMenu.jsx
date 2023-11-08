import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';

const TopMenu = () => {
    return (
        < Navbar className={"color4"}  expand="sm">
            <Container>
                <Navbar.Brand href="#home"><strong>Toaster Oven Lovin</strong></Navbar.Brand>
                <Nav className="mx-auto pt-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#recipes">Recipes</Nav.Link>
                    <Nav.Link href="#recipes">Nutrition Tips</Nav.Link>
                    <Nav.Link href="#categories">Categories</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default TopMenu;