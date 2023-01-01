import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { BsCheckLg } from "react-icons/bs";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutUsSection = () => {
  return (
    <section id='aboutUsSection'>
      <Container>
        <Row>
          <Col lg={7}>
            <div className='leftSide'>
              <div className='wrapper'>
                <div className='imgFile'>
                  <img
                    className='img-fluid'
                    src='/Images/products/product_2.png'
                    alt=''
                  />
                  <div className='textFile shadow-md'>
                    <div>
                      <div>
                        <h2>We are selling over 300 regions.</h2>

                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <h3>
                                <CountUp start={100000} end={123094} />
                              </h3>
                            )
                          }
                        </TrackVisibility>

                        <div className='progressBar'>
                          <ProgressBar variant='warning' now={60} />
                        </div>
                      </div>
                      <div className='avatar'>
                        <span>
                          <img
                            className='img-fluid'
                            src='/Images/other/place_1.png'
                            alt=''
                          />
                        </span>
                        <span>
                          <img
                            className='img-fluid'
                            src='/Images/other/place_2.png'
                            alt=''
                          />
                        </span>
                        <span>
                          <img
                            className='img-fluid'
                            src='/Images/other/place_3.png'
                            alt=''
                          />
                        </span>
                        <span>
                          <img
                            className='img-fluid'
                            src='/Images/other/place_4.png'
                            alt=''
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} className='rightSide'>
            <div className='wrapper'>
              <div>
                <div className='textFile'>
                  <h1>About Us</h1>
                  <h2>We are a growing clothing brand that sells globally.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit aenean sagittis amet, sit tempor. Neque pharetra,
                    hendrerit ac purus maecenas ac, vestibulum. Tincidunt.
                  </p>
                  <p>
                    Velit aenean sagittis amet, sit tempor. Neque pharetra,
                    hendrerit ac purus maecenas ac, vestibulum. Tincidunt.
                  </p>
                </div>
                <div className='mt--10'>
                  <ul>
                    <li>
                      <span>
                        <BsCheckLg />
                      </span>{" "}
                      Sell Globally
                    </li>
                    <li>
                      <span>
                        <BsCheckLg />
                      </span>{" "}
                      Mantains Quality
                    </li>
                    <li>
                      <span>
                        <BsCheckLg />
                      </span>{" "}
                      Follow Trends
                    </li>
                    <li>
                      <span>
                        <BsCheckLg />
                      </span>{" "}
                      Best Sell
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={3}>
            <div className='option__data'>
              <div className='imgFile'>
                <img
                  className='img-fluid'
                  src='/Images/shape/shape_7.png'
                  alt=''
                />
              </div>
              <div className='textFile'>
                <h2>Quick Delivery</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </Col>
          <Col xl={3}>
            <div className='option__data'>
              <div className='imgFile'>
                <img
                  className='img-fluid'
                  src='/Images/shape/shape_8.png'
                  alt=''
                />
              </div>
              <div className='textFile'>
                <h2>Secure Payment</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </Col>
          <Col xl={3}>
            <div className='option__data'>
              <div className='imgFile'>
                <img
                  className='img-fluid'
                  src='/Images/shape/shape_9.png'
                  alt=''
                />
              </div>
              <div className='textFile'>
                <h2>Best Quality</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </Col>
          <Col xl={3}>
            <div className='option__data'>
              <div className='imgFile'>
                <img
                  className='img-fluid'
                  src='/Images/shape/shape_10.png'
                  alt=''
                />
              </div>
              <div className='textFile'>
                <h2>Return Guarantee</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
