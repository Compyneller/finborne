import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import "./Global.css";
import aus from "../../Assets/1.webp";
import lon from "../../Assets/2.webp";
import can from "../../Assets/3.webp";
import eur from "../../Assets/4.webp";

const Global = () => {
  return (
    <div
      className=" w-100 d-flex align-items-center justify-content-center  text-center text-light"
      style={{ padding: "3rem 0", background: "#1C2230" }}
    >
      <Container>
        <p>
          We have offices in the four global financial capitals. Do you want to
          join us?
        </p>
        <br />
        <h3>GLOBAL PRESENCE</h3>
        <br />
        <Row>
          <Col className="customCol" sm={12} md={6} lg={3}>
            <Card style={{ width: "100%" }} className="shadow-sm">
              <Card.Img variant="top" src={aus} />
              <Card.Footer
                className="text-light"
                style={{ background: "#0C62BD" }}
              >
                <h5>Australia</h5>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="customCol" sm={12} md={6} lg={3}>
            <Card style={{ width: "100%" }} className="shadow-sm">
              <Card.Img variant="top" src={lon} />
              <Card.Footer
                className="text-light"
                style={{ background: "#0C62BD" }}
              >
                <h5>London</h5>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="customCol" sm={12} md={6} lg={3}>
            <Card style={{ width: "100%" }} className="shadow-sm">
              <Card.Img variant="top" src={can} />
              <Card.Footer
                className="text-light"
                style={{ background: "#0C62BD" }}
              >
                <h5>Canada</h5>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="customCol" sm={12} md={6} lg={3}>
            <Card style={{ width: "100%" }} className="shadow-sm">
              <Card.Img variant="top" src={eur} />
              <Card.Footer
                className="text-light"
                style={{ background: "#0C62BD" }}
              >
                <h5>Europe</h5>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Global;
