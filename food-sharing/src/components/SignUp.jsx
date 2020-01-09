import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import SignUpForm from "./cards/signupForm"

class SignUp extends Component {
    // state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <SignUpForm />
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default SignUp;