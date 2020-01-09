import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Body from './components/homePageBody';

function App() {
  return (
    <React.Fragment>
      <NavBar />
        <Body />
      <Footer />
    </React.Fragment>
  );
}

export default App;
