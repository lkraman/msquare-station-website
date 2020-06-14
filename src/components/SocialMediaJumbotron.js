import React from 'react';

function SocialMediaJumbotron() {
  return (
    <div id="social-media-sticky">
      <div className="jumbotron sticky-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="d-none d-xl-block col-xl-6 pt-1">
              <h3>Connect with us:</h3>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 pt-1">
              <ul className="social">
                <li>
                  <a
                    href="tel:5554280940"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-phone"
                      aria-hidden="true"
                      style={{ color: 'black' }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:some@email.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                      style={{ color: 'black' }}
                    ></i>
                  </a>
                </li>

                <li>
                  <a href="#map">
                    <i
                      className="fa fa-map-marker"
                      aria-hidden="true"
                      style={{ color: 'black' }}
                    ></i>
                  </a>
                </li>

                {/* <li>
									<a href="" target="_blank"><i className="fab fa-facebook" aria-hidden="true" style={{color: "black"}}"></i></a>
								</li>  */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaJumbotron;
