import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FeatureProductSliderData from "../../Data/FeatureProductSliderData";
import Link from "next/link";

const FeaturedProduct = () => {
  const settings = {
    className: "center",
    arrows: true,
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "240px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
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
      </Container>
      {/* Slider Featured Product */}
      <div className='slider mb--30'>
        <Container fluid>
          <Row>
            <Col>
              <div className='wrapper'>
                <div className='slider__body'>
                  <Slider {...settings}>
                    {FeatureProductSliderData.map((item, index) => (
                      <div key={index} className='slider__item'>
                        <div className='d-flex'>
                          <div className='imgFile'>
                            <img className='img-fluid' src={item.img} alt='' />
                          </div>
                          <div className='textFile d-flex'>
                            <div>
                              <div>
                                <h1>BEST SELLER</h1>
                                <h2>{item.title}</h2>
                                <h3>{item.brand}</h3>
                                <p>{item.des}</p>
                              </div>
                              <div className='price__section'>
                                <div className='price'>
                                  <span>${item.price}</span>
                                </div>
                                <div className='bar'>
                                  <span>${item.bar}</span>
                                </div>
                                <div className='discount'>
                                  <span>{item.discount} Off</span>
                                </div>
                              </div>
                              <div className='d-flex mt--16'>
                                <div>
                                  <Link href={"/"}>
                                    <button className='btn-small-full-bg'>
                                      Buy Now
                                    </button>
                                  </Link>
                                </div>
                                <div className='ml--15'>
                                  <Link href={"/"}>
                                    <button className='btn-small-full-outline'>
                                      Add to Wishlist
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default FeaturedProduct;
