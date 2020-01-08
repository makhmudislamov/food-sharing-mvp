import React from 'react';
import Header from '../Components/Header';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false,
        }
    }

    toggleMenu = () => {
        const { menuOpen } = this.state;

        this.setState({
            menuOpen: !menuOpen,
        })
    };

    render() {
        const { menuOpen } = this.state;

        return (
            <>
                <Header
                    projectName="Zero Hunger"
                    onToggleMenu={this.toggleMenu}
                />

			    <nav id="menu" class={menuOpen && 'open'}>
                    <ul class="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">someOtherPage</a></li>
                        <li><a href="#">someOtherOtherPage?</a></li>
                    </ul>
                    <a href="#menu" class="close" onClick={this.toggleMenu} />
                </nav>

			<section id="banner">
                <div class="inner">
                    <header>
                        <h1>This is Project Zero Hunger</h1>
                        <p>Connecting restaurants and food distributors<br />to help in-need individuals and reduce food waste.</p>
                    </header>
                        <a href="#" class="button big scrolly">Sign up</a><br /><br />
                            <a href="#" class="button big scrolly">Login</a>
				</div>
			</section>

			<div id="main">

					<section class="wrapper style1">
                                <div class="inner">

								<div class="flex flex-2">
                                        <div class="col col1">
                                            <div class="image round fit">
                                                <a class="link"><img src="/images/pic01.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                        <div class="col col2">
                                            <h3>The Problem</h3>
                                            <p>the problem explained blablah blah blahblah blah blahblah blah blahblah blah blahh blah blah</p>
                                            <p>blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah</p>
                                            <a href="#" class="button">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

					<section class="wrapper style2">
                                <div class="inner">
                                    <div class="flex flex-2">
                                        <div class="col col2">
                                            <h3>Our Solution</h3>
                                            <p>our solution explained blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah</p>
                                            <p>blah blah blahblah blah blahblah blah blahblah blah blahblah blah blah</p>
                                            <a href="#" class="button">Learn More</a>
                                        </div>
                                        <div class="col col1 first">
                                            <div class="image round fit">
                                                <a class="link"><img src="/images/pic02.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

					<section class="wrapper style1">
                                <div class="inner">
                                    <header class="align-center">
                                        <h2>How it works</h2>
                                        <p>Project Zero Hunger, explained in three easy steps</p>
                                    </header>
                                    <div class="flex flex-3">
                                        <div class="col align-center">
                                            <div class="image round fit">
                                                <img height="250" width="250" src="/images/pic03.jpg" alt="" />
                                            </div>
                                            <p>Restaurants often end mealtime with excess food. As often as they like, they list any extra food they have.</p>
                                            <a href="#" class="button">Learn More</a>
                                        </div>
                                        <div class="col align-center">
                                            <div class="image round fit">
                                                <img height="250" width="250" src="/images/pic05.jpg" alt="" />
                                            </div>
                                            <p>Volunteers see listings for restaurants and can offer to transfer food from the restaurants to food distribution centers.</p>
                                            <a href="#" class="button">Learn More</a>
                                        </div>
                                        <div class="col align-center">
                                            <div class="image round fit">
                                                <img height="250" width="250" src="/images/pic04.jpg" alt="" />
                                            </div>
                                            <p>Food distribution centers hold the food availalble at any time for in-need individuals to stop by and get what they need.</p>
                                            <a href="#" class="button">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
            </>
        );
    }
}