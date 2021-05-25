import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <div>
      <Services>
        <Description>
          <h2>
            High <span>quality</span> services.
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img alt="icon" src={clock} />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={teamwork} />
                <h3>Team Work</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={diaphragm} />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={money} />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
      </Services>
      {/* <Image>
        <img alt="camera" src={home2} />
      </Image> */}
    </div>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  /* width: 50%; */
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  flex: 1;
`;
const Card = styled.div`
  flex-basis: 15rem;
  margin: 0;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default ServicesSection;
