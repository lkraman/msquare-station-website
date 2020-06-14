import React from 'react';
import Map from './Map';
// import propanegrillandtankwithwords from '../img/propanegrillandtankwithwords.png';
// import { Button, Container, Col, Row } from 'react-bootstrap';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function TwoColumnMap() {
  return (
    <>
      <div class="container my-5" id="map">
        <div class="row py-4">
          <div class="col-lg-4 mb-4 my-lg-auto">
            <h1 class="font-weight-bold mb-3">Come and see us!</h1>
            <p class="mb-4">
              We love our community! We are conveniently located in Avondale,
              PA. Come check us out!
            </p>
            <a
              href="tel:5554280940"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-danger btn-lg"
            >
              Call Us!
            </a>
          </div>

          <div class="col-lg-8">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: '400px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.259486504184!2d-75.78456468499769!3d39.823599479438464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6543d9835478d%3A0xb30d76e9a9fee3b1!2s86%20Pennsylvania%20Ave%2C%20Avondale%2C%20PA%2019311!5e0!3m2!1sen!2sus!4v1592169192430!5m2!1sen!2sus"
                title="Msquare Station"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoColumnMap;
