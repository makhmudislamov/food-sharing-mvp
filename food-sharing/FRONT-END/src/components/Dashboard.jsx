import React, { Component } from 'react';
import FoodCard from './cards/dashCard';

class Dashboard extends Component {
    // state = {  }
    render() { 
        return (
            <React.Fragment>
                <FoodCard />
            </React.Fragment>
        );
    }
}
 
export default Dashboard;