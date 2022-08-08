import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, Dropdown, NavDropdown, DropdownMenu, DropdownItem,DropdownToggle,Button } from 'reactstrap';
import {  faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faCodeBranch, faEnvelopeOpen, faEnvelopeOpenText, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Newsletter from './newsletter-poseidon';


const Navigation = (props) => {
  return(
  <>
  <Newsletter/>
 <footer className="main-footer footer-poseidon">

  <Container>
  <Row className="">
    <Col xs="12" lg="6" className="footer-menu-col">
      <img className="img-fluid footer-logo mb-3" src="/images/poseidon/poseidon-logo-white.png"/>
      <img className="img-fluid footer-logo frog-footer-logo mb-3" src="/images/poseidon/frog-footer-logo.png"/>
        <div className="text">
          Poseidon Lacrosse was founded in 2021 by Arete Sport to serve the best lacrosse players in the West Metro of Minneapolis. Arete Sport has quickly become one of the top club management companies in the country.
        </div>
        <div className="text frog-pera-text">
          Frog Lacrosse was founded in 2014 by Cory Childs to serve the best lacrosse players in the South Metro of Minneapolis. Frog Lacrosse quickly became one of the top club programs in the Midwest and is the original Arete Sport program.
        </div> 
    </Col>
    <Col xs="12" lg={{size:3}} className="footer-menu-col">
      <div className="h4 footer-title">
      USEFUL LINKS
      </div>
      <div className="footer-line"/>
      <Nav vertical>
        <NavItem><a target="_blank" href="https://goo.gl/maps/qNdHgXUJRQTUP4P1A" className="nav-link"><FontAwesomeIcon icon={faMapMarker} className="font-awesome-icon"/> <img className="frog-footer-icon" src="/images/poseidon/akar-icons_location.svg"/> 2685 Viking Circle Suite 050 Eagan, MN 55121</a></NavItem>
        <NavItem><a href="tel:7633380561" className="nav-link"><FontAwesomeIcon icon={faPhoneAlt} className="font-awesome-icon"/> <img className="frog-footer-icon" src="/images/poseidon/akar-icons_call.svg"/> (763) 338-0561</a></NavItem>
        <NavItem><a href="mailto:info@arete-sport.com" className="nav-link"><FontAwesomeIcon icon={faEnvelopeOpenText} className="font-awesome-icon"/> <img className="frog-footer-icon" src="/images/poseidon/akar-icons_email.svg"/> info@arete-sport.com</a></NavItem>
      </Nav>
    </Col>
    <Col xs="12" lg={{size:3}}   className=" footer-menu-col">
      <div className="h4 footer-title">
        CONTACT US
      </div>
      <div className="footer-line"/>
      <Nav vertical>
        <NavItem><Link href="mailto:james.jacobson@arete-sport.com"><a className="nav-link"><FontAwesomeIcon icon={faCircle} className="font-awesome-icon"/> <img className="frog-footer-icon" src="/images/poseidon/circle-icon.svg"/><span className='contact-text'>james.jacobson@arete-sport.com</span><span className='contact-text frog-contact-text'>Cory@arete-sport.com</span></a></Link></NavItem>
        <NavItem><Link href="/"><a className="nav-link"><FontAwesomeIcon icon={faCircle} className="font-awesome-icon"/> <img className="frog-footer-icon" src="/images/poseidon/circle-icon.svg"/> Arete Sport</a></Link></NavItem>
        <NavItem><a target="_blank" href="https://teamunrl.com/" className="nav-link"><FontAwesomeIcon icon={faCircle} className="font-awesome-icon"/> <img className="frog-footer-icon" src="/images/poseidon/circle-icon.svg"/> Team UNRL</a></NavItem>
      </Nav>
    </Col>
  </Row>

  </Container>
  </footer>
  <div className="bottom-bar">
    <Container>
      <Row className="align-items-center">
        <Col xs="12" lg={{size:6, order:1}} className="py-3 text-center text-lg-start frog-bottom-bar-left">
          <div><p className="copy-text mb-0">Copyright 2022 Arete Sport. All Rights Reserved.</p></div>
        </Col>
        <Col xs="12" lg={{size:6, order:1}} className="py-3 text-center text-lg-end frog-bottom-bar-right">
          Created with ❤️ by <a href="https://apprisedmarketing.com" style={{textDecoration: "none", color:"#ffffff"}} target="_blank">Apprised Marketing</a>
        </Col>
      </Row>
    </Container>
  </div> 
  </>
)}

export default Navigation
