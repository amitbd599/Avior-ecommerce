import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const HistorySection = () => {
  return (
    <section id='historySection'>
      <Container>
        {/* Intro Section */}
        <div className='introSection'>
          <Row>
            <Col>
              <div className='wrapper'>
                <div className='heading__text'>
                  <h2>Our History</h2>
                </div>
                <div className='des__text'>
                  <p>
                    But in order that you may see whence all this born error is
                    the pleasure of those who accuse and the pain of those who
                    praise, I will open up the whole matter, and those very
                    things which have come from that discoverer of truth.{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Intro Section */}
        <div className='innerSection'>
          <Row>
            <Col lg={5} className='leftSide'>
              <div className='wrapper'>
                <div>
                  <ul>
                    <li>
                      <span>
                        <img
                          className='img-fluid'
                          src='/Images/shape/shape_15.png'
                          alt=''
                        />
                      </span>
                      <span>Quis nostrud exercitation ullamco</span>
                    </li>
                    <li>
                      <span>
                        <img
                          className='img-fluid'
                          src='/Images/shape/shape_15.png'
                          alt=''
                        />
                      </span>
                      <span>Veilt voluptate duisaute</span>
                    </li>
                    <li>
                      <span>
                        <img
                          className='img-fluid'
                          src='/Images/shape/shape_15.png'
                          alt=''
                        />
                      </span>
                      <span>Irure dolor in reprehenderit in volipatate</span>
                    </li>
                    <li>
                      <span>
                        <img
                          className='img-fluid'
                          src='/Images/shape/shape_15.png'
                          alt=''
                        />
                      </span>
                      <span>Lorem Ipsum dolor sit amet</span>
                    </li>
                  </ul>
                </div>
                <div className='btn__section'>
                  <button className='btn-big-full-bg'>Contact Us</button>
                </div>
              </div>
            </Col>
            <Col lg={7} className='rightSide'>
              <div className='wrapper'>
                <div className='inner__data d-flex justify-content-between '>
                  <div className='item d-flex justify-content-between align-items-center'>
                    <div className='shape'>
                      <span>1</span>
                    </div>
                    <div className='text'>
                      <h3>We started our journey this year.</h3>
                      <p>2018</p>
                    </div>
                  </div>
                  <div className='item d-flex justify-content-between align-items-center'>
                    <div className='shape'>
                      <span>2</span>
                    </div>
                    <div className='text'>
                      <h3>Grow and expand to 2 city in London</h3>
                      <p>2019</p>
                    </div>
                  </div>
                </div>
                <div className='inner__data d-flex justify-content-between '>
                  <div className='item d-flex justify-content-between align-items-center'>
                    <div className='shape'>
                      <span>3</span>
                    </div>
                    <div className='text'>
                      <h3>We Build Online store USA</h3>
                      <p>2022</p>
                    </div>
                  </div>
                  <div className='item d-flex justify-content-between align-items-center'>
                    <div className='shape'>
                      <span>4</span>
                    </div>
                    <div className='text'>
                      <h3>We have 457 Offline Store in the world</h3>
                      <p>2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HistorySection;
