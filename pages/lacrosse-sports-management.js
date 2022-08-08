import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Clients from '../components/clients/clients'
import { Container, Row, Col,Button } from 'reactstrap';
import { Scrollchor, linear }  from 'react-scrollchor';
import Form from '../components/contact/form'

const Home = function(props) {
  return (
  <div>
    <Head>
      <title>Lacrosse Sports Management  | Arete Sport</title>
{/*       <meta name="description" content=""/>
 */}
    </Head>
    <Nav static={true}/>
    <section className=" section sport-management">
      <img className="img-fluid bg-image " src="/images/player-bg-left.png" />

      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:2}}>
            <figure className="image-with-effect "><img className="img-fluid sport-management-img" src="/images/sport-management.jpg" /></figure>
          </Col>
          <Col lg={{size:'6', order:1}} className="py-3 pe-lg-4">
            <p className="section-title">OUR APPROACH TO <h1 className="section-title d-inline m-0">SPORT MANAGEMENT</h1></p>
            <p className="text">Sport management should be exciting. Our approach is a mix of Charlie Munger and streetwear culture. We believe every company should be mission-based + collaborative. This starts with working with those in our industry and finding ways to solve problems and be useful to the amateur sport industry.</p>
            <Scrollchor to="more" animate={{ offset: 0, duration: 1000, easing: linear }}  className="btn btn-outline-primary bg-white">Learn More</Scrollchor>

         </Col>
        </Row>
      </Container>
    </section>
    <section className="py-4 bg-light  ">
      <Container fluid>
        <Clients/>
      </Container>
    </section>
    <section className=" section sport-management" id="more">

      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:1}}>
            <figure className="image-with-effect reverse"><img className="img-fluid arete-director-membership-img" src="/images/arete-director-membership.jpg" /></figure>
          </Col>
          <Col lg={{size:'6', order:2}} className="py-3 ">
            <h2 className="section-title">ARETE DIRECTOR MEMBERSHIP</h2>
            <p className="text">At Arete, we believe in supporting those that do what we do. The youth sport industry is exploding, but educational opportunities are few and far between. Our goal is to bring a new approach through material that goes over strategy, management, marketing, and customer service/success.</p>
         </Col>
        </Row>
      </Container>
    </section>
    <section className=" section seminars bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={{size:'6', order:2}}>
            <figure className="image-with-effect"><img className="img-fluid arete-seminars-img" src="/images/arete-seminars.jpg" /></figure>
          </Col>
          <Col lg={{size:'6', order:1}} className="py-3 ">
            <h3 className="section-title">SEMINARS & CONFERENCES</h3>
            <p className="text">Our seminars and conferences will be announced in 2021. Our staff is currently putting together our first slate of offerings.</p>
         </Col>
        </Row>
      </Container>
    </section>
    <section className="section dark collaborations">
      <Container>
        <img className="img-fluid player player-left" src="/images/player-left.png" />
        <img className="img-fluid player player-right" src="/images/player-right.png" />

        <Row className="justify-content-center text-center mb-5">
          <Col lg='8'>
            <p className="section-title">COLLABORATIONS</p>
            <p className="text">Our staff currently collaborates with companies across North America. if you are interested in collaborating on a project, please email us at info@arete-sport.com. We partner on events, camps, teams, apparel, coach/director educational opportunities, and more!</p>
            <Link href="mailto:info@arete-sport.com"><a className="btn btn-primary ">Email Us</a></Link>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <div className="dark-icon-title mb-4">
              <div className="icon-box"><img className="icon" src="/images/camps.svg" width="68" height="68"/></div>
              <div className="h4">CAMPS</div>
            </div>
          </Col>
          <Col lg="3">
            <div className="dark-icon-title mb-4">
              <div className="icon-box"><img className="icon" src="/images/teams.svg" width="68" height="68"/></div>
              <div className="h4">TEAMS</div>
            </div>
          </Col>
          <Col lg="3">
            <a href="mailto:apparel@arete-sport.com" className="dark-icon-title mb-4">
              <div className="icon-box"><img className="icon" src="/images/apparel.svg" width="68" height="68"/></div>
              <div className="h4">APPAREL</div>
            </a>
          </Col>
          <Col lg="3">
            <div className="dark-icon-title mb-4">
              <div className="icon-box"><img className="icon" src="/images/education.svg" width="68" height="68"/></div>
              <div className="h4">EDUCATIONAL OPPORTUNITIES</div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
   <Footer/>
  </div>
)
  }
export default Home
