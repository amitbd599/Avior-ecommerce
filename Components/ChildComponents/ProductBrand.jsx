import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import BrandData from "../../Data/BrandData";
import SingleBrand from "../Elements/SingleBrand";

const ProductBrand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section id='productBrand'>
      <Container>
        {/* Intro Box */}
        <Row>
          <Col>
            <div className='intro__box'>
              <div className='wrapper '>
                <div className='headingText position-relative'>
                  <h2>Our Awesome Brand's</h2>
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
        <div className='brand__card'>
          <div className='slider'>
            <Slider {...settings}>
              {BrandData.map((item, index) => (
                <div className='slider__body'>
                  <div key={index} className='item drop-shadow-xl'>
                    <SingleBrand item={item} />
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

export default ProductBrand;
