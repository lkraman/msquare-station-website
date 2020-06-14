import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../img/logo.png';

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="#home">
          {' '}
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#map">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    // <div id="navigation-sticky">
    //   <nav className="navbar bg-light navbar-light navbar-expand-lg sticky-top">
    //     <div className="container">
    //       <a href="/" className="navbar-brand">
    //         <img src={logo} alt="logo" />
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarResponsive"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarResponsive">
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //             <a href="/" className="nav-link active">
    //               Home
    //             </a>
    //           </li>

    //           {/* <li className="nav-item">
    //             <a href="" className="nav-link">
    //               About
    //             </a>
    //           </li> */}

    //           <li className="nav-item">
    //             <a href="#services" className="nav-link">
    //               Services
    //             </a>
    //           </li>

    //           <li className="nav-item">
    //             <a href="#map" className="nav-link">
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default Navigation;
