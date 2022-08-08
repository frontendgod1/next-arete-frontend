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
      <NavbarBrand  className="mr-auto"><Link href="/"><a><img src="/images/poseidon/frog-lacrosse-logo.png" className="nav-logo frog-nav-logo"/></a></Link></NavbarBrand >
      <NavbarToggler onClick={toggle}  aria-controls="basic-navbar-nav" />
      <Collapse isOpen={isOpen} navbar id="basic-navbar-nav">
        <Nav navbar className="main-navbar ml-auto">
          <NavItem><Link  href="https://froglacrosse.leagueapps.com/clubteams"><a className="nav-link">Club Teams</a></Link></NavItem>
          <NavItem><Link  href="https://froglacrosse.leagueapps.com/camps"><a className="nav-link">Camps</a></Link></NavItem>
          <NavItem><Link  href="https://froglacrosse.leagueapps.com/classes"><a className="nav-link">Classes</a></Link></NavItem>
          <NavItem><Link  href="https://froglacrosse.leagueapps.com/calendar"><a className="nav-link">Calendar</a></Link></NavItem>
          <NavItem><Link  href="https://froglacrosse.leagueapps.com/blog"><a className="nav-link">Blog</a></Link></NavItem>
          <NavItem><Link  href="/"><a className="nav-link">Arete Home</a></Link></NavItem>

          <li><a href="https://froglacrosse.leagueapps.com/blog" className="nav-link">
            <button className="px-5 py-2 btn btn-outline-primary">
            Blog
            </button>
          </a></li>
          <li><a href="https://form.jotform.com/93144574719162" className="pe-0 nav-link">
            <button className="px-4 py-2 btn btn-primary">
              Apply Now
            </button>
          </a></li>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
  </>
)}

export default Navigation
