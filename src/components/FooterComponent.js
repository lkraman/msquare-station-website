import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
import logoWhite from '../img/logoWhite.png';

function FooterComponent() {
  return (
    <footer>
      <div class="container">
        <div class="row justify-content-center text-center text-light">
          <div class="col-md-9">
            <img src={logoWhite} alt="" />
            <p>
              It is our pleasure to pump your gas! We offer cases of your
              favorite soda, ice, and kerosene at wholesale prices. The Farmer's
              Market and Cafe Americana's very own, Cafe Express coming soon!
            </p>
          </div>

          <div class="col-md-4">
            <hr class="bg-light" />
            <h5>Contact Info</h5>
            <hr class="bg-light" />
            <p>
              <a href="tel:+16102680768">(610) 268-0768</a>
            </p>
            <p>
              <a href="mailto:+m.olivares@msquarestation.com">
                m.olivares@msquarestation.com
              </a>
            </p>
            <p>86 Pennsylvania Ave</p>
            <p>Avondale, Pa 19311</p>
          </div>

          <div class="col-md-4">
            <hr class="bg-light" />
            <h5>Station Hours</h5>
            <hr class="bg-light" />

            <p>Monday-Sunday:</p>
            <p>6:30am - 8pm</p>
          </div>

          <div class="col-md-4">
            <hr class="bg-light" />
            <h5>Cafe Express Hours</h5>
            <hr class="bg-light" />
            <p>Mon-Fri: Coming Soon</p>

            <p>Saturday: Coming Soon</p>
            <p>Sunday: Coming Soon</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
