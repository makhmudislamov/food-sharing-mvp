import React, { Component } from "react";
import { Router, Switch, Route  } from "react-router-dom";
import NavigationBar from './components/navbar';
import Footer from './components/footer';
import Body from './components/homePageBody';
import Auth from "./components/Auth";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

class App extends Component {
  // state = {  }
  render() { 
    return (
        <React.Fragment>
            <NavigationBar />
              <main className="conrainter">
                <Switch>
                  <Route path="/" exact component={Body} />
                  <Route path="/login" component={Auth} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
              </main>
          <Footer />
        </React.Fragment>
    );
  }
}
 
export default App;
