import React from "react";
import { Card, Form } from "react-bootstrap";
import Joi from "joi-browser";
import FormMethods from "./common/formMethods";
import http from "../services/httpService";
import config from "../services/config.json";
// const dbUri = "http://localhost:5001/home";
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

    saveOrder(order) {
        // if updating
        if (order._id) {
            const body = {...order};
            console.log(body);
            delete body._id
            return http.put(`${config.dbUri}/${order._id}`, body);
        }
        
        console.log(order);
        
        // new order
        return http.post(`${config.dbUri}/orders`, order);
    };

    doSubmit = async () => {
        await this.saveOrder(this.state.data);
        this.props.history.push("/orders")
        // call the server
        // CAPTURING THE DATA FROM THE FORM BUT NOR SENDING IT TO DB
        // const { status, foodName, amount } = this.state.data;
        // const OrderObject = {
        //     status: this.state.data.status,
        //     foodName: this.state.data.foodName,
        //     amount: this.state.data.amount
        // };
        // console.log(`This is OrderObject ${OrderObject}`);
        
        // // await http.post("http://localhost:5001/orders", order);
        // await axios
        //     .post("http://localhost:5001/orders", OrderObject)
        //     .then( response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        // console.log("Created new order", OrderObject); // not logging _id
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