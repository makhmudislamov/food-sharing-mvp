import React, { Component } from "react";
import NavigationBar from './components/navbar';
import Footer from './components/footer';
import Body from './components/homePageBody';

class App extends Component {
  // state = {  }
  render() { 
    return (
        <React.Fragment>
            <NavigationBar />
            <Body />
            <Footer />
        </React.Fragment>
    );
  }
}
 
export default App;
