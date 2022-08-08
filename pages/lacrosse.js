import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Clients from '../components/clients/clients'
import { Container, Row, Col,Button } from 'reactstrap';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { Scrollchor, linear }  from 'react-scrollchor';
import Form from '../components/contact/form'

const Home = function(props) {
  return (
  <div>
    <Head>
      <title>Lacrosse Network Membership - Arete Sport | Amateur Sports League Management | USA</title>
      <meta name="description" content="Lacrosse is our main focus at Arete Sport but we also provide services for all sports. Get in touch today to learn more!"/>
      <link rel="canonical" href="https://www.arete-sport.com/lacrosse/"/>
      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="article"/>
      <meta property="og:title" content="Lacrosse | Arete Sport"/>
      <meta property="og:description" content="Lacrosse is our main focus at Arete Sport but we also provide services for all sports. Get in touch today to learn more!"/>
      <meta property="og:url" content="https://www.arete-sport.com/lacrosse/"/>
      <meta property="og:site_name" content="Arete Sport | Amateur Sports League Management | USA"/>
      <meta property="article:publisher" content="https://www.facebook.com/aretelacrosse/"/>
      <meta property="og:image" content="https://www.arete-sport.com/wp-content/uploads/2021/02/team-unrl-2.jpg"/>
      <meta property="og:image:width" content="780"/>
      <meta property="og:image:height" content="520"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:label1" content="Est. reading time"/>
      <meta name="twitter:data1" content="6 minutes"/>

    </Head>
    <Nav static={true}/>
    <section className=" section arete-hq">
      <img className="img-fluid bg-image " src="/images/player-bg-left-2.png" />

      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:2}}>
            <figure className="image-with-effect "><img className="img-fluid lacrosse-network-img" src="/images/lacrosse-network.jpg" /></figure>

          </Col>
          <Col lg={{size:'6', order:1}} className="py-3 pe-lg-4">
            <h1 className="section-title">LACROSSE NETWORK MEMBERSHIP</h1>
            <p className="text">The Arete Network is for lacrosse families that take part in our verified and/or affiliate programs. Our membership focuses on recruiting guidance, development, community, and anything that helps serve the Arete community. Please see our affiliate and verified offerings to gain access to the membership.</p>
            <Scrollchor to="more" animate={{ offset: 0, duration: 500, easing: linear }}  className="btn btn-outline-primary bg-white">Learn More</Scrollchor>

         </Col>
        </Row>
      </Container>
    </section>
 
    <section className=" section dark sport-management bg-primary" id="more">

      <Container fluid className="pe-lg-3">
        <Row className="align-items-center">
          <Col lg={{size:'6', order:1}} className="px-0 pe-lg-4">
            <img className="img-fluid lacrosse-league-img" src="/images/lacrosse-league.jpg" />

          </Col>
          <Col lg={{size:'6', order:2}} className="ps-lg-4 py-3 right-container-margin ">
            <h2 className="section-title">ARETE LACROSSE LEAGUE</h2>
            <p className="text">The Arete Lacrosse League is a unique fall league that focuses on bringing the best players together for games each week. Players will go through a combine before the league begins so the teams can be split as evenly as possible. Our staff highlights the top performers and hires professional videographers to film each game.</p>
            <p className="text">
              <FontAwesomeIcon icon={faCheckDouble} className="me-2" /> Receive high quality film locally against the best competition</p>
              <p className="text"> <FontAwesomeIcon icon={faCheckDouble} className="me-2" /> Seek Feedback and insights in our Arete Network</p>
              <p className="text">  <FontAwesomeIcon icon={faCheckDouble} className="me-2" /> Utilize our Arete Recruiting & Development Services with our league to optimize your recruiting strategy
            </p>

         </Col>
        </Row>
      </Container>
    </section>
    <section className=" section seminars bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:1}} className="text-center">
            <img className="img-fluid arete-camp-img" src="/images/arete-camp.png" />
          </Col>
          <Col lg={{size:'6', order:2}} className="py-3 ">
            <h3 className="section-title">ARETE CAMP</h3>
            <p className="text">The Arete Camp is designed to help provide more structure and insight in the recruiting process. Our staff has poured years into this model and we are excited to officially kick it off in 2021!</p>
            <Scrollchor to="benefits" animate={{ offset: 0, duration: 500, easing: linear }}  className="btn btn-outline-primary bg-white">Learn More</Scrollchor>

         </Col>
        </Row>
      </Container>
    </section>
    <section className="section  collaborations" id="benefits">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg='8'>
            <h4 className="section-title">WHY YOU SHOULD ATTEND AN ARETE CAMP</h4>
            <img className="img-fluid" src="/images/why-arete-camp.png" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="py-4 bg-light  ">
      <Container fluid>
        <Clients/>
      </Container>
    </section>
    <section className="section  contact-us">
      <Container>
        <Row className="justify-content-center  mb-5">
        <Col lg='5' className="bg-primary contacts-left">
              <a href="https://goo.gl/maps/qNdHgXUJRQTUP4P1A" className="contact-info">
                <img className="icon" src="/images/address.svg" width="33" height="33"/>
                <p className="h3">OUR ADDRESS:</p>
                <p className="text">2685 Viking Circle Suite 050 Eagan, MN 55121</p>
              </a>
              <a href="tel:7633380561" className="contact-info">
                <img className="icon" src="/images/phone.svg" width="33" height="33"/>
                <p className="h3">CALL US:</p>
                <p className="text">Main Office Line: (763) 338-0561<br/>Retail: ext. 101<br/>Apparel: ext. 102<br/>General: ext. 103<br/>Club Programming: ext. 106</p>
              </a>
              <a href="mailto:info@arete-sport.com" className="contact-info">
                <img className="icon" src="/images/mail.svg" width="33" height="33"/>
                <p className="h3">MAIL US:</p>
                <p className="text">info@arete-sport.com</p>
              </a>
            </Col>
          <Col lg='7' className="bg-white contacts-right">
            <p className="section-title text-center">GET A QUOTE</p>
            <Form/>
          </Col>
        </Row>
      </Container>
    </section>
   <Footer/>
  </div>
)
  }
export default Home
