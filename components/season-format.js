import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import {  faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faCodeBranch, faEnvelopeOpen, faEnvelopeOpenText, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SeasonFormat = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  

  return(
  <>  
    <div className="season-tabs">
      <div className="tab-headers">
        <div className={"tab-header tab-header-1" + (activeTab==0? " active":"")} onClick={()=>setActiveTab(0)}>
          8U  
        </div>
        <div className={"tab-header tab-header-2" + (activeTab==1? " active":"")} onClick={()=>setActiveTab(1)}>
          10U 12U 14U
        </div>
        <div className={"tab-header tab-header-3" + (activeTab==2? " active":"")} onClick={()=>setActiveTab(2)}>
          HIGH SCHOOL 
        </div>
      </div>
      <div className="tab-body">
        <div className={"single-tab single-tab-1" + (activeTab==0? " active":"")}>
          <Row>
            <Col lg="4">
              <div className="mini-title">fall season</div>
              <ul className="poseidon-list white">
                <li>Saturday Games (3v3 Field Format)
                  <ul>
                    <li>30 Minute Practice</li>
                    <li>30 Minute Game</li>
                  </ul>
                </li>
                <li>Tuesday Practices in the West Metro
                  <ul>
                    <li>75 Minute Practice Length</li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <div className="mini-title">winter season</div>
              <ul className="poseidon-list white">
                <li>Saturday Games (5v5 Box Format)
                  <ul>
                    <li>30 Minute Practice</li>
                    <li>30 Minute Game</li>
                    <li>*No weekday practices</li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <div className="mini-title smail-mini-title">spring & summer season</div>
              <ul className="poseidon-list white">
                <li>Supplemental Evaluation in April
                  <ul>
                    <li>10U level will move to 7v7 Tournament Format</li>
                    <li>12U will move to 10v10 Tournament Format</li>
                  </ul>
                </li>
                <li>Weekly Practices
                  <ul>
                    <li>Wednesday Nights</li>
                    <li>Sunday Nights</li>
                  </ul>
                </li>
                <li>Three Summer Tournaments
                  <ul>
                    <li>1-2 Local in Minnesota</li>
                    <li>1-2 Regional (6 Hour Radius)</li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className={"single-tab single-tab-2" + (activeTab==1? " active":"")}>
          <Row>
            <Col lg="4">
              <div className="mini-title">fall season</div>
              <ul className="poseidon-list white">
                <li>Saturday Games (5v5 Field Format)
                  <ul>
                    <li>30 Minute Practice</li>
                    <li>30 Minute Game</li>
                  </ul>
                </li>
                <li>Tuesday Practices in the West Metro
                  <ul>
                    <li>75 Minute Practice Length</li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <div className="mini-title">winter season</div>
              <ul className="poseidon-list white">
                <li>Saturday Games (5v5 Box Format)
                  <ul>
                    <li>30 Minute Practice</li>
                    <li>30 Minute Game</li>
                    <li>*No weekday practices</li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <div className="mini-title">spring & summer season</div>
              <ul className="poseidon-list white">
                <li>Supplemental Evaluation in April
                  <ul>
                    <li>10U level will move to 7v7 Tournament Format</li>
                    <li>12U will move to 10v10 Tournament Format</li>
                  </ul>
                </li>
                <li>Wednesday Games (Full Field Format)
                  <ul>
                    <li>12U/14U: 10 Minute Quarters (Stop Time)</li>
                    <li>10U: 10 Minute Quarters (Run Time)</li>
                  </ul>
                </li>
                <li>Sunday Practices
                  <ul>
                    <li>75 Minute Practice Length</li>
                  </ul>
                </li>
                <li>Three Summer Tournaments
                  <ul>
                    <li>1-2 Local in Minnesota</li>
                    <li>1-2 Regional (6 Hour Radius)</li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className={"single-tab single-tab-3" + (activeTab==2? " active":"")}>
          <Row>
            <Col lg="4">
              <div className="mini-title">fall season</div>
              <ul className="poseidon-list">
                <li>Field Focus</li>
                <li>Weekly Practice</li>
                <li>Clinic Opportunities</li>
              </ul>
            </Col>
            <Col lg="4">
              <div className="mini-title">winter season</div>
              <ul className="poseidon-list">
                <li>Box Focus</li>
                <li>Clinic Opportunities</li>
              </ul>
            </Col>
            <Col lg="4">
              <div className="mini-title">spring & summer season</div>
              <ul className="poseidon-list">
                <li>Supplemental Evaluation in April</li>
                <li>Weekly Practices
                  <ul>
                    <li>Wednesday Nights</li>
                    <li>Sunday Nights</li>
                  </ul>
                </li>
                <li>Three Summer Tournaments
                  <ul>
                    <li>1-2 Local in Minnesota</li>
                    <li>1-2 Regional (6 Hour Radius)</li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </>
)}

export default SeasonFormat
