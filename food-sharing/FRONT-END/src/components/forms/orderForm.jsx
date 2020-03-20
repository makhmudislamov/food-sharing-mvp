import React from "react";
import { Card, Form } from "react-bootstrap";
import Joi from "joi-browser";
import FormMethods from "./common/formMethods";

class OrderForm extends FormMethods {
    state = {
        data: {
            status: "Pickup in Progress", // this should be maybe array with all possible statuses
            foodName: "",
            amount: ""
        },
        errors: {}
    };

    schema = {
        status: Joi.string()
            .required()
            .label("Pickup Status"),
        foodName: Joi.string()
            .required()
            .label("Food Name"),
        amount: Joi.string()
            .required()
            .label("Amount")
    };

    doSubmit = () => {
        // call the server
        console.log("posted new food order");
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
                    <Card.Title>Create new order</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        {this.renderInput(
                            "status",
                            "Status",
                            "Pickup in Progress"
                        )}
                        {this.renderInput(
                            "foodName",
                            "Food Name",
                            "Chicken Burrito"
                        )}
                        {this.renderInput("amount", "Amount", "4")}
                        {this.renderButton("Submit")}
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}
 
export default OrderForm;