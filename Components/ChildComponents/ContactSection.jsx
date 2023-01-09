import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const ContactSection = () => {
  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  return (
    <section id='contactSection'>
      <Container>
        {/* Contact Section */}
        <div className='contact__body'>
          <Row>
            <Col lg={6}>
              <div className='textFile'>
                <h2>OUR CONTACT</h2>
                <h3>Send Us A Message</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  mauris augue, aliquam ac rhoncus id, tristique at augue. Duis
                  vel luctus odio, sed sagittis urna. Integer at elit at leo
                  varius vestibulum.
                </p>
              </div>
              <div className='address__section'>
                <div className='address w-100'>
                  <div>
                    <h2>Address</h2>
                  </div>
                  <div className='d-flex align-items-center mt--10'>
                    <span className='pr--10'>
                      <FaMapMarkerAlt />
                    </span>
                    <span className='pt--2'>
                      14 County Road 8350, Winter Park, <br /> New York, USA
                    </span>
                  </div>
                </div>
                <div className='contact w-100'>
                  <div>
                    <h2>Contact</h2>
                  </div>
                  <div className='d-flex align-items-center mt--10 '>
                    <span className='pr--10'>
                      <FaEnvelopeOpen />
                    </span>
                    <span className='pt--2'>hello@demo.live</span>
                  </div>
                  <div className='d-flex align-items-end mt--10'>
                    <span className='pr--10'>
                      <FaPhoneAlt />
                    </span>
                    <span className='pt--2'>+1 (234) 567 890</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className='contact__input'>
                <div className='d-flex'>
                  <div className='w-100 me-2'>
                    <label className='d-block' htmlFor='fastName'>
                      Fast Name:
                    </label>
                    <input
                      className='d-block w-100'
                      type='text'
                      id='fastName'
                    />
                  </div>
                  <div className='w-100 ms-2'>
                    <label className='d-block' htmlFor='lastName'>
                      Last Name:
                    </label>
                    <input
                      className='d-block w-100'
                      type='text'
                      id='lastName'
                    />
                  </div>
                </div>
                <div className='mt-3'>
                  <label className='d-block' htmlFor='lastName'>
                    Last Name:
                  </label>
                  <input className='d-block w-100' type='text' id='lastName' />
                </div>
                <div className='mt-3'>
                  <label className='d-block' htmlFor='txtid'>
                    Message:
                  </label>
                  <textarea
                    className='d-block w-100'
                    id='txtid'
                    name='txtname'
                    rows='6'
                    cols='50'
                    maxlength='200'
                  ></textarea>
                </div>
                <div className='mt-3'>
                  <button>Send Message</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Map Section */}
      <div className='map'>
        <Row>
          <Col>
            <LoadScript googleMapsApiKey='AIzaSyD8_8cWPDYP1LKn-NN-wW21HUju1fLa_GM'>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              ></GoogleMap>
            </LoadScript>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection;
