import React, { Component } from 'react';
import { Card, CardGroup} from "react-bootstrap";


class Body extends Component {
    // state = {  }
    render() { 
        return (
            <div>
                <CardGroup className="m-5">
                    <Card className="m-1">
                        <Card.Img variant="top" src={require("./rest.jpeg")} />
                        <Card.Body>
                            <Card.Title>Partner Restaurants</Card.Title>
                            <Card.Text>
                                Zero Hunger partner restaurants enjoy huge tax
                                benefits and contribute to society by helping
                                less fortunate
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Contact Info</small>
                        </Card.Footer>
                    </Card>
                    <Card className="m-1">
                        <Card.Img variant="top" src={require("./shel.jpeg")} />
                        <Card.Body>
                            <Card.Title>Partner Shelters</Card.Title>
                            <Card.Text>
                                Zero Hunger partnered with 47 local shelters.Our
                                network of shelters help ending hunger in San
                                Francisco.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Contact Info</small>
                        </Card.Footer>
                    </Card>
                    <Card className="m-1">
                        <Card.Img variant="top" src={require("./vol.jpeg")} />
                        <Card.Body>
                            <Card.Title>Volunteer-Couriers</Card.Title>
                            <Card.Text>
                                Zero Hunger Volunteers help feed the hungry.
                                They can signup to flexible time slots for
                                volunteering.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Contact Info</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}
 
export default Body;