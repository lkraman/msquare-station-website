import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from '../img/carousel/first.jpg';
import second from '../img/carousel/second.jpg';
import third from '../img/carousel/third.jpg';

function MainCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="First slide" />
          <Carousel.Caption>
            <div className="col-md-9 col-lg-7 bg-white text-left text-dark">
              <h3>We Pump Your Gas</h3>

              <div className="border-top border-dark my-1 w-75"></div>

              <p className="lead">
                Keep your hands clean! It is our pleasure to fill your gas at no
                additional cost to you!
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={second} alt="Third slide" />

          <Carousel.Caption>
            <div className="col-md-9 col-lg-7 bg-white text-left text-dark">
              <h3>Cafe Express</h3>
              <div className="border-top border-dark my-1 w-75"></div>{' '}
              <p className="lead">
                COMING SOON! Farmer's Market and Cafe Americana's Cafe
                Express...food to go!
              </p>{' '}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={third} alt="Third slide" />

          <Carousel.Caption>
            <div className="col-md-9 col-lg-7 bg-white text-left text-dark">
              <h3>Propane</h3>
              <div className="border-top border-dark my-1 w-75"></div>{' '}
              <p className="lead">
                Whether it's for your next BBQ or your commercial business,
                we've got you covered!{' '}
              </p>{' '}
              {/* <a href="" className="btn btn-primary btn-md">Learn more</a> */}{' '}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>

    // <div
    //   id="carousel"
    //   className="carousel slide"
    //   data-ride="carousel"
    //   data-interval="6500"
    // >
    //   <ol className="carousel-indicators">
    //     <li data-target="#carousel" data-slide-to="0" className="active"></li>
    //     <li data-target="#carousel" data-slide-to="1"></li>
    //     <li data-target="#carousel" data-slide-to="2"></li>
    //   </ol>

    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img className="w-100" src={first} alt="First slide" />
    //       <div className="carousel-caption">
    //         <div className="container">
    //           <div className="row">
    //             <div className="col-md-9 col-lg-7 bg-white text-left text-dark">
    //               <h3>We Pump Your Gas</h3>

    //               <div className="border-top border-dark my-1 w-75"></div>

    //               <p className="lead">
    //                 Keep your hands clean! It is our pleasure to fill your gas
    //                 at no additional cost to you!
    //               </p>
    //               {/* <a href="" className="btn btn-primary btn-md">Learn more</a>  */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="carousel-item">
    //       <img className="w-100" src={second} alt="Second slide" />
    //       <div className="carousel-caption">
    //         <div className="container">
    //           <div className="row">
    //             <div className="col-md-9 col-lg-7 bg-white text-left text-dark">
    //               <h3>Cafe Express</h3>

    //               <div className="border-top border-dark my-1 w-75"></div>

    //               <p className="lead">
    //                 COMING SOON! Farmer's Market and Cafe Americana's Cafe
    //                 Express...food to go!
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img className="w-100" src={third} alt="Third slide" />
    //       <div className="carousel-caption">
    //         <div className="container">
    //           <div className="row">
    //             <div className="col-md-9 col-lg-7 bg-white text-left text-dark">
    //               <h3>Save $$$</h3>

    //               <div className="border-top border-dark my-1 w-75"></div>

    //               <p className="lead">
    //                 We offer soda and kerosene at wholesale prices!
    //               </p>
    //               {/* <a href="" className="btn btn-primary btn-md">Learn more</a> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <a
    //       className="carousel-control-prev"
    //       href="#carouselExampleIndicators"
    //       role="button"
    //       data-slide="prev"
    //     >
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a
    //       className="carousel-control-next"
    //       href="#carouselExampleIndicators"
    //       role="button"
    //       data-slide="next"
    //     >
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Next</span>
    //     </a>  */}
    // </div>
  );
}

export default MainCarousel;
