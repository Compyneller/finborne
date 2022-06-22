import React from "react";
import image from "../../Assets/Mobile.webp";
import { Container, Row, Col } from "react-bootstrap";

const Trusted = () => {
  return (
    <div
      className=" w-100 d-flex align-items-center justify-content-center  text-left text-light "
      style={{ padding: "3rem 0", background: "#1C2230" }}
    >
      <Container>
        <Row>
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1>
              TRUSTED PLATFORM <br /> ANYTIME & ANYWHERE
            </h1>
            <br />
            <h5 style={{ lineHeight: "30px" }}>
              The Finborne mobile app adapts <br /> the full functionality of
              the Finborne <br /> platform for seamless ‘on-the-go’ trading
            </h5>
          </Col>
          <Col sm={12} lg={6}>
            <img src={image} className="w-100" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trusted;
