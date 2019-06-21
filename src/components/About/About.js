import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="container-fluid p-3" id="about">
      <div className="row mt-5 mb-5 align-items-center">
        <div className="col-xs-12 col-md-6 d-flex justify-content-center mt-5">
          <img
            src={require('../../assets/images/aboutme.jpeg')}
            className="rounded-circle"
            alt="Sam"
            id="aboutmeimg"
          />
        </div>
        <div className="col-xs-12 col-md-6 mt-5">
          <p className="p-3" id="about-me-text">
            I'm a full stack web developer located in the Philadelphia area. I
            have a passion for coding and the technology industry. I began
            learning to develop websites during the summer of 2018 and completed
            University of Pennsylvania's LPS Coding Bootcamp in May 2019. I
            prioritize clean code, mobile responsiveness, and utilizing React.
            <br />
            <br />
            Currently I am focused on advancing my knowledge of React by
            learning to utilize Redux and Hooks. I am also learning advanced CSS
            3 and Sass. I plan to have a new project up demonstrating these new
            skills and technologies in the next couple weeks.
            <br />
            <br />
            Outside of coding and technology, I am usually found consuming
            anything related to NFL Football - games, documentaries, podcasts,
            analytics, fantasy and everything else. I am the co-commissioner of
            a home fantasy league that is entering it's 5th year.
          </p>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <a
                href={require('../../assets/TaubResume.pdf')}
                download="TaubResume"
              >
                <button type="button" className="btn rounded-pill">
                  <h5 className="p-1">
                    <i class="fa fa-download" /> Resume
                  </h5>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
