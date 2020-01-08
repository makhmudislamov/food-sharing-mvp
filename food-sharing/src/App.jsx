import React, { Component } from 'react';
import Footer from './Components/Footer';
import HomePage from './Pages/Home';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0,
            hasBeenClicked: false,
        };
    }

    clickedButton = () => {
        this.setState({
            clickCount: this.state.clickCount + 1,
        });
    }

    render() {
        return (
            <div className="App">
                <HomePage />
                <Footer />
            </div>
        );
    }
}

export default App;
