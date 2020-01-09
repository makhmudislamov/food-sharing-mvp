import React, { Component } from 'react';

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class NavigationBar extends Component {
    // state = {  }
    render() { 
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Zero Hunger</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                        <NavDropdown title="Stakeholders" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Restaurants
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Homeless Shelters
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Volunteer-Couriers
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Team
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button className="m-2" variant="outline-success">Login</Button>
                    <Button variant="outline-success">Sign Up</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default NavigationBar;