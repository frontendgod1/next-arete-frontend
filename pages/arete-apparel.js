import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Clients from '../components/clients/client-numbers'
import { Container, Row, Col,Button } from 'reactstrap';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Form from '../components/contact/form'

const Home = function(props) {
  return (
  <div><SimpleReactLightbox>
    <Head>
    <title>Arete Apparel | Sports Management | Arete Sport</title>
    <meta name="description" content="Arete Sport offers Apparel for sports teams across the USA. With an inhouse team of designers and manufacturing. We excel at creating the best uniforms for your team."/>
    <link rel="canonical" href="https://www.arete-sport.com/arete-apparel/"/>
    <meta property="og:locale" content="en_US"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="Arete Apparel | Sports Management | Arete Sport"/>
    <meta property="og:description" content="Arete Sport offers Apparel for sports teams across the USA. With an inhouse team of designers and manufacturing. We excel at creating the best uniforms for your team."/>
    <meta property="og:url" content="https://www.arete-sport.com/arete-apparel/"/>
    <meta property="og:site_name" content="Arete Sport | Amateur Sports League Management | USA"/>
    <meta property="article:publisher" content="https://www.facebook.com/aretelacrosse/"/>
    <meta property="article:modified_time" content="2021-05-10T11:31:43+00:00"/>
    <meta property="og:image" content="https://www.arete-sport.com/wp-content/uploads/2021/04/Website_Apparel-01-1024x819.jpg"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:label1" content="Est. reading time"/>
    <meta name="twitter:data1" content="9 minutes"/>

    </Head>
    <Nav />
    <section className=" section apparel-hero">

    <Container>
      <Row className="justify-content-center align-items-center text-center">
        <Col lg={{size:'8'}} className="py-3 ">
          <h1 className="section-title">ARETE APPAREL</h1>
          <p className="text">The Arete Apparel division is focused on creating long term relationships with sport leaders. Our wholistic approach to sport management begins with offering the best quality clothing and decoration for their staff and athletes.</p>
      </Col>
      </Row>
    </Container>
    </section>

    <section className=" section arete-clothing">

      <Container fluid>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:2}} className="px-md-0" >
            <figure className="image-with-effect "><img className="img-fluid arete-clothing-img" src="/images/arete-clothing.jpg" /></figure>

          </Col>
          <Col lg={{size:'6', order:1}} className="py-3 left-container-margin">
            <h2 className="section-title">CLOTHING</h2>
            <p className="text">Arete Sport is an official dealer of UNRL co. Our apparel division is focused on working with sport leaders who want to provide the best quality apparel for their teams, associations, and club programs.</p>
            <h3 className="section-title mt-5">ORDERING PROCESS</h3>
            <p className="text">Our staff offers bulk orders, spirit stores (1-2 week open dates), and private collections on our shopify store for our partner programs. If you are interested in our apparel offerings, please email us at info@arete-sport.com.</p>
            <Link href="mailto:apparel@arete-sport.com"><a className="btn btn-outline-primary bg-white">E-MAIL US</a></Link>
         </Col>
        </Row>
      </Container>
    </section>
    <section className="gallery">
      <SRLWrapper>
        <div className="arete-gallery">
            <a href="/images/arete-apparel-1-full.jpg">
              <img src="/images/arete-apparel-1.jpg" className="gallery-single" alt="Arete Apparel" />
            </a>
            <a href="/images/arete-apparel-2-full.jpg">
              <img src="/images/arete-apparel-2.jpg" className="gallery-single" alt="Arete Apparel" />
            </a>
            <a href="/images/arete-apparel-3-full.jpg">
              <img src="/images/arete-apparel-3.jpg" className="gallery-single" alt="Arete Apparel" />
            </a>
            <a href="/images/arete-apparel-4-full.jpg">
              <img src="/images/arete-apparel-4.jpg" className="gallery-single" alt="Arete Apparel" />
            </a>
        </div>
      </SRLWrapper>
    </section>
    <Clients/>
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
            <p className="section-title text-center">Contact Us</p>
            <Form/>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer/>
    </SimpleReactLightbox>
  </div>
)
  }
export default Home
