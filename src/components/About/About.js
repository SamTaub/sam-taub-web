import React, { Component } from 'react';
import './style.css';

class About extends Component {

    render() {
        return (

            <div className="container-fluid p-3" id="about">
                <div className="row mt-5 mb-5 align-items-center">
                    <div className="col-xs-12 col-md-6 d-flex justify-content-center mt-5">
                        <img src={require('../../assets/images/aboutme.jpeg')} className="rounded-circle" alt="Sam" id="aboutmeimg" />
                    </div>
                    <div className="col-xs-12 col-md-6 mt-5">
                        <p className="p-3" id="about-me-text">
                            I'm a full stack web developer located in the Philadelphia area.  I enjoy coding every day and making fun, easy to use web applications.  I prioritize writing clean code and creating applications that are mobile responsive.  Continue scrolling to see technologies I have used, sample projects, and learn how to connect with me.
                        </p>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <a href="//google.com" target="_blank"><button type="button" className="btn rounded-pill"><h5 className="p-1"> View Resume</h5></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};

export default About;