import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg">
                <a class="navbar-brand text-white" href="#"><h3>Sam Taub</h3></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link text-white" href="#"><h4>About</h4></a>
                        <a class="nav-item nav-link text-white" href="#"><h4>Skills</h4></a>
                        <a class="nav-item nav-link text-white" href="#"><h4>Portfolio</h4></a>
                        <a class="nav-item nav-link text-white" href="#"><h4>Connect</h4></a>
                    </div>
                </div>
            </nav>
        )
    }

};

export default Nav;