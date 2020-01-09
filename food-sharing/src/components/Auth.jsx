import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import LoginCard from './auth/loginCard';


class Auth extends Component {
    // state = {  }
    render() { 
        return (
            <React.Fragment>
                {/* <Navbar /> */}
                <LoginCard />
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}
 
export default Auth;