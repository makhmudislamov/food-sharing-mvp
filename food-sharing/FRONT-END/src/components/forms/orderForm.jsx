import React from "react";
import { Card, Form } from "react-bootstrap";
import Joi from "joi-browser";
import FormMethods from "./common/formMethods";

class OrderForm extends FormMethods {
    state = {  }
    render() { 
        return ( 
            <h1>Order will be here</h1>
        );
    }
}
 
export default OrderForm;