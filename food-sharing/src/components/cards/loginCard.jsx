import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";

class LoginCard extends Component {
    // state = {  }
    render() {
        return (
            // add paddingleft and padding top
            <Card style={{ width: "30rem", marginLeft: "200px", marginTop: "250px" }}>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Keep me logged in"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            href="/dashboard"
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default LoginCard;
