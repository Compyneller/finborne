import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../Assets/Zero-Fee-1024x745.webp";
import arrow from "../../Assets/icons8-double-right.gif";

const Zero = () => {
  return (
    <div
      className=" w-100 d-flex align-items-center justify-content-center  text-center text-dark"
      style={{ padding: "3rem 0" }}
    >
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <div className="w-100">
              <img src={image} className="w-100" alt="" />
            </div>
          </Col>
          <Col
            sm={12}
            lg={6}
            className="d-flex align-items-center flex-column justify-content-center"
          >
            <div className="w-100 ">
              <h3>PAY NOTHING WHEN YOU</h3>
              <br />
              <Row>
                <Col>
                  <div className="w-100 d-flex align-items-center ">
                    <img src={arrow} width={30} alt="" />
                    <h5 style={{ margin: "auto 10px" }}>Buy</h5>
                  </div>
                </Col>
                <Col>
                  <div className="w-100 d-flex align-items-center ">
                    <img src={arrow} width={30} alt="" />
                    <h5 style={{ margin: "auto 10px" }}>Sell</h5>
                  </div>
                </Col>
                <Col>
                  <div className="w-100 d-flex align-items-center ">
                    <img src={arrow} width={30} alt="" />
                    <h5 style={{ margin: "auto 10px" }}>Deposit</h5>
                  </div>
                </Col>
                <Col>
                  <div className="w-100 d-flex align-items-center ">
                    <img src={arrow} width={30} alt="" />
                    <h5 style={{ margin: "auto 10px" }}>Withdrawal</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Zero;
