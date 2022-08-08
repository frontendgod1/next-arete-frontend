import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Clients from '../components/clients/clients'
import { Container, Row, Col,Button } from 'reactstrap';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Scrollchor, linear }  from 'react-scrollchor';
import Form from '../components/contact/form'

const Home = function(props) {
  return (
  <div>
    <Head>
    <title>Contact Us - Arete Sport | Amateur League Management Services | USA</title>
    <meta name="description" content="Contact us today if you have any questions, concerns or comments about our products and services, please feel free to contact us. We will respond as soon as possible!"/>
    <link rel="canonical" href="https://www.arete-sport.com/contact-us/"/>
    <meta property="og:locale" content="en_US"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="Contact Us | Arete Sport"/>
    <meta property="og:description" content="Contact us today if you have any questions, concerns or comments about our products and services, please feel free to contact us. We will respond as soon as possible!"/>
    <meta property="og:url" content="https://www.arete-sport.com/contact-us/"/>
    <meta property="og:site_name" content="Arete Sport | Amateur Sports League Management | USA"/>
    <meta property="article:publisher" content="https://www.facebook.com/aretelacrosse/"/>
    <meta property="article:modified_time" content="2021-08-04T20:48:35+00:00"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:label1" content="Est. reading time"/>
    <meta name="twitter:data1" content="1 minute"/>

    </Head>
    <Nav />
 
    <section className="section  contact-us contact-us-page">
      <Container>
        <Row className="justify-content-center  mb-lg-5">
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
            <p className="section-title text-center">Contact Us</p>
            <Form/>
          </Col>
        </Row>
      </Container>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.0884450636083!2d-93.11920829091639!3d44.858693581034494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62d34544e9411%3A0x1165d3f99d807705!2sArete%20Sport!5e0!3m2!1sen!2s!4v1628883373163!5m2!1sen!2s" width="600" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

    </section>
  
    <Footer/>
  </div>
)
  }
export default Home
