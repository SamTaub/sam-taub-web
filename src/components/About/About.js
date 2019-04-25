import React, { Component } from 'react';
import './style.css';

class About extends Component {

    render() {
        return (

            <div className="container-fluid p-3">
                <div className="row mt-5">
                    <div className="col-xs-12 col-md-6 d-flex justify-content-center">
                        <img src={require('./img/aboutimg.jpeg')} className="rounded-circle" />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <h1 className="text-center p-3">About me</h1>
                        <p className="p-3">
                            I'm a full stack web developer located in the Philadelphia area.  I enjoy coding every day and making fun, easy to use web applications.  I prioritize writing clean code and making applications fully responsive on mobile.  Continue scrolling to learn more about the technologies I use and how to connect with me.
                        </p>
                    </div>
                </div>
            </div>

        );
    }

};

export default About;