import React from 'react';

export default class Header extends React.Component {
    render() {
        const { projectName, onToggleMenu } = this.props;

        return (
            <header id="header" class="alt">
                <div class="logo"><a href="index.html"><span>Project</span> {projectName}</a></div>
                <a href="#menu" onClick={onToggleMenu}>Menu</a>
            </header>
        );
    }
}
