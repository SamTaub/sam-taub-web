import React, { Component } from 'react';
import './style.css';

class Skills extends Component {

    render() {
        return (
            <div className="container-fluid p-3" id="skills">
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="text-center text-white">Skills & Technologies</h1>
                    </div>
                </div>
                <div className="row mt-3 mb-5">
                    <div className="col">
                        <ul className="text-center text-white">
                            <li><h4><span><img src={require('./img/icons8-git-48.png')} alt="Git" /></span>Git</h4></li>
                            <li><h4><span><img src={require('./img/icons8-html-5-48.png')} alt="HTML 5" /></span>HTML 5</h4></li>
                            <li><h4><span><img src={require('./img/icons8-css3-48.png')} alt="CSS 3" /></span>CSS 3</h4></li>
                            <li><h4><span><img src={require('./img/icons8-bootstrap-48.png')} alt="Bootstrap" /></span>Bootstrap</h4></li>
                            <li><h4><span><img src={require('./img/icons8-javascript-48.png')} alt="Javascript" /></span>Javascript</h4></li>
                            <li><h4><span><img src={require('./img/jquery.png')} alt="jQuery" className="img-resize"/></span> jQuery</h4></li>
                            <li><h4><span><img src={require('./img/icons8-firebase-48.png')} alt="Firebase" /></span>Firebase</h4></li>
                            <li><h4><span><img src={require('./img/icons8-nodejs-48.png')} alt="Nodejs" /></span> Node.js</h4></li>
                            <li><h4><span><img src={require('./img/icons8-database-48.png')} alt="MySQL" /></span>MySQL</h4></li>
                            <li><h4><span><img src={require('./img/icons8-data-transfer-48.png')} alt="Express" /></span>Express.js</h4></li>
                            <li><h4><span><img src={require('./img/icons8-template-48.png')} alt="Handlebars" /></span>Handlebars.js</h4></li>
                            <li><h4><span><img src={require('./img/icons8-mongodb-48.png')} alt="MongoDB" /></span>MongoDB</h4></li>
                            <li><h4><span><img src={require('./img/react.png')} alt="React.js" className="img-resize"/></span>React.js</h4></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

};

export default Skills;