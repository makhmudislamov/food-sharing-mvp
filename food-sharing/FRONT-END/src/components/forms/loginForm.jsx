import React from "react";
import { Card, Form } from "react-bootstrap";
import Joi from "joi-browser";
import FormMethods from "./common/formMethods";
import { login } from '../services/authService';
class LoginForm extends FormMethods {
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            // call the server
            const { data } = this.state
            const {data: jwt} = await login(data.username, data.password)
            localStorage.setItem("token", jwt)
            // this.props.history.push("/orders");
            window.location = "/orders"
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    }; 

    render() {
        return (
            // add paddingleft and padding top
            <Card
                style={{
                    width: "30rem",
                    marginLeft: "200px",
                    marginTop: "150px"
                }}
            >
                <Card.Body>
                    <Card.Title>Login</Card.Title>
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
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Keep me logged in"
                            />
                        </Form.Group>
                        {this.renderButton("Login")}
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default LoginForm;
