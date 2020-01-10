import React, { Component } from 'react';
import Dashboard from './Dashboard';
import LoginCard from './cards/loginCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./auth.css";

class Auth extends Component {
    // state = {  }
    render() { 
        return (
            <Router>
                <Switch>
                    <React.Fragment>
                        <LoginCard />
                        {/* <Route path="/dashboard" component={Dashboard}/> */}
                    </React.Fragment>
                </Switch>
            </Router>
        );
    }
}
 
export default Auth;