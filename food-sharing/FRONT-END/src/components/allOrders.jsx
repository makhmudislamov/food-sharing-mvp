import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { toast } from 'react-toastify'; //TODO: implement toast alert
import { Card, Button } from 'react-bootstrap';
const dbUri = "http://localhost:5001/home";
axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response && error.response.status <= 400 && 
        error.response.status < 500;
    if (!expectedError) {
        console.log("Logging error:", error);
        alert("Unexpected error occured"); 
    }
    return Promise.reject(error);
});

class AllOrders extends Component {
    state = {
        orders: []
    };

    async componentDidMount() {
        const { data: orders } = await axios
            .get(`${dbUri}`)
            .catch(err => console.log(err));

        console.log(orders);
        this.setState({ orders });
    }

    handleUpdate = async (order) => {
  
        const originalOrders = [...this.state.orders];
        order.status = "Delivered"
        const orders = [...this.state.orders];
        const index = orders.indexOf(order)
        orders[index] = {...order};
        this.setState({ orders }); 
        
        try {
            await axios
            .put(`${dbUri}/orders/${order._id}`, order)
            .catch(err => console.log(err));
            // throw new Error("");
        } catch (ex) {
            alert("Update failed!")
            this.setState({ orders: originalOrders });
        }
    };

    handleDelete = async order => {
        const originalOrders = this.state.orders;
        const orders = this.state.orders.filter(p => p._id !== order._id);
        this.setState({ orders })
        
        try {   
            await axios.delete(`${dbUri}/orders/09809${order._id}`);
        } catch (ex) {
            if (ex.response && ex.response.status === 404) {
                console.log("exception", ex);             
                alert("This order has already been deleted");              
            this.setState({orders: originalOrders})
            }
        }
    };

    render() {
        return (
            <React.Fragment>
                <h2>Order History</h2>
                <Link to="/orders/new">New Order</Link>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        margin: "20px",
                        justifyContent: "space-around"
                    }}
                >
                    {this.state.orders.map((order, _id) => (
                        <Card
                            key={_id}
                            bg="primary"
                            text="white"
                            style={{ width: "20rem" }}
                        >
                            <Card.Header key={_id}>
                                Status: {order.status}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <Link
                                        to={`/orders/${_id}`}
                                        style={{
                                            color: "white",
                                            textDecoration: "underline"
                                        }}
                                        key={_id}
                                    >
                                        {order.foodName}
                                    </Link>
                                </Card.Title>
                                <Card.Text key={_id}>
                                    Amount: {order.amount} <br />
                                    Scheduled Pickup time (PST): 2PM <br />
                                    Assigned Volunteer: Joe Rogan <br />
                                    Volunteer's contact: 415-123-4567 <br />
                                    Destination: Kind Hearts Org <br />
                                </Card.Text>
                            </Card.Body>
                            <Button
                                variant="warning"
                                onClick={() => this.handleUpdate(order)}
                            >
                                Update Status
                            </Button>
                            <Button
                                variant="danger"
                                onClick={() => this.handleDelete(order)}
                            >
                                Delete
                            </Button>
                        </Card>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default AllOrders;