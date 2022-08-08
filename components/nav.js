import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, Dropdown, NavDropdown, DropdownMenu, DropdownItem,DropdownToggle,Button } from 'reactstrap';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
  <>
  <Navbar expand="lg" dark className={props.static?"static":""}>
    <Container className="container">
      <NavbarBrand  className="mr-auto"><Link href="/"><a><img src="/images/logo.png" className="nav-logo"/></a></Link></NavbarBrand >
      <NavbarToggler onClick={toggle}  aria-controls="basic-navbar-nav" />
      <Collapse isOpen={isOpen} navbar id="basic-navbar-nav">
        <Nav navbar className="main-navbar ml-auto">
          <NavItem><Link  href="/"><a className="nav-link">HOME</a></Link></NavItem>
          <UncontrolledDropdown nav inNavbar>

          <DropdownToggle nav caret>
            LACROSSE
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
          <NavItem><Link  href="/lacrosse-sports-management/"><a className="nav-link">SPORT MANAGEMENT</a></Link></NavItem>
          <NavItem><Link  href="/arete-apparel/"><a className="nav-link">ARETE APPAREL</a></Link></NavItem>
          <NavItem><Link  href="/arete-hq/"><a className="nav-link">ARETE HQ</a></Link></NavItem>
          <NavItem><Link  href="http://arete-sport-shop.myshopify.com/"><a className="nav-link">SHOP</a></Link></NavItem>
          <NavItem><Link  href="/contact-us/"><a className="nav-link">CONTACT US</a></Link></NavItem>
          <li><a href="tel:7633380561" className="pe-0 nav-link">
            <button className="btn btn-dark">
              <div className="text">
                <div className="number">CALL (763) 338-0561</div>
              </div>
            </button>
          </a></li>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
  </>
)}

export default Navigation
