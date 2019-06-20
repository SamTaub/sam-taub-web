import React from 'react';
import './connect.css';

const Connect = () => {
  return (
    <div className="container-fluid p-3" id="connect">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">Connect</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-xs-12 col-md-6">
          <div className="row mt-3 justify-content-center">
            <i className="fa fa-phone" />
          </div>

          <div className="row mt-3 justify-content-center">
            <h4>(610) 547-4465</h4>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="row mt-3 justify-content-center">
            <i className="fa fa-envelope" />
          </div>
          <div className="row mt-3 justify-content-center">
            <h4>staub91@gmail.com</h4>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-xs-12 col-md-6">
          <div className="row mt-3 justify-content-center">
            <a href="//www.linkedin.com/in/samtaub/" target="_blank">
              <img
                src={require('../../assets/images/connect/linkedin.png')}
                alt="LinkedIn"
                id="linkedin-logo"
              />
            </a>
          </div>

          <div className="row mt-3 justify-content-center">
            <h4>LinkedIn</h4>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="row mt-3 justify-content-center">
            <a href="//github.com/SamTaub" target="_blank">
              <img
                src={require('../../assets/images/connect/github-logo.png')}
                alt="GitHub"
                id="github-logo"
              />
            </a>
          </div>
          <div className="row mt-3 justify-content-center">
            <h4>GitHub</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
