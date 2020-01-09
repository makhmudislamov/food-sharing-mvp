import React, { Component } from "react";
import NavigationBar from './components/navbar';
import Footer from './components/footer';
import Body from './components/homePageBody';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Auth from "./components/Auth";

class App extends Component {
  // state = {  }
  render() { 
    return (
        <Router>
            <Switch>
                <React.Fragment>
                    <NavigationBar />
                    <Route path="/" exact component={Body} />
                    <Route path="/login" component={Auth} />
                    <Footer />
                </React.Fragment>
            </Switch>
        </Router>
    );
  }
}
 
export default App;
