import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import phone1 from "../../Assets/1-1.webp";
import phone2 from "../../Assets/2-1.webp";
import phone3 from "../../Assets/3-1.webp";

const Buy = () => {
  return (
    <div
      className=" w-100 d-flex align-items-center justify-content-center  text-left text-light "
      style={{ padding: "3rem 0", background: "#1C2230" }}
    >
      <Container>
        <h1 className="text-center">BUY. SELL. TRADE</h1>
        <br />
        <h5 className="mb-4">
          Finborne enables you to buy, sell and trade cryptocurrencies in just
          three simple steps
        </h5>
        <br />

        <Row>
          <Col sm={12} lg={4} className="customCol">
            <Card
              className="w-100 "
              style={{ background: "transparent", border: "2px solid white" }}
            >
              <Card.Body>
                <h3 className="text-center">Download the App</h3>
                <br />
                <Row>
                  <Col>
                    <img height={400} src={phone1} alt="" />
                  </Col>
                  <Col className="d-flex align-items-center text-light">
                    <p>Download our mobile app on App Store for IOS users</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="customCol">
            <Card
              className="w-100 "
              style={{ background: "transparent", border: "2px solid white" }}
            >
              <Card.Body>
                <h3 className="text-center">Complete KYC</h3>
                <br />
                <Row>
                  <Col>
                    <img height={400} src={phone2} alt="" />
                  </Col>
                  <Col className="d-flex align-items-center text-light">
                    <p>
                      Complete your KYC in under 5 minutes with just your PAN,
                      Adhar & a Selfie
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="customCol">
            <Card
              className="w-100 "
              style={{ background: "transparent", border: "2px solid white" }}
            >
              <Card.Body>
                <h3 className="text-center">Trade</h3>
                <br />
                <Row>
                  <Col>
                    <img height={400} src={phone3} alt="" />
                  </Col>
                  <Col className="d-flex align-items-center text-light">
                    <p>
                      One-click is what it takes to start trading in 100+
                      cryptocurrencies
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buy;
