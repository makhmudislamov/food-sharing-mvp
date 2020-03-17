import React from "react";
import Joi from "joi-browser";
import { Form, Button, Card } from "react-bootstrap";
import FormMethods from "./common/formMethods";
class SignUpForm extends FormMethods {
    state = {
        data: {
            username: "",
            password: "",
            passwordConfirm: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password"),
        passwordConfirm: Joi.string()
            .required()
            .label("Password confirmation")
    };

    doSubmit = () => {
        // call ther server
        console.log("Signed Up");
    };

    render() {
        return (
            <Card
                style={{
                    width: "30rem",
                    marginLeft: "200px",
                    marginTop: "150px"
                }}
            >
                <Card.Body>
                    <Card.Title>Create data</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        {this.renderInput(
                            "username",
                            "Username",
                            "Enter Email"
                        )}
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        {this.renderInput(
                            "password",
                            "Password",
                            "Enter Password",
                            "password"
                        )}
                        {this.renderInput(
                            "passwordConfirm",
                            "Confirm Password",
                            "Confirm Password",
                            "password"
                        )}
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                label="Keep me logged in"
                            />
                        </Form.Group>
                        {this.renderButton("Sign Up")}
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default SignUpForm;
