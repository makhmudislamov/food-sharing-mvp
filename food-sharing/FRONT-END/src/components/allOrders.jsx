import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const dbUri = "http://localhost:5000/home";
class AllOrders extends Component {
    state = {
        orders: []
    };

    // async componentDidMount() {
    //     const { data: campaigns } = await axios
    //         .get(dbUri)
    //         .catch(err => console.log(err));
    //     console.log(campaigns);
    //     this.setState({ campaigns });
    // }

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
                                <td>{order.title}</td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() =>
                                            this.handleUpdate(order)
                                        }
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            this.handleDelete(order)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default AllOrders;
