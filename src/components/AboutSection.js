import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Hello, I am</h2>
          </div>
          <div className="hide">
            <h2>
              <span>Sudeep Rao</span>.
            </h2>
          </div>
        </div>
        <p>
          A full-stack developer with interests in photography, graphic design
          and content creation.
        </p>
        <button>Hire me</button>
      </div>
      <div className="image">
        <img src={home1} alt="coolguy" />
      </div>
    </div>
  );
};

export default AboutSection;
