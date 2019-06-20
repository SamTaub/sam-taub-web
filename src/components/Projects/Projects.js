import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className="containter-fluid" id="projects">
      <div className="row">
        <div className="col mt-5">
          <h1 className="text-center text-white">Projects</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-xs-12 col-md-6 d-flex justify-content-center">
          <div className="card border-0 m-5">
            <a href="//bead.li" target="blank">
              <img
                src={require('../../assets/images/projects/beadlipreview.png')}
                className="card-img-top"
                alt="Beadli"
                id="beadliimg"
              />
            </a>
            <div className="card-body">
              <h3 className="text-center">
                <a href="//bead.li" target="_blank">
                  Beadli
                </a>
              </h3>
              <br />
              <p className="card-text">
                A fun, interactive application where users can browse designs or
                publish their own. A full stack web application powered by
                React.
              </p>
              <p className="card-text text-center">
                <a href="//github.com/SamTaub/project-3" target="_blank">
                  View Github
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 d-flex justify-content-center">
          <div className="card border-0 m-5">
            <a href="//samtaub.github.io/react-clicky-game/" target="blank">
              <img
                src={require('../../assets/images/projects/clickypreview.png')}
                className="card-img-top"
                alt="South Park Click Game"
              />
            </a>
            <div className="card-body">
              <h3 className="text-center">
                <a
                  href="//samtaub.github.io/react-clicky-game/"
                  target="_blank"
                >
                  South Park Clicky Game
                </a>
              </h3>
              <br />
              <p className="card-text">
                Click the image to score a point, just don't click on the same
                image two times or you lose the game! My first application built
                using React.
              </p>
              <p className="card-text text-center">
                <a
                  href="//github.com/SamTaub/react-clicky-game"
                  target="_blank"
                >
                  View Github
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 d-flex justify-content-center">
          <div className="card border-0 m-5">
            <a href="//funky-funkos.herokuapp.com/" target="blank">
              <img
                src={require('../../assets/images/projects/funkopreview.png')}
                className="card-img-top"
                alt="My Funko Pop!"
              />
            </a>
            <div className="card-body">
              <h3 className="text-center">
                <a href="//funky-funkos.herokuapp.com/" target="_blank">
                  My Funko Pop!
                </a>
              </h3>
              <br />
              <p className="card-text">
                Customize your own Marvel Superhero. Create matching superheros
                to unlock trophies.
              </p>
              <p className="card-text text-center">
                <a href="//github.com/troynwynn/MyFunkoPop" target="_blank">
                  View Github
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 d-flex justify-content-center">
          <div className="card border-0 m-5">
            <a href="//samtaub.github.io/Project-1/" target="blank">
              <img
                src={require('../../assets/images/projects/nbasearchpreview.png')}
                className="card-img-top"
                alt="NBA Player & Team Search"
              />
            </a>
            <div className="card-body">
              <h3 className="text-center">
                <a href="//samtaub.github.io/Project-1/" target="_blank">
                  NBA Player and Team Search
                </a>
              </h3>
              <br />
              <p className="card-text">
                Search for news about your favorite NBA players and teams. Find
                tickets to see your favorite team. My first web application
                build 8 weeks into the University of Pennsylvania Coding
                Bootcamp.
              </p>
              <p className="card-text text-center">
                <a href="//github.com/SamTaub/Project-1" target="_blank">
                  View Github
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
