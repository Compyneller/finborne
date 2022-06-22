import React from "react";
import "./Hero.css";
import { Carousel } from "react-bootstrap";
import first from "../../Assets/pierre-borthiry-vBCVcWUyvyM-unsplash.jpg";
import sec from "../../Assets/jeremy-bezanger-9opiHRPIvR0-unsplash.jpg";
import third from "../../Assets/maxim-hopman-fiXLQXAhCfk-unsplash.jpg";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <Carousel fade interval={3000} style={{ height: "85vh" }}>
        <Carousel.Item>
          <img
            style={{ height: "85vh", objectFit: "cover" }}
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "85vh", objectFit: "cover" }}
            className="d-block w-100"
            src={sec}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "85vh", objectFit: "cover" }}
            className="d-block w-100"
            src={third}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
