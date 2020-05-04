import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// class NavigationBar extends Component {
const NavigationBar = ({ user }) => {
    // state = {  }
    // render() { 
        return (
            <Navbar style={{ paddingRight: "5%" }} bg="light" expand="lg">
                <Navbar.Brand style={{ fontWeight: "bold" }} href="/">
                    Zero Hunger
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                        <NavDropdown
                            title="Stakeholders"
                            id="basic-nav-dropdown"
                        >
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
                    {!user && (
                        <React.Fragment>
                            <Button
                                style={{ padding: "12px" }}
                                className="m-1"
                                href="/login"
                                variant="outline-success"
                            >
                                Login
                            </Button>
                            <Button variant="outline-success">
                                <NavDropdown className="m-auto" title="Sign Up">
                                    <NavDropdown.Item href="/signup">
                                        Sign Up as a Restaurant
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                        Sign Up as a Shelter
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                        Sign Up as a Courier
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Button>
                        </React.Fragment>
                    )}
                    {user && (
                        <React.Fragment>
                            {/* <Button
                                style={{ padding: "12px" }}
                                className="m-1"
                                href="/profile"
                                variant="outline-success"
                            >
                                {user.name}
                            </Button> */}
                            
                            <Button
                                style={{ padding: "12px" }}
                                className="m-1"
                                href="/logout"
                                variant="outline-success"
                            >
                                Logout
                            </Button>

                        </React.Fragment>
                    )}
                </Navbar.Collapse>
            </Navbar>
        );
    // }
}
 
export default NavigationBar;