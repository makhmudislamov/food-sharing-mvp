import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import NavigationBar from './components/navbar';
import Footer from './components/footer';
import Body from './components/homePageBody';
import SignUpForm from './components/forms/signupForm';
import Dashboard from "./components/Dashboard";
import NotFound from './components/notFound';
import LoginForm from './components/forms/loginForm';
import OrderForm from './components/forms/orderForm';

class App extends Component {
  // state = {  }
  render() { 
    return (
        <React.Fragment>
            <NavigationBar />
              <main className="conrainter">
                <Switch>
                  <Route path="/" exact component={Body} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/signup" component={SignUpForm} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/order-new" component={OrderForm} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/not-found" component={NotFound} />
                  <Redirect to="/not-found" />
                </Switch>
              </main>
          <Footer />
        </React.Fragment>
    );
  }
}
 
export default App;
