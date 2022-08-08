import React from "react";
import Slider from "react-slick";

import { Container, Row, Col, Form, FormControl, Button } from "reactstrap";

class Clients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      loop: true,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "60px",
          },
        },
      ],
    };

    return (
      <div className="client-slider md-client-slider  text-center mb-5">
        <Slider {...settings}>
          <div className="client-logo">
            <img
              src="/images/clients/plg.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/froglax.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/team-unrl.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/haymakers.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/unrl-tx.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/blue-dogs.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/hammers.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/unrl-minnesota.png"
              className="img-fluid client-logo-img"
            />
          </div>
          {/*           <div className="client-logo">
            <img src="/images/clients/mdx.png" className="img-fluid client-logo-img"/>
          </div>
 */}{" "}
          <div className="client-logo">
            <img
              src="/images/clients/hdlns.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/team-medusa.png"
              className="img-fluid client-logo-img"
            />
          </div>
          <div className="client-logo">
            <img
              src="/images/clients/drakkar.png"
              className="img-fluid client-logo-img"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Clients;
