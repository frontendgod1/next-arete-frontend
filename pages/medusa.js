import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav-medusa";
import Footer from "../components/footer-medusa";
import Teams from "../components/clients/teams";
import { Container, Row, Col, Button } from "reactstrap";
import SeasonFormat from "../components/season-format-medusa";
const Medusa = function (props) {
  return (
    <div className="medusa">
      <Head>
        <title>Medusa Lacrosse Club | Arete Sport</title>
        <meta
          name="description"
          content="Medusa Lacrosse was founded in 2021 by Arete Sport to serve the best lacrosse players in the West Metro of Minneapolis. Arete Sport has quickly become one of the top club management companies in the country."
        />
        <link rel="canonical" href="https://www.arete-sport.com/medusa/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Arete Sport | Amateur League Management Services | USA"
        />
        <meta
          property="og:description"
          content="Medusa Lacrosse was founded in 2021 by Arete Sport to serve the best lacrosse players in the West Metro of Minneapolis. Arete Sport has quickly become one of the top club management companies in the country."
        />
        <meta property="og:url" content="https://www.arete-sport.com/medusa/" />
        <meta
          property="og:site_name"
          content="Arete Sport | Amateur Sports League Management | USA"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/aretelacrosse/"
        />
        <meta
          property="og:image"
          content="https://www.arete-sport.com/images/arete-sport.jpg"
        />
        <link rel="preload" as="image" href="/images/hero-img.png" />
      </Head>
      <Nav dark={true} />
      <section className="section  hero-medusa">
        <Container>
          <Row className="text-center align-items-center mx-lg-5 mx-0 px-lg-5 px-0">
            <Col lg="6" xs="12" className="mt--5">
              {/* <p className="title mb-4">
                <span>Medusa</span>
                <br />
                LACROSSE CLUB
              </p> */}
              <div className="buttons  text-center mt-n5">
                <img src="/images/medusa/herotext.png" className="w-100" />
                <a
                  href="https://form.jotform.com/211935133454149"
                  className="px-lg-5 btn btn-primary "
                >
                  Apply Now
                </a>
              </div>
            </Col>
            <Col lg="6" xs="12">
              {/* <p className="title mb-4">
                <span>Medusa</span>
                <br />
                LACROSSE CLUB
              </p> */}
              {/* <div className="buttons  text-center">
                <a
                  href="https://api.leadconnectorhq.com/widget/form/I1E21K4vFrZxna9HvtaD"
                  className="px-lg-5 btn btn-primary "
                >
                  Apply Now
                </a>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className=" section  why-medusa">
        <Container>
          <Row className="mt">
            <Col lg={{ size: "6", order: 1 }}>
              <figure className="why-medusa-images">
                <img
                  className="img-flui why-medusa why-medusa-1"
                  src="/images/medusa/why-medusa1.png"
                />
                <img
                  className="img-flui why-medusa why-medusa-2"
                  src="/images/medusa/why-medusa2.png"
                />
              </figure>
            </Col>
            <Col
              lg={{ size: "6", order: 2 }}
              className="mb-md-0 mb-5 pb-lg-3 pb-sm-5 pb-0"
            >
              <div className="d-flex flex-md-row flex-column  justify-content-between align-items-center mb-3">
                <h2 className="md-section-title text-primary text-uppercase mb-0">
                  <span>Why Medusa national?</span>
                </h2>
                <a
                  href="https://form.jotform.com/211935133454149"
                  className="pe-md-0 pe nav-link w-auto"
                >
                  <button className="w-100 px-4 py-2 btn btn-primary my-auto">
                    Apply Now
                  </button>
                </a>
              </div>
              Team Medusa is comprised of the best girls lacrosse from
              non-traditional markets that compete in some of the best
              tournaments in the country.
              <br />
              Medusa is an official girls program of Arete Sport, a management
              company that offers some of the recognizable club offerings across
              the country. We strongly believe in providing the best experience
              for players and families on and off the field. Our coaches and
              staff are here to help and educate families along the way
              <ul className="medusa-list">
                <li>
                  <strong>Our origin : </strong>
                  <br />
                  We at Medusa believe that elite players should have every
                  opportunity to play with teammates that match their passion
                  and ability. Our national model not only provides this but
                  also supports multi-sport athletes who have different busy
                  schedules. With Medusa, there is no yearly commitment which
                  makes us the perfect addition to your local lacrosse
                  programming.
                </li>
                <li>
                  <strong>How it Works : </strong>
                  <br />
                  Our staff is focused on hand-picking talented individuals that
                  can compete with the nation's best. It's important for our
                  staff to select players that are focused on playing at the
                  next level.
                </li>
                <li>
                  <strong>Application Process : </strong>
                  <br />
                  <ol>
                    <li>
                      Interested players will submit a recruitment application.
                    </li>
                    <li>
                      Our staff will review your film and get back to you with
                      our assessment.
                    </li>{" "}
                    <li>
                      If we believe a player can compete at the national level,
                      our staff will provide additional information about
                      upcoming opportunities.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Practice : </strong>
                  <br />
                  Our national program does not offer traditional practices due
                  to the various locations of our players. The day before a
                  tournament, we will hold a team practice for the girls to get
                  to know each other, our coaches, and our systems. Medusa
                  players will receive a play and motion slide deck prior to the
                  tournament. So practice time can be spent walking through it.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section dark medusa-teams" id="teams">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg="12">
              <h2 className="md-section-title mb-4 text-white">OUR TEAMS</h2>
              <div className="team-names mb-5">
                <span className="team-name">2029</span>
                <span className="team-name">2028</span>
                <span className="team-name">2027</span>
                <span className="team-name border-end border-md-1 border-end-0">
                  2026
                </span>{" "}
                <br className="d-sm-none d-block" />
                <span className="team-name border-end-md-0 border-end">
                  2025
                </span>
                <br className="d-sm-block d-none" />
                <span className="team-name">2024</span>
                <span className="team-name">2023</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section  medusa-season-format">
        <Container>
          <Row className="justify-content-center text-center mb-5 mt-5">
            <Col lg="12">
              <h2 className="md-section-title text-white">
                <span>Our Tournaments</span>
              </h2>
            </Col>
          </Row>
          <SeasonFormat />
          <Row className="align-items-center mt- md-calendar">
            <Col md={{ size: "6", order: 1 }}>
              <div className="shadow md-rounded bg-white py-4 px-0 px-lg-5 text-center mb-4 mb-lg-0 mx-">
                <a href="https://medusa.leagueapps.com/calendar">
                  <img
                    className="img-fluid medusa-training-img"
                    src="/images/poseidon/calendar.svg"
                  />
                </a>
              </div>
            </Col>
            <Col md={{ size: "6", order: 2 }} className="">
              <div className=" px-lg-5 px-md-3 px-0">
                <h2 className="md-section-title arete-font mb-5 text-white d-md-block d-none">
                  <span>Medusa Events</span>
                </h2>
                <h2 className="md-section-title arete-font mb-5 text-danger  d-md-none d-block">
                  <span>Medusa Events</span>
                </h2>
                <p className="text mb-5 lh-lg">
                  Medusa National players have exclusive access to a number of
                  special events. Our experienced staff coach a wide range of
                  camps for every position and age. Click below to register now!
                </p>
                <a
                  href="https://medusa.leagueapps.com/classes"
                  className="px-lg-5 btn btn-primary shadow"
                >
                  Register Now
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className=" section dark  arete-network">
        <Container>
          <Row className="align-items-center px-md-5 px-0">
            <Col lg={{ size: "3", order: 1 }}>
              {/* <img
                className="img-fluid "
                src="/images/medusa/Ellipse network logo.png"
              /> */}
              <img
                className="img-fluid arete-network-img"
                src="/images/poseidon/arete-offerings.jpg"
              />
            </Col>
            <Col lg={{ size: "9", order: 2 }} className="">
              <h1 className="md-section-title arete-font text-white display-3 Industry-font">
                Arete Network
              </h1>
              <h5 className="text fw-normal my-4 lh-base">
                The Arete Network is a community of like-minded lacrosse people
                working together to help shape the future of club lacrosse. This
                is accomplished by bringing lacrosse families, club directors,
                high school coaches, and college coaches to one platform for
                real-time feedback, advice, and support.
              </h5>
              <a
                href="https://aretesport.punchpass.com/classes?jw=undefined&as=client"
                className="px-lg-5 btn btn-primary "
              >
                Arete Training Schedule
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section  arete-partner-club">
        <Container>
          <Row className="justify-content-center text-center mb-4">
            <Col lg="6">
              <h1 className="md-section-title text-secondary ">
                Arete Partner <br />
                Club
              </h1>
            </Col>
          </Row>
          <div className="pb-5 mb-4">
            <Teams />
          </div>
        </Container>
      </section>

      {/*   <section className="location" id="locations">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93574.92971598938!2d-78.77025334179686!3d42.86827319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30bec7757876d%3A0x4426d5e1cc11787d!2sAndale%20Mexican%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2s!4v1626365594612!5m2!1sen!2s" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
    </section>*/}
      <Footer />
    </div>
  );
};
export default Medusa;
