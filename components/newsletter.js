import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Input, FormFeedback , Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, Dropdown, NavDropdown, DropdownMenu, DropdownItem,DropdownToggle,Button } from 'reactstrap';
import {  faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faCodeBranch, faEnvelopeOpen, faEnvelopeOpenText, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Yup from 'yup';
import { Formik, Field, Form  } from "formik";
import axios from 'axios';

const API_PATH = '/newsletter.php';


const Newsletter = (props) => {
  const [mailSent, setMailSent] = useState(false);
  const [mailError, setMailError] = useState();
  const [loading, setLoading] = useState(false);

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('This Field is Required'),
  });

  return(
  <>
  <section className="section newsletter bg-primary">
    <Container>
      <div className="newsletter-inner">
        <div className="icon-wrap">
          <img src="/images/icons/newsletter.svg" width="80" height="80"/>
        </div>
        <div className="icon-text h2 text-white text-uppercase">
          Want free information?
        </div>
        <div className="form-wrapper">
        {mailSent ? 
                  <div className="h4">Thank You, your requested has been sent successfully!</div>  
                : <Formik
                initialValues={{ 
                  email: "" }}
                validationSchema={ValidationSchema}

                onSubmit={async (values) => { 
                  setLoading(true);
                  axios({
                    method: 'post',
                    url: `${API_PATH}`,
                    headers: { 'content-type': 'application/json' },
                    data: values
                  })
                    .then(result => { 
                      if(result.data.sent) {
                        setMailSent(result.data.sent);
                        setMailError(null);
                      }
                      else {
                        setMailError("Error. Please try again later.");
                      }
                      setLoading(false);
                    })
                    .catch(error => {setMailError(error.message ); setLoading(false)});
              }}
              >
              {props => (
              <Form className="position-relative">
              {loading&&<div className="loading">Loading...</div>}
        <div className="input-group">
          <Field id="email" name="email">
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                      }) => (
                        <>
                          <Input type="email" className="form-control"  placeholder="Your email address" {...field} 
                          invalid={meta.touched && meta.error} 
                          valid={meta.touched && !meta.error}
                          not-required />
                          {meta.touched && meta.error && (
                            <FormFeedback >{meta.error}</FormFeedback>
                          )}
                        </>
                      )}
                    </Field>

          <span className="input-group-btn"> 
            <button className="btn btn-primary text-white" type="submit">
                Sign Up
            </button>
          </span>
        </div>
        </Form>)}
      </Formik> }
      </div>
      </div>
    </Container>
  </section>
  </>
)}

export default Newsletter
