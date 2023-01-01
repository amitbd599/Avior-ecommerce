import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const FeaturedProduct = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id='featuredProduct'>
      <Container>
        {/* Intro Box */}
        <Row>
          <Col>
            <div className='intro__box'>
              <div className='wrapper '>
                <div className='headingText position-relative'>
                  <h2>Featured Product</h2>
                  <div className='shapeImg position-absolute'>
                    <img src='/Images/shape/shape_11.png' alt='' />
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Slider Featured Product */}
        <div className='slider'>
          <Row>
            <Col>
              <div className='wrapper'>
                <div className='slider__body'>
                  <Slider {...settings}>
                    <div className='slider__item'>
                      <div>
                        <div className='imgFile'>
                          <img
                            src='/Images/featureProducts/product_1.png'
                            alt=''
                          />
                        </div>
                        <div className='textFile'>
                          <div>
                            <div>
                              <h1>BEST SELLER</h1>
                              <h2>Denim Jeans Pro</h2>
                              <p>Denim</p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris
                              </p>
                            </div>
                            <div>
                              <div>
                                <span>$9.5</span>
                              </div>
                              <div>
                                <span>$6.5</span>
                              </div>
                              <div>
                                <span>20% OFF</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
