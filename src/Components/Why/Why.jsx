import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "../Carousel/Carousel";

const Why = () => {
  return (
    <div
      className=" w-100 d-flex align-items-center justify-content-center  text-center text-dark "
      style={{ padding: "3rem 0" }}
    >
      <Container>
        <h1>WHY FINBORNE EXCHANGE?</h1>
        <br />
        <p>
          Finborne are cryptocurrencies without the volatility. They share a lot
          of the same powers as ETH but their value is steady, more like a
          traditional currency. So you have access to stable money that you can
          use on Ethereum.
        </p>
        <br />
        <Carousel />
      </Container>
    </div>
  );
};

export default Why;
