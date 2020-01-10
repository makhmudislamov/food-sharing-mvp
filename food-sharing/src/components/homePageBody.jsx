import React, { Component } from 'react';
import { Card, CardGroup} from "react-bootstrap";


class Body extends Component {
    // state = {  }
    render() { 
        return (
            <div>
                <CardGroup className="m-5">
                    <Card className="m-1">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Partner Restaurants</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card className="m-1">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Partner Shelters</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural
                                lead-in to additional content.{" "}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card className="m-1">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Volunteer-Couriers</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}
 
export default Body;