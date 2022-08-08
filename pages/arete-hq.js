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
  const tcoAdvantages = [
    {
      id: 0,
      title: "Junior Development",
      icon: "/images/icons/junior-development.svg"
    },
    {
      id: 1,
      title: "Team Training​",
      icon: "/images/icons/team-training.svg"
    },
    {
      id: 2,
      title: "Small Group Training",
      icon: "/images/icons/small-group-training.svg"
    },
    {
      id: 3,
      title: "Sport Nutrition​",
      icon: "/images/icons/sport-nutrition​.svg"
    },
    {
      id: 4,
      title: "Return to Sport",
      icon: "/images/icons/return-to-sport.svg"
    },
  ]
  return (
  <div>
    <Head>
    <title>Arete HQ | Sports Management | Arete Sport</title>
    <meta name="description" content="Arete HQ is located at TCO Stadium and is optimized to provide our players with the best possible resources. Although we are nationwide, we have local roots."/>
    <link rel="canonical" href="https://www.arete-sport.com/arete-hq/"/>
    <meta property="og:locale" content="en_US"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="Arete HQ | Sports Management | Arete Sport"/>
    <meta property="og:description" content="Arete HQ is located at TCO Stadium and is optimized to provide our players with the best possible resources. Although we are nationwide, we have local roots."/>
    <meta property="og:url" content="https://www.arete-sport.com/arete-hq/"/>
    <meta property="og:site_name" content="Arete Sport | Amateur Sports League Management | USA"/>
    <meta property="article:publisher" content="https://www.facebook.com/aretelacrosse/"/>
    <meta property="article:modified_time" content="2021-08-04T19:51:25+00:00"/>
    <meta property="og:image" content="https://www.arete-sport.com/wp-content/uploads/2021/08/AreteHQ.png"/>
    <meta property="og:image:width" content="4360"/>
    <meta property="og:image:height" content="466"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:label1" content="Est. reading time"/>
    <meta name="twitter:data1" content="4 minutes"/>

    </Head>
    <Nav static={true}/>
    <section className=" section arete-hq">
      <img className="img-fluid bg-image " src="/images/player-bg-left.png" />

      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:2}}>
            <figure className="image-with-effect"><img className="img-fluid arete-hq-img" src="/images/arete-hq-img.jpg" /></figure>

          </Col>
          <Col lg={{size:'6', order:1}} className="py-3 pe-lg-4">
            <h1 className="section-title">ARETE HQ</h1>
            <p className="text">Arete Sport Inc. is located at Viking Lakes in Eagan, MN. Viking Lakes is a 200-acre, mixed-use master development, with a mission formed around a healthy, active lifestyle, and home to the Minnesota Vikings, Twin Cities Orthopedics, TCO Stadium and the Omni Viking Lakes Hotel.</p>
            <a href="https://app.punchpass.com/hub?as=client" target="_blank" className="dark-icon-text-box mb-4">
              <div className="icon-box"><img className="icon" src="/images/lacrosse-white.svg" width="50" height="50"/></div>
              <div className="icon-text-box">
                <div className='title'>
                  LACROSSE TRAINING
                </div>
                <div className='text'>
                  Our indoor training spot offers lacrosse small group training and lessons. Contact us to learn more about our memberships at our Headquarters.
                </div>
              </div>
            </a>
            <div className="dark-icon-text-box mb-4">
              <div className="icon-box"><img className="icon" src="/images/retail-white.svg" width="50" height="50"/></div>
              <div className="icon-text-box">
                <div className='title'>
                  RETAIL
                </div>
                <div className='text'>
                  Our indoor training spot offers lacrosse small group training and lessons. Contact us to learn more about our memberships at our Headquarters.
                </div>
              </div>
            </div>

         </Col>
        </Row>
      </Container>
    </section>
    <section className=" section dark sport-management">

      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:1}}>
            <figure className="image-with-effect reverse"><img className="img-fluid arete-turf-space-img" src="/images/arete-turf-space.jpg" /></figure>

          </Col>
          <Col lg={{size:'6', order:2}} className="py-3 ">
            <h2 className="section-title">ARETE TURF SPACE</h2>
            <p className="text">The Arete staff runs year-round clinics and programming for girls and boys. Check out our lacrosse training section to learn more about upcoming opportunities.</p>
                     
          <a target="_blank" href="https://app.punchpass.com/hub?as=client" className="btn btn-primary ">Punchpass App</a>

        </Col>
        </Row>
      </Container>
    </section>

    <section className="section  arete-headquarters">
      <Container>

        <Row className="justify-content-center text-center mb-5">
          <Col lg='6'>
            <p className="section-sub-title">VIKING LAKES</p>
            <h3 className="section-title">ARETE HEADQUARTERS</h3>
              <p className="text">Join us at Viking Lakes for lacrosse training, stringing services, retail, and events.</p>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <div className="image-icon-block mb-4">
              <div className="inner">
                <div className="image-box"><img className="img img-fluid" src="/images/arete-hq-lacrosse.jpg" width="500" height="375"/></div>
                <div className="icon-box">
                  <img className="icon" src="/images/lacrosse-white.svg" width="42" height="42"/>
                </div>
              </div>
              <p className='h4 text-primary'>
                LACROSSE TRAINING
              </p>
              <p className=' text'>
                Memberships and classes available daily. Check our lacrosse training tab for more information.
              </p>
            </div>
          </Col>
          <Col lg="4">
            <div className="image-icon-block mb-4">
              <div className="inner">
                <div className="image-box"><img className="img img-fluid" src="/images/arete-hq-retail.jpg" width="500" height="375"/></div>
                <div className="icon-box">
                  <img className="icon" src="/images/retail-white.svg" width="42" height="42"/>
                </div>
              </div>
              <p className='h4 text-primary'>
                RETAIL
              </p>
              <p className=' text'>
              Check out our apparel and lacrosse collections. Or stop in to learn about our team apparel program.
              </p>
            </div>
          </Col>
          <Col lg="4">
            <div className="image-icon-block mb-4">
              <div className="inner">
                <div className="image-box"><img className="img img-fluid" src="/images/arete-hq-events.jpg" width="500" height="375"/></div>
                <div className="icon-box">
                  <img className="icon" src="/images/events-white.svg" width="42" height="42"/>
                </div>
              </div>
              <p className='h4 text-primary'>
              EVENTS
              </p>
              <p className=' text'>
              Local camps to national events. We offer events all year at Viking Lakes Campus.
              </p>
            </div>
          </Col>
       </Row>
      </Container>
    </section>
  
    <section className="section  arete-headquarters">
      <Container>

        <Row className="justify-content-center text-center mb-5">
          <Col lg='6'>
            <p className="section-sub-title">OUR PARTNER</p>
            <p className="section-title">Training Haus & TCO Rehabilitation Access</p>
              <p className="text">Arete Sport is a proud partner with Training HAUS. Which is conveniently located in the same building as our Arete HQ.</p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mb-5">
          {
            tcoAdvantages.map((elem) => <Col key={elem.id} lg="6">
            <div className="light-icon-box mb-4">
              <div className="icon-box"><img className="icon" src={elem.icon} width="35" height="35"/></div>
              <div className="icon-text-box">
                <div className='title'>{elem.title}</div>
              </div>
            </div>
          </Col>)
          }
          
        </Row>

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
            <p className="section-title text-center">Contact Us</p>
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
