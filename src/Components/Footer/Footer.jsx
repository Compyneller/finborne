import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import visa from "../../Assets/logo-03.webp";
import verVisa from "../../Assets/logo-02.webp";
import masterCard from "../../Assets/logo-01.webp";
import twinBank from "../../Assets/logo-04.webp";
import imps from "../../Assets/logo-05.webp";
import paytm from "../../Assets/logo-07-1.webp";
import ms from "../../Assets/logo-10.webp";
import upi from "../../Assets/logo-09.webp";
import gpay from "../../Assets/logo-08.webp";
import mobi from "../../Assets/logo-06.webp";

const Footer = () => {
  return (
    <div
      className=" w-100 d-flex align-items-center justify-content-center text-light "
      style={{ padding: "5rem 0", background: "#1C2230" }}
    >
      <Container>
        <Row>
          <Col
            sm={12}
            lg={8}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <p style={{ fontSize: "12px" }}>
              The purpose of this website is solely to display information
              regarding the products and services available on the
              Finborne.co.in App. It is not intended to offer access to any of
              such products and services. You may obtain access to such products
              and services on the Finborne.co.in App.Please note that the
              availability of the products and services on the Finborne.co.in
              App is subject to jurisdictional limitations. Finborne.co.in may
              not offer certain products, features and/or services on the
              Finborne.co.in App in certain jurisdictions due to potential or
              actual regulatory restrictions.
              <br />
              <br /> Finborne is the trading name of UNIVERSO MAGNÂNIMO,
              UNIPESSOAL LDA and it is situated at the address – Praceta
              Sebastião da Gama, nº 3, 3º ESQ, Massamá, Lisbon, Sintra,Massamá
              and Monte Abraão 2745 837 Queluz
            </p>
            <Row>
              <Col>
                <img src={visa} alt="" />
              </Col>
              <Col>
                <img src={verVisa} alt="" />
              </Col>
              <Col>
                <img src={masterCard} alt="" />
              </Col>
              <Col>
                <img src={twinBank} alt="" />
              </Col>
              <Col>
                <img src={imps} alt="" />
              </Col>
              <Col>
                <img src={paytm} alt="" />
              </Col>
              <Col>
                <img src={ms} alt="" />
              </Col>
              <Col>
                <img src={gpay} alt="" />
              </Col>
              <Col>
                <img src={upi} alt="" />
              </Col>
              <Col>
                <img src={mobi} alt="" />
              </Col>
            </Row>
          </Col>
          <Col sm={12} lg={4}>
            <h5 className="text-center">CONTACT US</h5>
            <Row>
              <p>Address : Praceta Sebastião da Gama, nº 3, 3º ESQ, Massamá</p>
              <p>District : Lisbon</p>
              <p>Municipality : Sintra</p>
              <p>Parish : Massamá and Monte Abraão 2745 837 Queluz</p>
              <p>
                <img
                  style={{
                    filter: "invert(1)",
                    height: "25px",
                    marginRight: "10px",
                  }}
                  src="https://img.icons8.com/ios-filled/2x/filled-message.png"
                  alt=""
                />
                :
                <a
                  style={{ color: "white", marginLeft: "10px" }}
                  href="mailto:universomagnanimo@gmail.com"
                >
                  universomagnanimo@gmail.com
                </a>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
