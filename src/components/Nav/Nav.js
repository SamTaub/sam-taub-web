import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top p-2"
        id="nav-top"
      >
        <a className="navbar-brand">
          <h3>Sam Taub</h3>
        </a>
        <button
          className="navbar-toggler toggler-border"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon toggler-border" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#about">
              <h5 className="nav-heading">About</h5>
            </a>
            <a className="nav-item nav-link" href="#skills">
              <h5 className="nav-heading">Skills</h5>
            </a>
            <a className="nav-item nav-link" href="#projects">
              <h5 className="nav-heading">Portfolio</h5>
            </a>
            <a className="nav-item nav-link" href="#connect">
              <h5 className="nav-heading">Connect</h5>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
