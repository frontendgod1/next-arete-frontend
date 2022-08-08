import React from 'react'
import Slider from "react-slick";

import { Container, Row, Col,  Form, FormControl, Button } from 'reactstrap'

class Clients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "40px"
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "60px"
          }
        }
      ]

    };

    return (
    <section className="section" id="client-numbers">
      <Slider className="flipbox-slider" {...settings} >
              <div className="element flipbox">
                <div className="flipbox-inner">
                  <div className="side outer-side" style={{backgroundImage:"url(/images/team-unrl.jpg)"}}>
                    <img className="img-fluid logo" src="/images/clients/team-unrl.png"/>
                  </div>
                  <div className="side inner-side">
                    <img className="img-fluid logo" src="/images/clients/team-unrl.png"/>

                    <div className="title">Team UNRL</div>
                    <p className="info">Team UNRL is the national team for small markets and non-traditional players. UNRL is an athletic clothing brand based in St. Paul, Minnesota, focused on creating quality sports apparel by combining premium materials expert workmanship and design.</p>
                  </div>
                </div>
              </div>
              <div className="element flipbox">
                <div className="flipbox-inner">
                  <div className="side outer-side" style={{backgroundImage:"url(/images/froglax.jpg)"}}>
                    <img className="img-fluid logo" src="/images/clients/froglax.png"/>
                  </div>
                  <div className="side inner-side">
                    <img className="img-fluid logo" src="/images/clients/froglax.png"/>

                    <div className="title">Frog Lacrosse</div>
                    <p className="info">Frog Lacrosse is a training company located in Eagan, Minnesota. It is a lacrosse program geared towards helping young athletes succeed on and off the field.</p>
                  </div>
                </div>
              </div>
              <div className="element flipbox">
                <div className="flipbox-inner">
                  <div className="side outer-side" style={{backgroundImage:"url(/images/texas-blue-dogs.jpg)"}}>
                    <img className="img-fluid logo" src="/images/clients/blue-dogs.png"/>
                  </div>
                  <div className="side inner-side">
                    <img className="img-fluid logo" src="/images/clients/blue-dogs.png"/>

                    <div className="title">Texas Blue Dogs</div>
                    <p className="info">Texas Blue Dogs is a lacrosse club based in Austin, TX. The name and mascot are based on the Blue Lacy, a breed of working dogs originating from Texas.</p>
                  </div>
                </div>
              </div>
              <div className="element flipbox">
                <div className="flipbox-inner">
                  <div className="side outer-side" style={{backgroundImage:"url(/images/mdx-bg.jpg)"}}>
                    <img className="img-fluid logo" src="/images/clients/mdx.png"/>
                  </div>
                  <div className="side inner-side">
                    <img className="img-fluid logo" src="/images/clients/mdx.png"/>

                    <div className="title">MDX Lacrosse</div>
                    <p className="info">MDX is a non profit travel club based out of Maryland. MDX specializes in teaching and emphasizing speed, lacrosse IQ and expect our players to bring a tenacious attitude and work ethic to every practice and game.</p>
                  </div>
                </div>
              </div>
              <div className="element flipbox">
                <div className="flipbox-inner">
                  <div className="side outer-side" style={{backgroundImage:"url(/images/unrl-texas.jpg)"}}>
                    <img className="img-fluid logo" src="/images/clients/unrl-texas.png"/>
                  </div>
                  <div className="side inner-side">
                    <img className="img-fluid logo" src="/images/clients/unrl-texas.png"/>

                    <div className="title">Team UNRL Texas  </div>
                    <p className="info">Formed in fall of 2020 UNRL Texas is quickly becoming one of the most competitive programs in Texas. UNRL Texas is comprised of 4 teams. Coach Justin Becker heads the program.</p>
                  </div>
                </div>
              </div>
              <div className="element flipbox">
                <div className="flipbox-inner">
                  <div className="side outer-side" style={{backgroundImage:"url(/images/team-medusa.jpg)"}}>
                    <img className="img-fluid logo" src="/images/clients/team-medusa.png"/>
                  </div>
                  <div className="side inner-side">
                    <img className="img-fluid logo" src="/images/clients/team-medusa.png"/>

                    <div className="title">Team Medusa</div>
                    <p className="info">A national girls lacrosse program for elite players looking to compete at the next level complementary of your home club team</p>
                  </div>
                </div>
              </div>
         </Slider>

    </section>
)}

 }

export default Clients
