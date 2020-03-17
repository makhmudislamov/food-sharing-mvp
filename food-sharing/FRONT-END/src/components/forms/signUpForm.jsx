import React from 'react';
import { Form, Card } from 'react-bootstrap';
import Joi from 'joi-browser';
import FormMethods from './common/formMethods';

class SignUpForm extends FormMethods {
    state = {
        data: {
            username: "",
            password: "",
            phoneNum: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zipCode: ""

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
        phoneNum: Joi.string()
            .required()
            .label("Phone Number"),
        address: Joi.string()
            .required()
            .label("Address"),
        address2: Joi.string().label("Address 2"),
        city: Joi.string()
            .required()
            .label("City"),
        state: Joi.string()
            .required()
            .label("State"),
        zipCode: Joi.string()
            .required()
            .label("Zip Code"),
    };

    doSubmit = () => {
        // call the server
        console.log("Signed Up");
    };
    render() {
        return (
            <Card
                style={{
                    width: "30rem",
                    marginLeft: "100px",
                    marginTop: "90px"
                }}
            >
                <Card.Body>
                    <Card.Title> Sign Up to end Hunger in SF</Card.Title>
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
                            "phoneNum",
                            "Phone Number",
                            "415-123-4567"
                        )}
                        {this.renderInput("address", "Address", "123 Main st")}

                        {this.renderInput(
                            "address2",
                            "Address 2",
                            "Apt/Suite, Floor..."
                        )}

                            {this.renderInput("city", "City", "San Francisco")}
                            {this.renderInput("state", "State", "CA or NY")}
                            {this.renderInput("zipCode", "Zip Code", "94133")}
                        <Form.Group id="formGridCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Keep me signed in"
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