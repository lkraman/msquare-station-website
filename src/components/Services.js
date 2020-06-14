import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';

import {
  faGasPump,
  faHandHoldingUsd,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function Services() {
  return (
    <>
      <Container>
        <Col lg={12} className="text-center mt-5" id="services">
          <h1 className="display-4 pt-4">Our Services</h1>
          <div className="border-top border-dark w-50 mx-auto my-3"></div>
          <p className="lead">We offer residential and commercial services</p>
        </Col>

        <Row className="justify-content-md-center my-5 text-center">
          <Col md={6} lg={4} className="py-3">
            <FontAwesomeIcon icon={faGasPump} className="fa-icon" />
            <p className="lead">
              Keep your hands clean. We pump your gas! Our complimentary service
              no additional charge!
            </p>
            <Button variant="outline-danger" size="md">
              <a href="#map" className="button-link">
                Find Us
              </a>
            </Button>
          </Col>
          <Col md={6} lg={4} className="py-3">
            <FontAwesomeIcon icon={faAppleAlt} className="fa-icon" />
            <p className="lead">
              Cafe Americana's very own, Cafe Express, and Farmer's Market
              coming soon!
            </p>
            <Button variant="outline-danger" size="md">
              <a href="/" className="button-link">
                Coming Soon
              </a>
            </Button>
          </Col>

          <Col md={6} lg={4} className="py-3">
            <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-icon" />
            <p className="lead">
              Save $$$! We offer propane, soda, ice, and kerosene at wholesale
              prices.
            </p>
            <Button variant="outline-danger" size="md">
              <a href="/" className="button-link">
                Coming Soon
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
