import React from 'react';
import propanegrillandtankwithwords from '../img/propanegrillandtankwithwords.png';
import { Button, Container, Col, Row } from 'react-bootstrap';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function TwoColumnSection() {
  return (
    <>
      <div className="border-top border-dark w-100 mx-auto my-3"></div>

      <Container className="mt-5">
        <Row className="py-4">
          <Col lg={5} className="mb-5 my-lg-auto">
            <h1 className="font-weight-bold mb-3">Need a propane refill?</h1>
            <p className="mb-4">
              We offer residential and commercial propane tanks and propane
              refills. Be sure to ask us about our weekly propane service
              options.
            </p>
            <Button variant="outline-danger" size="lg">
              <a href="#map" className="button-link">
                Find Us!
              </a>
            </Button>
            {/* <Button className="btn-outline-dark btn-lg">
              <a
                href="#map"
                target="_blank"
                className="btn-outline-dark btn-lg"
              >
                Find Us!
              </a>
            </Button> */}
          </Col>

          <Col lg={7}>
            <img
              src={propanegrillandtankwithwords}
              alt="propane tank"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TwoColumnSection;
