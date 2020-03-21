import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const dbUri = "http://localhost:5001/home";
class AllOrders extends Component {
    state = {
        orders: []
    };

    async componentDidMount() {
        const { data: orders } = await axios
            .get(dbUri)
            .catch(err => console.log(err));
        console.log(orders);
        this.setState({ orders });
    }

    handleAdd = () => {
        console.log("Add");
    };

    handleUpdate = campaign => {
        console.log("Update", campaign);
    };

    handleDelete = campaign => {
        console.log("Delete", campaign);
    };

    render() {
        return (
            <React.Fragment>
                <h2>All posted orders will be here</h2>
                <Link to="/orders/new">New Order</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Food Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map(order => (
                            <tr key={order._id}>
                                <td>{order.status}</td>
                                <td>
                                    <Link to="/orders/:id">
                                        {order.foodName}
                                    </Link>
                                </td>

                                <td>{order.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default AllOrders;
