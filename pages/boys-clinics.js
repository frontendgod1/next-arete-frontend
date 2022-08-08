import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav-dark'
import Footer from '../components/footer'
import Clients from '../components/clients/clients'
import Form from '../components/contact/form'
import { Container, Row, Col,Button } from 'reactstrap';
import { Scrollchor, linear }  from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Home = function(props) {
  
  return (
  <div>
    <Head>
      <title>Boys Lacrosse Clinics | Sports Management | Arete Sport</title>
      <meta name="description" content=""/>
      <link rel="canonical" href="https://www.arete-sport.com/boys-clinics/"/>
      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Boys Lacrosse Clinics | Sports Management | Arete Sport"/>
      <meta property="og:description" content=""/>
      <meta property="og:url" content="https://www.arete-sport.com/boys-clinics/"/>
      <meta property="og:site_name" content="Arete Sport | Amateur Sports League Management | USA"/>
      <meta property="article:publisher" content="https://www.facebook.com/aretelacrosse/"/>
      <meta property="og:image" content="https://www.arete-sport.com/images/arete-sport.jpg"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:label1" content="Est. reading time"/>
      <meta name="twitter:data1" content="18 minutes"/>
{/*       <meta name="robots" content="noindex,nofollow"/>
 */}      <link rel="preload" as="image" href="/images/hero-img.png" />

    </Head>
    <Nav static={true} dark={true}/>
    <section className="section hero" id="hero-clinics">
      <Container>
        <Row className="align-items-center">
          <Col lg='6'>
            <p className="title mb-0">ARETE ACADEMY</p>
            <p className="title mb-3 text-primary">BOYS LACROSSE CLINICS</p>
            <p className="text mb-5">The Arete Lacrosse training model is focused on breaking down important technical abilities that cover three main categories: Stick Skills, Athletic Movement, and IQ Development.</p>
            <div className="buttons text-center">
            <Link href="#"><a className="btn btn-light btn-skewed text-uppercase"><span>Learn More</span></a></Link>
            <Link href="#"><a className="btn btn-primary btn-skewed text-uppercase"><span>Sign Up</span></a></Link>
            </div>    
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section dark your-benefits" id="your-benefits">
      <Container>
        <Row className="justify-content-center my-lg-4">
          <Col lg='1'>
            <div className="benefits-text">YOUR BENEFITS</div>
          </Col>
          <Col lg='11' className='mt-3'>
            <Row>
              <Col lg="4" className="mb-3">
                <div className="dark-image-text-box ">
                    <div className="image-box ">
                      <img className="img img-fluid" src="/images/Stick-Skills.jpg" width="700" height="386"/>
                    </div>
                    <div className="text-box">
                      <div className='h3 text-white mb-3'>
                      Stick Skills
                      </div>
                      <div className='text'>
                      Our staff focuses on breaking down each movement and teaching players proper technique in-regards to passing, shooting, and stick protection. Even though we believe in developing creative lacrosse players, we believe all players need to have strong fundamentals in regard to overhand passing/shooting and stick protection.
                      </div>
                    </div>
                </div>
              </Col>
              <Col lg="4" className="mb-3">
                <div className="dark-image-text-box ">
                    <div className="image-box ">
                      <img className="img img-fluid" src="/images/Athletic-Movement.jpg" width="700" height="386"/>
                    </div>
                    <div className="text-box">
                      <div className='h3 text-white mb-3'>
                      Athletic Movement
                      </div>
                      <div className='text'>
                      Our athletic movement is focused on defensive approaches, off/on-ball footwork, dodging footwork, and shooting footwork. Our focus in the facility is around lacrosse-specific movements while our partner Training HAUS, is located conveniently above our HQ that is purely focused on athletic development. We do our best to compliment sessions with Training HAUS so players can stack clinics together.
                      </div>
                    </div>
                </div>
              </Col>
              <Col lg="4" className="mb-3">
                <div className="dark-image-text-box ">
                    <div className="image-box ">
                      <img className="img img-fluid" src="/images/Lacrosse-IQ.jpg" width="700" height="386"/>
                    </div>
                    <div className="text-box">
                      <div className='h3 text-white mb-3'>
                      Lacrosse IQ
                      </div>
                      <div className='text'>
                      Even though our players are mostly focused on technical skills, our staff does an excellent job explaining "the why" of each movement and skill progression. Our clinics may focus on one category above or mix of two or three. We use progression drills to breakdown and compartmentalize movements so players can see the progression and the importance of each aspect of the movement/technique.
                      </div>
                    </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section  arete-apparel">
      <Container>

        <Row className="justify-content-center text-center mb-5">
          <Col lg='12'>
{/*             <p className="section-sub-title">Team</p>
 */}            <p className="section-title">Meet Our Pro’s</p>
            <Row className="justify-content-center ">
              <Col lg='7'>
              <p className="text">The Arete Lacrosse training model is focused on breaking down important technical abilities that cover three main categories: Stick Skills, Athletic Movement, and IQ Development.</p>
                </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <div className="single-team mb-4">
              <div className="image-box mb-3">
                <img className="img img-fluid" src="/images/team-member-1.jpg" width="512" height="326"/>
              </div>
              <div className="text-box text-center">
                <div className='h3 text-uppercase text-primary'>
                  Name Surname
                </div>
                <div className='h5 text-uppercase'>
                Degisnation
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="single-team mb-4">
              <div className="image-box mb-3">
                <img className="img img-fluid" src="/images/team-member-2.jpg" width="512" height="326"/>
              </div>
              <div className="text-box text-center">
                <div className='h3 text-uppercase text-primary'>
                  Name Surname
                </div>
                <div className='h5 text-uppercase'>
                Degisnation
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="single-team mb-4">
              <div className="image-box mb-3">
                <img className="img img-fluid" src="/images/team-member-3.jpg" width="512" height="326"/>
              </div>
              <div className="text-box text-center">
                <div className='h3 text-uppercase text-primary'>
                  Name Surname
                </div>
                <div className='h5 text-uppercase'>
                Degisnation
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="single-team mb-4">
              <div className="image-box mb-3">
                <img className="img img-fluid" src="/images/team-member-4.jpg" width="512" height="326"/>
              </div>
              <div className="text-box text-center">
                <div className='h3 text-uppercase text-primary'>
                  Name Surname
                </div>
                <div className='h5 text-uppercase'>
                Degisnation
                </div>
              </div>
            </div>
          </Col>
       </Row>
      </Container>
    </section>
    <section className="section enroll-now" id="enroll-now">
      <Container className="py-0">
        <Row className="align-items-center">
          <Col lg={{size: 6}} className='py-5'>
            <p className="h2 text-primary">Boys Lacrosse Clinics</p>
            <p className="h1 mb-4">Enroll Now</p>
            <Link href="#"><a className="btn btn-primary btn-skewed text-uppercase"><span>Sign Up</span></a></Link>

          </Col>
          <Col lg={{size: 5, offset: 1}}>
            <div className=" pt-3 ">
              <img className="img-fluid " src="/images/hero-img.png" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>

    <section className="section who-we-are" id="who-we-are">
      <Container className=" ">

        <Row className="align-items-center">
          <Col lg='4'>
            <div className="mb-3">
              <img className="img-fluid " src="/images/best-coaching.jpg" />
            </div>
          </Col>
          <Col lg={{size: 7, offset: 1}}>
            <p className="section-title">The Best <span className="text-primary">Coaching Service</span></p>
            <p className="text">Our athletic movement is focused on defensive approaches, off/on-ball footwork, dodging footwork, and shooting footwork. Our focus in the facility is around lacrosse-specific movements while our partner Training HAUS, is located conveniently above our HQ that is purely focused on athletic development. We do our best to compliment sessions with Training HAUS so players can stack clinics together.</p>

          </Col>
        </Row>
      </Container>
    </section>

{/*     <section className="section  contact-us" id="contact">
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
            <p className="section-title text-center">REQUEST A QUOTE</p>
            <Form/>
          </Col>
        </Row>
      </Container>
    </section>
 */}  
 { /*   <section className="location" id="locations">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93574.92971598938!2d-78.77025334179686!3d42.86827319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30bec7757876d%3A0x4426d5e1cc11787d!2sAndale%20Mexican%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2s!4v1626365594612!5m2!1sen!2s" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
    </section>*/}
    <Footer/>
  </div>
)
  }
export default Home
