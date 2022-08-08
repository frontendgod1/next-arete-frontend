import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, Dropdown, NavDropdown, DropdownMenu, DropdownItem,DropdownToggle,Button } from 'reactstrap';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
  <>
  <Navbar expand="lg" dark className={props.static?"alt-navbar static":"alt-navbar"}>
    <Container className="container">
      <NavbarBrand  className="mr-auto"><Link href="/"><a><img src="/images/logo.png" className="nav-logo"/></a></Link></NavbarBrand >
      <NavbarToggler onClick={toggle}  aria-controls="basic-navbar-nav" />
      <Collapse isOpen={isOpen} navbar id="basic-navbar-nav">
        <Nav navbar className="main-navbar ml-auto">
          <NavItem><Link  href="/"><a className="nav-link">Home</a></Link></NavItem>
          <UncontrolledDropdown nav inNavbar>

          <DropdownToggle nav caret>
          Lacrosse
          </DropdownToggle>
          <DropdownMenu  className="">
            <Link  href="/lacrosse"><a className="dropdown-item">Lacrosse</a></Link>
            <a target="_blank" href="https://aretesport.punchpass.com/classes?jw=undefined&as=client" className="dropdown-item">Training Schedule</a>
            <a href="https://www.arete-sport.com/apply-frog-lacrosse/" className="dropdown-item">Frog Lacrosse</a>
            <a target="_blank" href="https://teamunrl.com" className="dropdown-item">Team UNRL</a>
            <a target="_blank" href="https://www.arete-sport.com/poseidon/" className="dropdown-item">Team Poseidon</a>
            <a href="https://teamunrl.com/showcase/" target="_blank" className="dropdown-item">UNRL Showcase</a>
            <a target="_blank" href="https://form.jotform.com/211935133454149" className="dropdown-item">Team Medusa</a>
            <a href="https://www.arete-sport.com/arete-lacrosse-league/" className="dropdown-item">Arete Lacrosse League</a>

          </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem><Link  href="/lacrosse-sports-management/"><a className="nav-link">Sport Management</a></Link></NavItem>
          <NavItem><Link  href="/arete-apparel/"><a className="nav-link">Arete Apparel</a></Link></NavItem>
          <NavItem><Link  href="/arete-hq/"><a className="nav-link">Arete HQ</a></Link></NavItem>
          <NavItem><Link  href="http://arete-sport-shop.myshopify.com/"><a className="nav-link">Shop</a></Link></NavItem>
          
          <a className='nav-item call-button ' href="tel:7633380561" ><span className="pe-0 nav-link">
              Call (763) 338-0561
          </span></a>
          <NavItem className="contact-button"><Link  href="/contact-us/"><a className='btn btn-dark btn-skewed'><span>
                Contact Us</span></a>
            </Link></NavItem>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
  </>
)}

export default Navigation
