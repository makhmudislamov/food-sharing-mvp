import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
class FoodCard extends Component {
    // state = {  }
    render() { 
        return (
            <React.Fragment>
                <>
                    <Card bg="primary" text="white" style={{ width: "20rem" }}>
                        <Card.Header>Status: Pickup in Progress</Card.Header>
                        <Card.Body>
                            <Card.Title>Chicken Burrito</Card.Title>
                            <Card.Text>
                                Amount: 3 <br />
                                Scheduled Pickup time (PST): 2PM <br />
                                Assigned Volunteer: Joe Rogan <br />
                                Volunteer's contact: 415-123-4567 <br />
                                Destination: Kind Hearts Org <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card bg="success" text="white" style={{ width: "20rem" }}>
                        <Card.Header>Status: Delivered</Card.Header>
                        <Card.Body>
                            <Card.Title>Burrito Bowl</Card.Title>
                            <Card.Text>
                                Amount: 5 <br />
                                Assigned Volunteer: Joe Rogan <br />
                                Volunteer's contact: 415-123-4567 <br />
                                Destination: Kind Hearts Org <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card bg="warning" text="white" style={{ width: "20rem" }}>
                        <Card.Header>Status: Delivery in Progress</Card.Header>
                        <Card.Body>
                            <Card.Title>Fish Taco Plate</Card.Title>
                            <Card.Text>
                                Amount: 4 <br />
                                Assigned Volunteer: Joe Rogan <br />
                                Volunteer's contact: 415-123-4567 <br />
                                Destination: Kind Hearts Org <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card bg="danger" text="white" style={{ width: "20rem" }}>
                        <Card.Header>Status: Pickup is late</Card.Header>
                        <Card.Body>
                            <Card.Title>Vegatarian Combo</Card.Title>
                            <Card.Text>
                                Amount: 3 <br />
                                Scheduled Pickup time (PST): 4PM <br />
                                Assigned Volunteer: In Progress <br />
                                Volunteer's contact:  <br />
                                Destination: Kind Hearts Org <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                </>
            </React.Fragment>
        );
    }
}
 
export default FoodCard;