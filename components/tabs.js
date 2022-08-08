import React from "react";
import { Col, Row } from "reactstrap";

export const Tab1 = (props) => {
  return (
    <>
      <div
        className={
          "single-tab single-tab-1 pb-5 pt-4" +
          (props.activeTab == 0 ? " active" : "")
        }
      >
        <Row className="mt-3">
          <Col lg="4">
            <div className="mini-title">Fall Tournaments</div>
            <ul className="medusa-list  blue">
              <li>TBD</li>
            </ul>
          </Col>
          <Col lg="4">
            <div className="mini-title">Winter Tournaments</div>
            <ul className="medusa-list  blue">
              <li>TBD</li>
            </ul>
          </Col>
          <Col lg="4">
            <div className="mini-title">Summer Tournaments</div>
            <ul className="medusa-list  blue">
              <li>
                NXT The Crab Cake <br />
                July 9-10
                <br />
                North East, MD
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export const Tab2 = (props) => {
  return (
    <>
      <div
        className={
          "single-tab single-tab-2 pb-5 pt-4" +
          (props.activeTab == 1 ? " active" : "")
        }
      >
        <Row className="mt-3">
          <Col lg="4">
            <div className="mini-title">Fall Tournaments</div>
            <ul className="medusa-list white">
              <li>TBD</li>
            </ul>
          </Col>
          <Col lg="4">
            <div className="mini-title">Winter Tournaments</div>
            <ul className="medusa-list white">
              <li>TBD</li>
            </ul>
          </Col>
          <Col lg="4">
            <div className="mini-title">Summer Tournaments</div>
            <ul className="medusa-list white">
              <li>TBD</li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};
export const Tab3 = (props) => {
  return (
    <>
      <div
        className={
          "single-tab single-tab-3 pb-5 pt-4" +
          (props.activeTab == 2 ? " active" : "")
        }
      >
        <Row className="mt-3">
          <Col lg="4">
            <div className="mini-title">Fall Tournaments</div>
            <ul className="medusa-list blue">
              <li>TBD</li>
            </ul>
          </Col>
          <Col lg="4">
            <div className="mini-title">Winter Tournaments</div>
            <ul className="medusa-list blue">
              <li>TBD</li>
            </ul>
          </Col>
          <Col lg="4">
            <div className="mini-title">Summer Tournaments</div>
            <ul className="medusa-list blue">
              <li>TBD</li>
              <li>
                NXT The Crab Cake <br />
                July 9-10
                <br />
                North East, MD
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};
export const Tab4 = (props) => {
  return (
    <>
      <div
        className={
          "single-tab single-tab-4 pb-5 pt-4" +
          (props.activeTab == 3 ? " active" : "")
        }
      >
        <Row className="mt-3">
          <Col lg="4">
            <div className="mini-title">Fall Tournaments</div>
            <ul className="medusa-list white">
              <li>TBD</li>
            </ul>
          </Col>
          <Col lg="4">
            <div className="mini-title">Winter Tournaments</div>
            <ul className="medusa-list white">
              <li>TBD</li>
            </ul>
          </Col>
          <Col lg="4">
            <div className="mini-title">Summer Tournaments</div>
            <ul className="medusa-list white">
              <li>TBD</li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};
