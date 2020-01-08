import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div class="copyright">
                    <ul class="icons">
                        <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                        <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" class="icon fa-snapchat"><span class="label">Snapchat</span></a></li>
                    </ul>
                    <p>&copy; Project Zero Hunger. All rights reserved. Images: <a href="https://www.pexels.com/">Pexels</a>.</p>
                </div>
            </footer>
        );  
    }
}
