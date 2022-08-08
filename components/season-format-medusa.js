import Link from "next/link";
import React, { useState } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faCodeBranch,
  faEnvelopeOpen,
  faEnvelopeOpenText,
  faMapMarker,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab1, Tab2, Tab3, Tab4 } from "../components/tabs";

const SeasonFormat = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="season-tabs">
        <Row className="tab-headers">
          <Col md="3" sm="6" xs="12">
            <div
              className={
                "tab-header tab-header-1" + (activeTab == 0 ? " active" : "")
              }
              onClick={() => setActiveTab(0)}
            >
              2028/ 2029
            </div>
          </Col>
          <div className="tab-body d-md-none d-sm-none d-block mb-3">
            <Tab1 activeTab={activeTab} />
          </div>
          <Col md="3" sm="6" xs="12">
            <div
              className={
                "tab-header tab-header-2" + (activeTab == 1 ? " active" : "")
              }
              onClick={() => setActiveTab(1)}
            >
              2027/ 2026
            </div>
          </Col>
          <div className="tab-body d-md-none d-sm-none d-block mb-3">
            <Tab2 activeTab={activeTab} />
          </div>
          <div className="tab-body d-md-none d-sm-block d-none mb-3">
            <Tab1 activeTab={activeTab} />
            <Tab2 activeTab={activeTab} />
          </div>
          <Col md="3" sm="6" xs="12">
            <div
              className={
                "tab-header tab-header-3" + (activeTab == 2 ? " active" : "")
              }
              onClick={() => setActiveTab(2)}
            >
              2024/ 2025
            </div>
          </Col>
          <div className="tab-body d-md-none d-sm-none d-block mb-3">
            <Tab3 activeTab={activeTab} />
          </div>
          <Col md="3" sm="6" xs="12">
            <div
              className={
                "tab-header tab-header-4" + (activeTab == 3 ? " active" : "")
              }
              onClick={() => setActiveTab(3)}
            >
              2023
            </div>
          </Col>
          <div className="tab-body d-md-none d-sm-none d-block mb-3">
            <Tab4 activeTab={activeTab} />
          </div>
          <div className="tab-body d-md-none d-sm-block d-none mb-3">
            <Tab3 activeTab={activeTab} />
            <Tab4 activeTab={activeTab} />
          </div>
        </Row>
        <div className="tab-body d-md-block d-none">
          <Tab1 activeTab={activeTab} />
          <Tab2 activeTab={activeTab} />
          <Tab3 activeTab={activeTab} />
          <Tab4 activeTab={activeTab} />
        </div>
      </div>
    </>
  );
};

export default SeasonFormat;
