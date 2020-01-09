import React, { Component } from 'react';
import { Navbar, Container} from "react-bootstrap";
class Footer extends Component {
    // state = {  }
    render() { 
        return ( 
            <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Twitter</Navbar.Brand>
                    <Navbar.Brand href="#">Instagram</Navbar.Brand>
                    <Navbar.Brand href="#">Facebook</Navbar.Brand>
                    <Navbar.Brand href="#">Contact Us</Navbar.Brand>
                </Container>
            </Navbar>
         );
    }
}
 
export default Footer;