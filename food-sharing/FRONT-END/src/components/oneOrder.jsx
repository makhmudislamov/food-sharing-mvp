import React, { Component } from 'react';
// import FormMethods from './forms/common/formMethods';
// import { Card } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// const dbUri = "http://localhost:5001/home";


class OneOrder extends Component {
    state = {
        orders: []
            
    };

    render() {
        return (
            <React.Fragment>
               <h1>Order details</h1>
               <h2>Org Name: Kind Hearts</h2>
               <h2>Address: 123 Main Street</h2>
               <h2>Special Instructions: Please call 5 min before arriving</h2>
            </React.Fragment>
        );
    }
}
 
export default OneOrder;