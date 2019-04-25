import React, { Component } from 'react';
import './style.css';

class Skills extends Component {

    render() {
        return (
            <div className="container-fluid bg p-3">
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="text-center text-white">Skills & Technologies</h1>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-xs-12 col-md-6">
                        <ul className="text-center text-white">
                            <li><h4>HTML 5</h4></li>
                            <li><h4>CSS 3</h4></li>
                            <li><h4>Javascript</h4></li>
                            <li><h4>jQuery</h4></li>
                            <li><h4>Handlebars.js</h4></li>
                            <li><h4>React.js</h4></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ul className="text-center text-white">
                            <li><h4>Firebase</h4></li>
                            <li><h4>Node.js</h4></li>
                            <li><h4>Express.js</h4></li>
                            <li><h4>MySQL</h4></li>
                            <li><h4>MongoDB</h4></li>
                            <li><h4>Git</h4></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

};

export default Skills;