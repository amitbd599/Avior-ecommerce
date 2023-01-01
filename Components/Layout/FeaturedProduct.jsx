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
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                    <div>
                      <h3>5</h3>
                    </div>
                    <div>
                      <h3>6</h3>
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
