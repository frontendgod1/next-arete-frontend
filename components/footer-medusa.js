import Link from "next/link";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  NavDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faCodeBranch,
  faEnvelopeOpen,
  faEnvelopeOpenText,
  faMapMarker,
  faPhoneAlt,
  faMap,
  faMapMarked,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Newsletter from "./newsletter-medusa";

const Navigation = (props) => {
  return (
    <>
      <Newsletter />
      <footer className="main-footer footer-medusa">
        <Container>
          <Row className="">
            <Col xs="12" lg="5" className="footer-menu-col">
              <img
                className="img-fluid footer-logo mb-3"
                src="/images/medusa/logo-footer.png"
              />
              <div className="text">
                Medusa Lacrosse was founded in 2021 by Arete Sport to serve as
                the best lacrosse players in non-traditional lacrosse areas
                around the country. Arete Sport has quickly become one of the
                top club management companies in the country.
              </div>
            </Col>
            <Col xs="12" lg={{ size: 4 }} className="footer-menu-col mt-auto">
              <div className="h4 md-section-title">USEFUL LINKS</div>
              <Nav vertical>
                <NavItem>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/qNdHgXUJRQTUP4P1A"
                    className="nav-link fw-light"
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="font-awesome-icon text-white"
                    />{" "}
                    <img
                      className="frog-footer-icon"
                      src="/images/poseidon/akar-icons_location.svg"
                    />{" "}
                    2685 VIKING CIRCLE SUITE 050 EAGAN, MN 55121
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    href="tel:7633380561"
                    className="nav-link fw-light text-lowercase"
                  >
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="font-awesome-icon text-white"
                    />{" "}
                    <img
                      className="frog-footer-icon"
                      src="/images/poseidon/akar-icons_call.svg"
                    />{" "}
                    (763) 338-0561
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    href="mailto:info@arete-sport.com"
                    className="nav-link fw-light text-lowercase"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                      className="font-awesome-icon text-white"
                    />{" "}
                    <img
                      className="frog-footer-icon"
                      src="/images/poseidon/akar-icons_email.svg"
                    />{" "}
                    info@arete-sport.com
                  </a>
                </NavItem>
              </Nav>
            </Col>
            <Col xs="12" lg={{ size: 3 }} className=" footer-menu-col mt-auto">
              <div className="h4 md-section-title">CONTACT US</div>
              <Nav vertical>
                <NavItem>
                  <Link href="mailto:james.jacobson@arete-sport.com">
                    <a className="nav-link fw-light">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="font-awesome-icon text-white"
                      />{" "}
                      <img
                        className="frog-footer-icon"
                        src="/images/poseidon/circle-icon.svg"
                      />
                      <span className="contact-text text-lowercase">
                        bailey@arete-sport.com
                      </span>
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/">
                    <a className="nav-link fw-light  text-capitalize">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="font-awesome-icon text-white"
                      />{" "}
                      <img
                        className="frog-footer-icon"
                        src="/images/poseidon/circle-icon.svg"
                      />{" "}
                      Arete Sport
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <a
                    target="_blank"
                    href="https://teamunrl.com/"
                    className="nav-link fw-light text-normal"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="font-awesome-icon text-white"
                    />{" "}
                    <img
                      className="frog-footer-icon"
                      src="/images/poseidon/circle-icon.svg"
                    />{" "}
                    Team UNRL
                  </a>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="bottom-bar">
        <Container>
          <Row className="align-items-center">
            <Col xs="12" className="py-3 text-center frog-bottom-bar-left">
              <div>
                <p className="copy-text mb-0">
                  Copyright 2022 Arete Sport. All Rights Reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Navigation;
