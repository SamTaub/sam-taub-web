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
            prioritize writing maintainable code and mobile responsiveness.
            <br />
            <br />
            What am I currently doing? I'm coding every day. I'm updating old
            projects, creating new ones, or learning something new. Recently
            I've picked up some advanced CSS 3 techniques and learned how to use
            Sass.
            <br />
            <br />I have a Master's Degree in Higher Education
            Counseling/Student Affairs - so I work well with people too. Outside
            of coding I enjoy sports and food (especially barbecue).
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
