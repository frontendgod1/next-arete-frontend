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
  <div className="movember-page">
    <Head>
    <title>Arete x Movember - Arete Sport | Amateur Sports League Management | USA</title>
    <meta name="description" content="Movember Men&#039;s health awareness. Hosted by Arete through Movember to bring light to Men&#039;s mental health through a lacrosse tournament"/>
    <link rel="canonical" href="https://www.arete-sport.com/movember/"/>
    <meta property="og:locale" content="en_US"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="Movember - Arete Sport | Amateur Sports League Management | USA"/>
    <meta property="og:description" content="Movember Men&#039;s health awareness. Hosted by Arete through Movember to bring light to Men&#039;s mental health through a lacrosse tournament"/>
    <meta property="og:url" content="https://www.arete-sport.com/movember/"/>
    <meta property="og:site_name" content="Arete Sport | Amateur Sports League Management | USA"/>
    <meta property="article:publisher" content="https://www.facebook.com/aretelacrosse/"/>
    <meta property="og:image" content="https://www.arete-sport.com/wp-content/uploads/2021/08/Movember_Primary-Logo_Black-1-1024x339.png"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:label1" content="Est. reading time"/>
    <meta name="twitter:data1" content="3 minutes"/>

    </Head>
    <Nav static={true}/>
    <section className=" arete-x-movember">
      <img className="img-fluid arete-x-movember-img w-100 d-none d-lg-block" src="/images/Arete_X_Movember.png" />
      <img className="img-fluid arete-x-movember-img w-100 d-lg-none" src="/images/Arete_X_Movember-mobile.png" />
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={{size:'6', order:1}} className="pb-3 pb-lg-5  text-center">

            <h1 className="section-sub-title text-uppercase">Arete x Movember</h1>
            <p className="text">Arete Sport is excited to announce our new partnership with Movember. a 501c3 non-profit charity committed to changing the face of men’s health. Our partnership is focused on addressing the youth mental health crisis through Arete Sport programming.</p>
            <div className="line blue-line"/>
            <div className="quote-box mt-3">
              <p className="quote-text">
                “We are excited to work with such a respected charity. Movember funds over 1250+ programs with the money raised, including mental health programs such as Making Connections and Movember Conversations. We are beyond excited to support their cause and seek support from the lacrosse community. We believe the lacrosse community is in the perfect position to help create more awareness and support the Movember movement.“
              </p>
              <p className="quote-author">
                – Cory Childs​
              </p>
            </div>
            <Link href="https://arete-sport-shop.myshopify.com/collections/movember-collection"><a className="btn btn-dark text-uppercase mb-5"><img className="me-2 d-inline" src="/images/movember-small.png" />Shop Movember</a></Link>

          </Col>
        </Row>
      </Container>
    </section>
    <section className=" bg-light  movember-arete">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={{size:'6', order:2}} className="py-5">
            <img className="img-fluid arete-movember-img mb-4" src="/images/movember.png" />
            <div className="line "/>

            <p className="text mb-3">​Young men are facing a significant health challenge that needs more attention: mental health. <b>Movember</b> is the leading charity dedicated to changing the face of men’s health and is addressing the mental health crisis, a public health problem that impacts men’s health overall. Suicide is the leading cause of death globally among men aged 15-29.</p>
            <p className="text">Many young men throughout the country suffer in silence, in large part due to social and cultural pressures and outdated stereotypes of what it is to be a man. <b>Movember</b> and <b>Arete Sport</b> are uniquely positioned to reach and impact young men through targeted programming throughout the country.</p>
            <img className="img-fluid arete-movember-img mb-4" src="/images/movember-apparel.png" />
            <Link href="https://arete-sport-shop.myshopify.com/collections/movember-collection"><a className="btn btn-dark text-uppercase "><img className="me-2 d-inline" src="/images/movember-small.png" />Shop Movember</a></Link>

          </Col>
        </Row>
      </Container>
    </section>
    <section className="movember-donation">
    <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={{size:'6', order:2}} className="py-5">
            <p className="text">This September – December, Arete Sport is donating (20% ) of purchase from select products to Movember, a 501c3 non-profit organization committed to changing the face of men’s health.</p><p className="text"> We are committed to a <b>guaranteed minimum donation of $50,000.</b></p>
            <Scrollchor to="movember-invitational" animate={{ offset: 0, duration: 500, easing: linear }}  className="btn btn-light">Movember Invitational</Scrollchor>
          </Col>
        </Row>
      </Container>
    </section>
    <section className=" team-movember">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={{size:'6'}} className="py-3 text-center">
            <h2 className="section-title">TEAM MOVEMBER</h2>
            <div className="line blue-line"/>
            <img className="img-fluid arete-x-movember-img mb-3" src="/images/team-movember.jpg" />
            <p className="text">Arete Sport is excited to hire Brad Smith as the director of Team Movember. Brad and his staff will bring teams to regional and national events around the country to compete and spread awareness about mental health in young men. Please fill out the form below to express interest in playing on our Team Movember Program!</p>

            <div className="team-movember-season text-white bg-primary">
              <p className="h2 mb-3">Team Movember Season</p>
              <p className="h4 mb-0">Time Frame:</p>
              <p className="text mb-2">October - January</p>
              <p className="h4 mb-0">Teams:</p>
              <p className="text mb-2">2027 - 2022</p>
              <p className="h4 mb-0">Commitment:</p>
              <p className="text mb-2">Tournament Teams (a la carte)</p>
            </div>
            <p className="text">Check out what Brad has accomplished in the PLL!</p>
            <a className="" href="https://premierlacrosseleague.com/player/brad-smith"><button className="btn btn-dark px-2 px-lg-5 me-lg-3 mb-2 mb-lg-0">Learn More About Brad Smith</button></a>
            <Link href="https://arete-sport-shop.myshopify.com/collections/movember-collection"><a className="btn btn-primary text-uppercase "><img className="me-2 d-inline" src="/images/movember-small.png" />Shop Movember</a></Link>

          </Col>
          </Row>
        </Container>
    </section>
    <section className="movember-registration bg-dark py-3 py-md-5">
      <Container>

          <Row className="justify-content-center ">

          <Col lg="12" className="mb-3 text-center">
            <p className="h2 text-primary">TEAM MOVEMBER REGISTRATION  </p>

          </Col>
          <Col lg="4" className="mb-3 text-center">
            <p className="h4">November 13 – 14 2021: MD  </p>
            <div className="line blue-line "/>

            <a className="" href="http://arete.leagueapps.com/events/2530107-inside-lacrosse--2022"><button className="btn btn-light px-2 px-lg-5 mb-3">Inside: 2 (2022)</button></a>
            <a className="" href="http://arete.leagueapps.com/events/2528112-inside-lacrosse--2023"><button className="btn btn-light px-2 px-lg-5 mb-3">Inside: 2 (2023)</button></a>
          </Col>
          <Col lg="4" className="mb-3 text-center">
            <p className="h4">December 11 – 12 2021: CA</p>
            <div className="line blue-line "/>
            <a className="" href="http://arete.leagueapps.com/events/2530110-legends-cup--2023"><button className="btn btn-light px-2 px-lg-5 mb-3">Legends National Cup (2023)</button></a>
          </Col>
          <Col lg="4" className="mb-3 text-center">
            <p className="h4">Dec 31 – Jan 2 2022: FL</p>
            <div className="line blue-line "/>
            <a className="" href="http://arete.leagueapps.com/events/2530113-club-nationals---2026"><button className="btn btn-light px-2 px-lg-5 mb-3">Club Nationals (2026)</button></a>
            <a className="" href="http://arete.leagueapps.com/events/2530116-club-nationals---2027"><button className="btn btn-light px-2 px-lg-5 mb-3">Club Nationals (2027)</button></a>
          </Col>
        </Row>
      </Container>
    </section>
    <section className=" movember-invitational  bg-light" id="movember-invitational">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={{size:'8', order:1}} className="text-center">
            <p className="section-title">MOVEMBER INVITATIONAL</p>
            <div className="line blue-line"/>
            <p className="text mb-3 mb-lg-5">Our <b>Minneapolis</b> event will kick off our Arete Sport Challenge for Movember. This challenge is focused on pitting lacrosse programs and individuals against each other in a friendly competition to raise funds for Movember. Our <b>Texas</b> event will conclude the challenge and a lacrosse program (high school, association, or club) will be named the winner at the end of the weekend. A prize will be rewarded to the director of the program.</p>

          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center ">
          <Col lg={{size:'5', order:1}} className="event-info">
            <h3 className="h3 text-center text-primary mt-3 mb-3">MOVEMBER FALL INVITATIONAL</h3>
            <div className="event-block">
              <p className="text-primary h3">Kick Off Event</p>
              <p className="h5 mt-3">October 2nd - 3rd, 2021<br/> Minneapolis, MN</p>
              <div className="h4 mt-3">Overview</div>
              <ul className="details mt-3">
                <li>5 Games Minimum</li>
                <li>Pool Play Saturday</li>
                <li>Bracket Play Sunday</li>
                <li>TCO Stadium + Surrounding Area Fields</li>  
                <li>All-Star Game for Elite & Rising Star Bracket (Saturday Night)</li>  
                <li>Mental Health Awareness Tent & Information</li>  
              </ul>
              <div className="price-block mt-3">
                <div className="title">PRICE</div>
                <div className="info">
                  <p><b>Stars / Elite:</b> $2,200 <span className="small">(Film Included)</span></p>
                  <p><b>12U - Vartity:</b> $1,500</p>
                  <p><b>10U:</b> $1,500 (7 vs.7)</p>
               </div>
              </div>
              <p className="text-primary h4 mb-3">October 2nd-3rd, 2021<br/> Eagan, MN</p>
              <p className="mb-3 h5 font-weight-900">Boy Divisions</p>
              <div className="divisions">10U | 12U | 14UB | 14UA | JV |  Varsity |  Rising Stars  | Elite </div>
              <div className="picture">
                <img className="img-fluid arete-x-movember-img mb-3" src="/images/movember.png" />
                <div className="title">FALL Invitational</div>
              </div>

            </div>
          </Col>
          <Col lg={{size:'5', order:2}} className="event-info">
            <h3 className="h3 text-center text-primary mt-3 mb-3">MOVEMBER WINTER INVITATIONAL</h3>
            <div className="event-block">
              <p className="text-primary h3">Closing Event</p>
              <p className="h5 mt-3">January 22nd - 23rd, 2022<br/> Austin, TX</p>
              <div className="h4 mt-3">Overview</div>
              <ul className="details mt-3">
                <li>4 Games Minimum</li>
                <li>Pool Play Saturday</li>
                <li>Bracket Play Sunday</li>
                <li>Field Rental</li>  
                <li>Mental Health Awareness Tent & Information</li>  
              </ul>
            
              <div className="price-block">
                <div className="title">PRICE</div>
                <div className="info">
                  <p>$1,200</p>
               </div>
              </div>
              <p className="text-primary h4 mb-3">January 22nd - 23rd, 2021<br/> Round Rock Multi-Sport Complex</p>
              <p className="mb-3 h5 font-weight-900">Boy Divisions</p>
              <div className="divisions">2029 | 2028 | 2027 | 2026 | JV | Varsity</div>
              <div className="picture">
                <img className="img-fluid arete-x-movember-img mb-3" src="/images/movember.png" />
                <div className="title">WINTER Invitational</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className=" email-us cta">
      <Container className="py-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col lg='6'>
            <p className="text text-white">If you are interested in attending our event, or simply join our challenge, please email us at <a className="text-primary" href="mailto:info@arete-sport.com">info@arete-sport.com</a>.<br/><b> You do not need to attend the events to join our Arete Sport challenge.</b></p>
            <a href="mailto:info@arete-sport.com" className="btn btn-light px-3 px-lg-5">EMAIL US</a>
          </Col>
        </Row>
      </Container>
    </section>

    <section className=" movember-apparel  ">
      <Container> 
      <Row className="justify-content-center align-items-center text-center">
          <Col lg={{size:'6'}} className="py-3 ">

            <h4 className="section-title">MOVEMBER APPAREL</h4>
            <div className="line blue-line"/>
            <p className="text">Movember Apparel will be available at <a href="https://arete-sport-shop.myshopify.com/" target="_blank">arete-sport-shop.myshopify.com</a> and our store at Viking Lakes on September 1st. ​</p>
            </Col>
          <Col lg="8">
            <Row>
              <Col lg="4" >
                <img className="img-fluid mb-3 d-none d-lg-block" src="/images/apparel-1.jpg" />
              </Col>
              <Col lg="4" >
                <img className="img-fluid mb-3" src="/images/apparel-2.jpg" />
              </Col>
              <Col lg="4">
                <img className="img-fluid mb-3" src="/images/apparel-3.jpg" />
              </Col>
            </Row>
            <Link href="https://arete-sport-shop.myshopify.com/collections/movember-collection"><a className="btn btn-dark text-uppercase mt-3"><img className="me-2 d-inline" src="/images/movember-small.png" />Shop Movember</a></Link>

         </Col>
        </Row>
      </Container>
    </section>
    <section className=" movember-learn-more bg-light ">
      <Container> 
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={{size:'6', order:1}} className="py-3 ">
            <img className="img-fluid arete-x-movember-img p-4" src="/images/movember-logo.png" />
            <div className="line blue-line"/>
            <p className="text">​Through strategic partnerships in media and programmatic efforts, Movember is working to challenge social norms to change attitudes and behaviors among individuals and, ultimately, shift the culture around men’s mental health to motivate more men to take action and seek help.</p>
            <a className="" href="https://us.movember.com"><button className="btn btn-dark px-5 ">Learn more at Movember.com</button></a>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer/>
  </div>
)
  }
export default Home
