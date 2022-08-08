import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, Dropdown, NavDropdown, DropdownMenu, DropdownItem,DropdownToggle,Button } from 'reactstrap';
import {  faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faCodeBranch, faEnvelopeOpen, faEnvelopeOpenText, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Newsletter from './newsletter';


const Navigation = (props) => {
  return(
  <>
  <Newsletter/>
 <footer className="main-footer">

  <Container>
  <Row className="align-items-center">
    <Col xs="12" lg="3" className="p-0 mb-4">
      <div className="footer-elements">
        <div className="main">
          <img className="img-fluid footer-logo" src="/images/logo.png"/>
          <p className="text">Arete Sport is a full management company that offers B2B and DTC opportunities for the amateur sport industry</p>
        </div>
        <a href="tel:7633380561" className="phone-box">
          <div className="text">
            <div className="call-text">CALL US</div>
            <div className="h3 number">(763) 338-0561</div>
          </div>
          <div className="icon-box"><FontAwesomeIcon icon={faPhoneAlt} /></div>
        </a>
      </div>
    </Col>
    <Col xs="12" lg={{size:4, offset: 1}} className="mt-3 mt-lg-0 p-3 footer-menu-col">
      <div className="h4 footer-title">
      USEFUL LINKS
      </div>
      <div className="footer-line"/>
      <Nav vertical>

        <NavItem><a target="_blank" href="https://goo.gl/maps/qNdHgXUJRQTUP4P1A" className="nav-link"><FontAwesomeIcon icon={faMapMarker} /> 2685 Viking Circle Suite 050 Eagan, MN 55121</a></NavItem>
        <NavItem><a href="tel:7633380561" className="nav-link"><FontAwesomeIcon icon={faPhoneAlt} /> (763) 338-0561</a></NavItem>
        <NavItem><a href="mailto:info@arete-sport.com" className="nav-link"><FontAwesomeIcon icon={faEnvelopeOpenText} /> info@arete-sport.com</a></NavItem>
      </Nav>
    </Col>
    <Col xs="12" lg={{size:3, offset: 1}}   className="mt-3 mt-lg-0 footer-menu-col">
      <div className="h4 footer-title">
        CONTACT US
      </div>
      <div className="footer-line"/>
      <Nav vertical>
        <NavItem><Link  href="/contact"><a className="nav-link"><FontAwesomeIcon icon={faCircle} /> Contact Us</a></Link></NavItem>
        <NavItem><a target="_blank" href="http://www.froglacrosse.biz/" className="nav-link"><FontAwesomeIcon icon={faCircle} /> Frog Lacrosse</a></NavItem>
        <NavItem><a target="_blank" href="https://teamunrl.com/" className="nav-link"><FontAwesomeIcon icon={faCircle} /> Team UNRL</a></NavItem>
      </Nav>
    </Col>
  </Row>

  </Container>
  </footer>
  <div className="bottom-bar">
    <Container>
    <Row className="align-items-center">
      <Col xs="12" lg={{size:4, order:1}} className="left">
        <div className="social-icons">
          <a href="https://www.instagram.com/arete_lacrosse/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com/ExcellenceinSports" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
        </div>


      </Col>
      <Col xs="12" lg={{size:4, order:2}} className="center text-center">
        <div><p className="copy-text">Copyright 2022 Arete Sport. All Rights Reserved.</p></div>

      </Col>
      <Col xs="12" lg={{size:4, order:3}} className="right">
      Created with ❤️ by <a href="https://apprisedmarketing.com" style={{textDecoration: "none", color:"#ffffff"}} target="_blank">Apprised Marketing</a>
     </Col>

    </Row>
    </Container>
  </div> 
  </>
)}

export default Navigation
