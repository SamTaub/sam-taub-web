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
              <p className="card-text text-center">
                <a href="//github.com/SamTaub/project-3" target="_blank">
                  View Github
                </a>
              </p>
              <p className="card-text">
                Beadli is a full stack web application powered by a React front
                end. Users can create, share, and browse designs intended for
                fuse bead crafting.{' '}
                <a
                  className="featured-link"
                  href="https://www.trilogyed.com/blog/a-surprise-birthday-present-and-the-gift-of-teamwork-just-another-penn-demo-day/"
                  target="_blank"
                >
                  Beadli was recently featured in a Trilogy Education Blog!
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
              <p className="card-text text-center">
                <a
                  href="//github.com/SamTaub/react-clicky-game"
                  target="_blank"
                >
                  View Github
                </a>
              </p>
              <br />
              <p className="card-text">
                My first application built using React. A simple click game that
                utilizes props & state.
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
              <p className="card-text text-center">
                <a href="//github.com/troynwynn/MyFunkoPop" target="_blank">
                  View Github
                </a>
              </p>
              <p className="card-text">
                Full stack application featuring Passport.js, MySQL, and jQuery.
                Users are encouraged to customize their own Marvel themed
                superheroes. Users are awarded trophies for matching outfits.
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
                  NBA Player & Team Search
                </a>
              </h3>
              <br />
              <p className="card-text text-center">
                <a href="//github.com/SamTaub/Project-1" target="_blank">
                  View Github
                </a>
              </p>
              <p className="card-text">
                Front end application featuring jQuery, AJAX, and Firebase.
                Users can interact with the UI to search news for NBA players
                and teams. Links are also provided to purchase tickets if
                tickets are available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
