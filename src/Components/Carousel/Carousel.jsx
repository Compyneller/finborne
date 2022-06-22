import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import global from "../../Assets/icons8-global-warming-96.png";
import key from "../../Assets/icons8-password-key-96.png";
import exchange from "../../Assets/icons8-change-96.png";
import growth from "../../Assets/icons8-personal-growth-96.png";
import { Row, Col } from "react-bootstrap";
const Carousel = () => {
  return (
    <Row>
      <Col sm={12} md={6} lg={3} className="customCol">
        <Card className="shadow-sm" style={{ width: "100%", height: "100%" }}>
          <Card.Body>
            <img className="mx-auto" src={global} alt="" />
            <br />
            <Card.Title>GLOBAL</Card.Title>
            <Card.Text>
              Finborne are global, and can be sent over the internet. They're
              easy to receive or send once you have an Ethereum account.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="customCol">
        <Card className="shadow-sm" style={{ width: "100%", height: "100%" }}>
          <Card.Body>
            <img className="mx-auto" src={key} alt="" />
            <br />
            <Card.Title>SECURED</Card.Title>
            <Card.Text>
              Finborne are secured by cryptography. No one can forge
              transactions on your behalf.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="customCol">
        <Card className="shadow-sm" style={{ width: "100%", height: "100%" }}>
          <Card.Body>
            <img className="mx-auto" src={exchange} alt="" />
            <br />

            <Card.Title>EXCHANGEABLE</Card.Title>
            <Card.Text>
              Finborne are exchangeable for ETH and other Ethereum tokens. Lots
              of dapps rely on Finborne.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="customCol">
        <Card className="shadow-sm" style={{ width: "100%", height: "100%" }}>
          <Card.Body>
            <img className="mx-auto" src={growth} alt="" />
            <br />

            <Card.Title>HIGH DEMAND</Card.Title>
            <Card.Text>
              Demand for Finborne is high, so you can earn interest for lending
              yours. Make sure you're aware of the risks before lending.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Carousel;
