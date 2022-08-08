import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav-frog'
import Footer from '../components/footer-poseidon'
import Clients from '../components/clients/clients'
import Form from '../components/contact/form'
import { Container, Row, Col,Button } from 'reactstrap';
import { Scrollchor, linear }  from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faLongArrowAltDown, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import SeasonFormat from '../components/season-format'


const Home = function(props) {
  
  return (

<div className="poseidon apply-frog-lacrosse">
    <Head>
    <title>Frog Lacrosse Club | Arete Sport</title>
      <meta name="description" content="Frog Lacrosse was founded in 2014 by Cory Childs to serve the best lacrosse players in the South Metro of Minneapolis. Frog Lacrosse quickly became one of the top club programs in the Midwest and is the original Arete Sport program."/>
      <link rel="canonical" href="https://www.arete-sport.com/apply-frog-lacrosse/"/>
      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Arete Sport | Amateur League Management Services | USA"/>
      <meta property="og:description" content="Frog Lacrosse was founded in 2014 by Cory Childs to serve the best lacrosse players in the South Metro of Minneapolis. Frog Lacrosse quickly became one of the top club programs in the Midwest and is the original Arete Sport program."/>
      <meta property="og:url" content="https://www.arete-sport.com/apply-frog-lacrosse/"/>
      <meta property="og:site_name" content="Arete Sport | Amateur Sports League Management | USA"/>
      <meta property="article:publisher" content="https://www.facebook.com/aretelacrosse/"/>
      <meta property="og:image" content="https://www.arete-sport.com/images/arete-sport.jpg"/>
      <link rel="preload" as="image" href="/images/hero-img.png" />

    </Head>
    <Nav  dark={true}/>
    <section className="section  hero-poseidon">
    <img className="poseidon-overlay" src="/images/poseidon/Frog_FrogOnly.png" height="100%"/>
    <div className='frog-poseidon-overlay'></div>
      <Container>
        <Row className="text-center align-items-center">
          <Col lg='12'>
            {/* <p className="title mb-4"><span>POSEIDON</span><br/>LACROSSE CLUB</p> */}
            <img className="frog-lacrosse-text" src="/images/frog-lacrosse-text.png" />
            <div className="buttons apply-now-btn text-center">
              <a href="https://form.jotform.com/93144574719162"  className="px-lg-5 btn btn-primary ">Apply Now</a>
            </div>    
          </Col>
        </Row>
      </Container>
    </section>
    <section className=" section  why-poseidon">

      <Container>
        <Row className="">
          <Col lg={{size:'6', order:1}}>
            <figure className="why-poseidon-images">
              <img className="img-fluid why-poseidon why-poseidon-1" src="/images/poseidon/why-poseidon-1.jpg" />
              <img className="img-fluid why-poseidon why-poseidon-2" src="/images/poseidon/why-poseidon-2.jpg" />
              </figure>

          </Col>
          <Col lg={{size:'6', order:2}} className="py-3 ">
            <h1 className="section-title why-frog-title"><span>Why Frog?</span></h1>
            <ul className="poseidon-list">
              <li>Frog Lacrosse was founded in 2014 by Cory Childs to serve the best lacrosse players in the South Metro of Minneapolis. Frog Lacrosse quickly became one of the top club programs in the Midwest and is the original Arete Sport program.</li>
              <li>Our staff is focused on providing the best club lacrosse experience and lacrosse training opportunities for West Metro families.</li>
              <li>Frog is an official club of the Arete Lacrosse League. The first league in MN that provides local games against other club organizations. Players will be evaluated for state and national level opportunities for the most passionate lacrosse players.</li>
              <li>Over the year, Frog players will:
                <ul>
                  <li>Compete in 18+ games</li>
                  <li>Attending a minimum of two local tournaments. </li>
                  <li>Gain access to the Arete Network: One of the largest online communities for lacrosse families across the country.</li>
                  <li>Gain access to invite-only events for Arete partner clubs</li>
                </ul>
              </li>
            </ul>

        </Col>
        </Row>
      </Container>
    </section>


    <section className="section dark poseidon-teams" id="teams">
      <Container>

        <Row className="justify-content-center text-center  ">
          <Col lg='12'>
            <h2 className="section-title our-teames-title">OUR TEAMS</h2>
            <div className="team-names team-names-list">
              <span className="team-name">8U</span>
              <span className="team-name">10U</span>
              <span className="team-name">12U</span>
              <span className="team-name">14U</span>
              <span className="team-name">HS</span>
            </div>
              <img className="img-fluid poseidon-timeline d-none d-lg-block" src="/images/poseidon/our-teams-timeline.png" />
              <img className="img-fluid poseidon-timeline d-lg-none" src="/images/poseidon/frog-poseidon-timeline-mobile.png" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section  poseidon-season-format">
      <Container>

        <Row className="justify-content-center text-center mb-5">
          <Col lg='12'>
            <p className="section-title"><span>SEASON FORMAT</span></p>
            
          </Col>
        </Row>
        <SeasonFormat/>
      </Container>
    </section>
    <section className=" section poseidon-training  poseidon-training">
      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:1}}>
            <div className="rounded-lg py-4 px-4 px-lg-5 text-center mb-4 mb-lg-0 calendar-box">
              <a href="https://froglacrosse.leagueapps.com/calendar"><img className="img-fluid poseidon-training-img" src="/images/poseidon/calendar.svg" /></a>
            </div>
          </Col>
          <Col lg={{size:'6', order:1}} className="frog-training-right">
            <h1 className="section-title arete-font mb-5"><span>Frog Training</span></h1>
            <p className="text mb-5">Frog Lacrosse players have access to a number of additional training opportunities. Our experienced staff coach a wide range of clinics at every position and age. Click below to register now! </p>
            <a href="https://froglacrosse.leagueapps.com/classes"  className="px-lg-5 btn btn-primary ">Register Now</a>
        </Col>
        </Row>
      </Container>
        <img className="frog-mini-img" src="/images/poseidon/frog-mini-img.png" />
      </section>
    <section className="section dark arete-network">
      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'3', order:1}}>
              <img className="img-fluid arete-network-img" src="/images/poseidon/arete-offerings.jpg" />
          </Col>
          <Col lg={{size:'9', order:2}} className="arete-network-text">
            <h1 className="section-title arete-font">Arete Network</h1>
            <p className="text">The Arete Network is a community of like-minded lacrosse people working together to help shape the future of club lacrosse. This is accomplished by bringing lacrosse families, club directors, high school coaches, and college coaches to one platform for real-time feedback, advice, and support.</p>
            <a href="https://aretesport.punchpass.com/classes?jw=undefined&as=client"  className="px-lg-5 btn btn-primary ">Arete Training Schedule</a>
        </Col>
        </Row>
      </Container>
      </section>
{/* 
    <section className="section  poseidon-blog">
      <Container>

        <Row className="justify-content-center text-center mb-5">
          <Col lg='12'>
            <p className="section-title">OUR BLOG</p>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
          <div className="blog-post mb-4">
              <div className="image-box"><img className="img img-fluid" src="/images/poseidon/blog-1.jpg" width="512" height="379"/></div>
              <div className="text-box p-3">
                <div className='h5 text-body'>
                Lorem Ipsum dec tec de wah ma de dec lorem ipsum
                </div>
                <a href="#">Learn More <FontAwesomeIcon className="me-2" icon={faLongArrowAltRight} /></a>
              </div>
            </div>
          </Col>
          <Col lg="4">
          <div className="blog-post mb-4">
              <div className="image-box"><img className="img img-fluid" src="/images/poseidon/blog-2.jpg" width="512" height="379"/></div>
              <div className="text-box p-3">
                <div className='h5 text-body'>
                Lorem Ipsum dec tec de wah ma de dec lorem ipsum
                </div>
                <a href="#">Learn More <FontAwesomeIcon className="me-2" icon={faLongArrowAltRight} /></a>
              </div>
            </div>
          </Col>
          <Col lg="4">
          <div className="blog-post mb-4">
              <div className="image-box"><img className="img img-fluid" src="/images/poseidon/blog-3.jpg" width="512" height="379"/></div>
              <div className="text-box p-3">
                <div className='h5 text-body'>
                Lorem Ipsum dec tec de wah ma de dec lorem ipsum
                </div>
                <a href="#">Learn More <FontAwesomeIcon className="me-2" icon={faLongArrowAltRight} /></a>
              </div>
            </div>
          </Col>
       </Row>
      </Container>
    </section> */}
    <section className="section  arete-partner-club">
      <img class="arete-partner-club-frog" src="/images/poseidon/arete-partner-club-frog.png"/>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg='6'>
            <p className="section-title">Arete Partner Club</p>
          </Col>
        </Row>
        <div className="clients-slider">
          <Clients/>
        </div>
      </Container>
    </section>
  
 { /*   <section className="location" id="locations">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93574.92971598938!2d-78.77025334179686!3d42.86827319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30bec7757876d%3A0x4426d5e1cc11787d!2sAndale%20Mexican%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2s!4v1626365594612!5m2!1sen!2s" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
    </section>*/}
    <Footer/>
  </div>
)
  }
export default Home
