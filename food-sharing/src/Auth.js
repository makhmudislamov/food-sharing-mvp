import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LoginCard from './components/auth/loginCard';


class Auth extends Component {
    // state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <LoginCard />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Auth;