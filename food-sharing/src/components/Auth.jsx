import React, { Component } from 'react';
import Dashboard from './Dashboard';
import LoginCard from './auth/loginCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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