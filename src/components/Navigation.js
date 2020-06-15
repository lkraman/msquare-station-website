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
  );
}

export default Navigation;
