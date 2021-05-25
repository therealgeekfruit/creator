import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            aspernatur dolorem dicta officia quod similique cum magni voluptas
            debitis sapiente?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            incidunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Payment methods?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            incidunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Gear that we use?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            incidunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
  }
`;

export default FaqSection;
