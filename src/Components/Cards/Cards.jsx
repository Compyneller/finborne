import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import user from "../../Assets/icons8-people-96.png";
import server from "../../Assets/icons8-server-96.png";
import fast from "../../Assets/icons8-fast-96.png";

const Cards = () => {
  return (
    <div
      className=" w-100 d-flex align-items-center justify-content-center  text-left text-light "
      style={{ padding: "3rem 0", background: "#0A0E17" }}
    >
      <Container>
        <Row>
          <Col className="customCol" sm={12} lg={4}>
            <Card className="bg-dark">
              <Card.Body>
                <img src={user} alt="" />
                <br />
                <br />
                <h3>USER-FRIENDLY</h3>
                <br />
                <p>
                  The platform is user-friendly offering guidance and tutorial
                  for first time users.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="customCol" sm={12} lg={4}>
            <Card className="bg-dark">
              <Card.Body>
                <img src={server} alt="" />
                <br />
                <br />
                <h3>SECURE</h3>
                <br />
                <p>
                  Security above everything. The platform is safe and private.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="customCol" sm={12} lg={4}>
            <Card className="bg-dark" style={{ height: "100%" }}>
              <Card.Body>
                <img src={fast} alt="" />
                <br />
                <br />
                <h3>LIGHTNING QUICK</h3>
                <br />
                <p>High performance and high speed transactions.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
