import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialData from "../../Data/TestimonialData";
import SingleTestimonial from "../Elements/SingleTestimonial";
import Slider from "react-slick";
const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section id='testimonialSection'>
      <Container>
        {/* Intro Box */}
        <Row>
          <Col>
            <div className='intro__box'>
              <div className='wrapper '>
                <div className='headingText position-relative'>
                  <h2>Honest Reviews From Customers</h2>
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
        {/* Product Items */}
        <div className='testimonial__card'>
          <div className='slider'>
            <Slider {...settings}>
              {TestimonialData.map((item, index) => (
                <div className='slider__body'>
                  <div key={index} className='item drop-shadow-xl'>
                    <SingleTestimonial item={item} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
