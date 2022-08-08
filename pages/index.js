import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
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
    <title>Arete Sport | Amateur League Management Services | USA</title>
      <meta name="description" content="Arete Sports offers Amatuer league management services for local youth lacrosse associations. We provide AYLA, MCLA, MSLL, and HSLL leagues with the tools they need to succeed in their communities. Whether you are looking to start a new association or improve an existing one, we have"/>
      <link rel="canonical" href="https://www.arete-sport.com/"/>
      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Arete Sport | Amateur League Management Services | USA"/>
      <meta property="og:description" content="Arete Sports offers Amatuer league management services for local youth lacrosse associations. We provide AYLA, MCLA, MSLL, and HSLL leagues with the tools they need to succeed in their communities. Whether you are looking to start a new association or improve an existing one, we have"/>
      <meta property="og:url" content="https://www.arete-sport.com/"/>
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
    <section className="section hero">
      <Container>
        <Row className="align-items-center">
          <Col lg='6'>
            <p className="title mb-3">SPORT MANAGEMENT<br/>RE-IMAGINED</p>
            <div className="buttons text-center">
            <Scrollchor to="about" animate={{ offset: 0, duration: 500, easing: linear }}  className="btn btn-dark text-uppercase">LEARN MORE</Scrollchor>

            <Link href="https://aretesport.punchpass.com/classes?jw=undefined&as=client"><a className="btn btn-light text-uppercase">Sign Up For Clinics</a></Link>
            </div>    
          </Col>
          <Col lg='6'>
            <img className="img-fluid hero-img w-100" src="/images/hero-img.png" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="section  arete-main">
      <Container>

        <Row className="justify-content-center text-center mb-5">
          <Col lg='12'>
            <p className="section-sub-title">CHECK OUT OUR</p>
            <p className="section-title">SPORT MANAGEMENT SERVICES</p>
{/*             <Row className="justify-content-center ">
              <Col lg='6'>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum consectetur laoreet. Etiam id elit sit amet nunc accumsan dapibus. </p>
                </Col>
            </Row>
 */}          </Col>
        </Row>
        <Row>
          <Col md="6" lg="4" className="mb-3 mb-md-5">
            <Link href="https://aretesport.punchpass.com/classes?jw=undefined&as=client"><a className="image-text-block">
              <div className="image-box">
                <img className="img" src="/images/clinics.jpg" width="512" height="512"/>
                {/* <div className="inner-box">
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur to adipiscing elit et aenean condimentum.</div>
                </div> */}
              </div>
              <div className="text-box">
                <div className='h5'>
                  LEARN MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-3" />
                </div>
              </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" className="mb-3 mb-md-5">
            <Link href="https://www.arete-sport.com/apply-frog-lacrosse//"><a className="image-text-block">
              <div className="image-box">
                <img className="img" src="/images/frog-lacrosse.jpg" width="512" height="512"/>
                {/* <div className="inner-box">
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur to adipiscing elit et aenean condimentum.</div>
                </div> */}
              </div>
              <div className="text-box">
                <div className='h5'>
                  LEARN MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-3" />
                </div>
              </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" className="mb-3 mb-md-5">
            <Link href="https://teamunrl.com/teams/"><a className="image-text-block">
              <div className="image-box">
                <img className="img" src="/images/unrl-minnesota.jpg" width="512" height="512"/>
                {/* <div className="inner-box">
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur to adipiscing elit et aenean condimentum.</div>
                </div> */}
              </div>
              <div className="text-box">
                <div className='h5'>
                  LEARN MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-3" />
                </div>
              </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" className="mb-3 mb-md-5">
            <Link href="https://teamunrl.com/"><a className="image-text-block">
              <div className="image-box">
                <img className="img" src="/images/unrl-national.jpg" width="512" height="512"/>
                {/* <div className="inner-box">
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur to adipiscing elit et aenean condimentum.</div>
                </div> */}
              </div>
              <div className="text-box">
                <div className='h5'>
                  LEARN MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-3" />
                </div>
              </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" className="mb-3 mb-md-5">
            <Link href="https://www.froglax.com/teams/girls-elite"><a className="image-text-block">
              <div className="image-box">
                <img className="img" src="/images/girls-teams.jpg" width="512" height="512"/>
                {/* <div className="inner-box">
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur to adipiscing elit et aenean condimentum.</div>
                </div> */}
              </div>
              <div className="text-box">
                <div className='h5'>
                  LEARN MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-3" />
                </div>
              </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" className="mb-3 mb-md-5">
            <Link href="/lacrosse/#benefits"><a className="image-text-block">
              <div className="image-box">
                <img className="img" src="/images/camps-and-evaluations.jpg" width="512" height="512"/>
               {/*  <div className="inner-box">
                  <div className='text'>Lorem ipsum dolor sit amet, consectetur to adipiscing elit et aenean condimentum.</div>
                </div> */}
              </div>
              <div className="text-box">
                <div className='h5'>
                  LEARN MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-3" />
                </div>
              </div>
              </a>
            </Link>
          </Col>
       </Row>
      </Container>
    </section>

    <section className="section dark what-we-do" id="about">
      <Container>
        <img className="img-fluid player player-left" src="/images/player-left.png" />
        <img className="img-fluid player player-right" src="/images/player-right.png" />

        <Row className="justify-content-center text-center mb-5">
          <Col lg='6'>
            <h2 className="section-sub-title text-uppercase">Amateur League Management Services</h2>
            <p className="section-title">WHAT WE DO</p>
            <p className="text">From coaching lacrosse players to selling team apparel to sport directors. Our staff is always working on new projects and collaborations.</p>
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="mb-4">
            <Link href="/lacrosse">
              <a className="dark-icon-text-box ">
                <div className="icon-box"><img className="icon" src="/images/lacrosse-white.svg" width="50" height="50"/></div>
                <div className="icon-text-box">
                  <div className='title'>
                    LACROSSE
                  </div>
                  <div className='text'>
                  From individual lessons to national showcases. We offer a suite of opportunities for lacrosse players across North America.
                  </div>
                </div>
              </a>
            </Link>
          </Col>
          <Col lg="6" className="mb-4">
            <Link href="/lacrosse-sports-management/">
              <a className="dark-icon-text-box ">
                <div className="icon-box"><img className="icon" src="/images/sport-management-white.svg" width="50" height="50"/></div>
                <div className="icon-text-box">
                  <div className='title'>
                    SPORT MANAGEMENT
                  </div>
                  <div className='text'>
                    We partner with club directors and association leaders across the country. We run evaluations, manage club programs, event planning/execution, and seminars for aspiring and current sport directors.
                  </div>
                </div>
              </a>
            </Link>
          </Col>
          <Col lg="6" className="mb-4">
            <Link href="/arete-hq">
              <a className="dark-icon-text-box ">
                <div className="icon-box"><img className="icon" src="/images/retail-white.svg" width="50" height="50"/></div>
                <div className="icon-text-box">
                  <div className='title'>
                    RETAIL
                  </div>
                  <div className='text'>
                    Check out apparel, lacrosse stringing, and lacrosse training at our Arete HQ at Viking Lakes in Eagan, MN.
                  </div>
                </div>
              </a>
            </Link>
          </Col>
          <Col lg="6" className="mb-4">
            <Link href="/arete-hq">
              <a className="dark-icon-text-box ">
                <div className="icon-box"><img className="icon" src="/images/team-sales-white.svg" width="50" height="50"/></div>
                <div className="icon-text-box">
                  <div className='title'>
                    TEAM SALES
                  </div>
                  <div className='text'>
                    We offer custom online stores, bulk orders, and and collections on our website for our biggest team accounts. With our team and get your team setup with the best quality product in the country.
                  </div>
                </div>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
    <section className=" bg-primary sport-management-small">
      <Container className="py-4">
        <Row className="align-items-center">
          <Col lg="4">
            <img className="img-fluid sport-management-small-img" src="/images/sport-management.jpg" />
          </Col>
          <Col lg='6'>
            <p className="h1 text-white">SPORT MANAGEMENT</p>
            <p className="text text-white">Sport management should be exciting. Our approach is a mix of Charlie Munger and streetwear culture.</p>
          </Col>
          <Col lg='2'>
            <Link href="/lacrosse-sports-management/"><a className="btn btn-outline-light w-100">Read More</a></Link>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="section  our-services">
      <img className="img-fluid bg-image bg-image-right" src="/images/player-bg-left.png" />
      <Container>

        <Row className="justify-content-center text-center mb-5">
          <Col lg='12'>
            <p className="section-sub-title">YOUR SERVICES</p>
            <p className="section-title">ALL-IN-ONE SPORT MANAGEMENT</p>
            <Row className="justify-content-center ">
              <Col lg='6'>
              <p className="text">Whether you're a director, coach, parent, or player, your success is our goal.</p>
                </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
          <Link href="/contact-us"><a className="image-text-block mb-4">
              <div className="image-box"><img className="img" src="/images/director.jpg" width="500" height="500"/></div>
              <div className="text-box">
                <div className='sub-title'>
                  SIGN UP
                </div>
                <div className='h2'>
                DIRECTOR
                </div>
              </div>
              </a></Link>
          </Col>
          <Col lg="4">
            <Link href="/contact-us"><a className="image-text-block mb-4">
              <div className="image-box"><img className="img" src="/images/coach.jpg" width="500" height="500"/></div>
              <div className="text-box">
                <div className='sub-title'>
                  SIGN UP
                </div>
                <div className='h2'>
                COACH
                </div>
              </div>
            </a></Link>
          </Col>
          <Col lg="4">
            <Link href="/contact-us"><a className="image-text-block mb-4">
              <div className="image-box"><img className="img" src="/images/lacrosse-player.jpg" width="500" height="500"/></div>
              <div className="text-box">
                <div className='sub-title'>
                  SIGN UP
                </div>
                <div className='h2'>
                LACROSSE PLAYER
                </div>
              </div>
              </a></Link>
          </Col>
       </Row>
      </Container>
    </section>
    <section className="section dark our-partners">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg='6'>
            <p className="section-title">OUR PARTNERS</p>
          </Col>
        </Row>
        <div className="mb-4">
        <Clients/>
        </div>
        <div className="arete-hq">
          <Row className="align-items-center">
            <Col className="p-lg-0" lg={{size:6, order:2}}>
              <img className="img-fluid arete-hq-img" src="/images/arete-hq.jpg" />
            </Col>
            <Col  lg={{size:6, order:1}}>
              <div className="left-part">
              <p className="section-title">ARETE HQ</p>
              <p className="text">Arete Sport is located in Eagan, MN at Viking Lakes. Viking Lakes is a 200-acre, mixed-use master development, with a mission formed around a healthy, active lifestyle, and home to the Minnesota Vikings, Twin Cities Orthopedics, TCO Stadium, and the Omni Viking Lakes Hotel.</p>
              <Link href="/arete-hq"><a className="btn btn-outline-primary">Read More</a></Link>
              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </section>
    <section className="section  arete-apparel">
      <Container>

        <Row className="justify-content-center text-center mb-5">
          <Col lg='12'>
            <p className="section-sub-title">SHOP</p>
            <p className="section-title">ARETE APPAREL</p>
            <Row className="justify-content-center ">
              <Col lg='6'>
              <p className="text">Buy from our current collaborations on our shop page or reach out for a custom order.</p>
                </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
          <Link href="/arete-apparel"><a className="image-text-block mb-4">
              <div className="image-box"><img className="img" src="/images/bulk-order.jpg" width="512" height="326"/></div>
              <div className="text-box">
                <div className='h4'>
                  BULK ORDER
                </div>
              </div>
              </a></Link>
          </Col>
          <Col lg="4">
            <Link href="/arete-apparel"><a className="image-text-block mb-4">
              <div className="image-box"><img className="img" src="/images/team-stores.jpg" width="512" height="326"/></div>
              <div className="text-box">
                <div className='h4'>
                  TEAM STORES
                </div>
              </div>
            </a></Link>
          </Col>
          <Col lg="4">
            <a href="http://arete-sport-shop.myshopify.com/" target="_blank" className="image-text-block mb-4">
              <div className="image-box"><img className="img" src="/images/online-shop.jpg" width="512" height="326"/></div>
              <div className="text-box">
                <div className='h4'>
                  ONLINE SHOP
                </div>
              </div>
            </a>
          </Col>
       </Row>
      </Container>
    </section>
    <section className="section who-we-are" id="who-we-are">
      <Container className=" pt-0">>

        <Row className="align-items-center">
          <Col lg='6'>
            <div className="sport-management-homepage">
              <img className="img-fluid sport-management-img" src="/images/arete-sport-management.png" />
              <div className="logo-block logo-block-1">
                <img src="/images/clients/froglax-2.png" className="img-fluid client-logo-img"/>
              </div>
              <div className="logo-block logo-block-2">
                <img src="/images/clients/team-unrl.png" className="img-fluid client-logo-img"/>
              </div>
              <div className="logo-block logo-block-3">
                <img src="/images/clients/mdx.png" className="img-fluid client-logo-img"/>
              </div>
              <div className="logo-block logo-block-4">
                <img src="/images/clients/team-medusa.png" className="img-fluid client-logo-img"/>
              </div>
              <div className="logo-block logo-block-5">
                <img src="/images/clients/blue-dogs.png" className="img-fluid client-logo-img"/>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <h1 className="section-sub-title text-uppercase">Arete Sport</h1>
            <p className="section-title">FOUNDED IN 2018</p>
            <p className="text">Arete Sport was founded in 2018 with a focus on providing opportunities for club directors and local youth lacrosse associations. It has grown into a full management company that offers B2B and DTC opportunities for the amateur sport industry. With over 13 years of experience in the amateur sport industry, our staff comes from diverse backgrounds and offer unique strengths.</p>
            <Row>
              <Col lg="6">
                <Link href="/lacrosse"><a className="dark-icon-box mb-4">
                  <img className="icon" src="/images/lacrosse.svg" width="38" height="38"/>
                  <div className="icon-text">LACROSSE MANAGEMENT</div>
                </a></Link>
              </Col>
              <Col lg="6">
                <Link href="/lacrosse-sports-management/"><a className="dark-icon-box  mb-4">
                  <img className="icon" src="/images/sport-management.svg" width="38" height="38"/>
                  <div className="icon-text">SPORT MANAGEMENT</div>
                </a></Link>
              </Col>
            </Row>
            <Scrollchor to="about" animate={{ offset: 0, duration: 500, easing: linear }}  className="btn btn-outline-primary">READ MORE</Scrollchor>

          </Col>
        </Row>
      </Container>
    </section>

    <section className="section  contact-us" id="contact">
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
  
 { /*   <section className="location" id="locations">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93574.92971598938!2d-78.77025334179686!3d42.86827319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30bec7757876d%3A0x4426d5e1cc11787d!2sAndale%20Mexican%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2s!4v1626365594612!5m2!1sen!2s" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
    </section>*/}
    <Footer/>
  </div>
)
  }
export default Home
