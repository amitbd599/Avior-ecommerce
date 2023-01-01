import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
const HeroSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    // cssEase: "linear",
  };
  return (
    <section id='hero__section'>
      <Container>
        <Row>
          <Col lg={6} className='leftSide'>
            <div className='wrapper'>
              <div className='topHeaderText'>
                <h1>SELLING GLOBALLY</h1>
              </div>
              <div className='mainHeaderText'>
                <h2>Style That Matters.</h2>
              </div>
              <div className='des'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum aliquid, labore consequuntur fugiat saepe eveniet eos
                  aspernatur corporis! Rerum impedit atque amet nihil, quos
                  voluptatum accusamus expedita possimus sint. Ipsum dolores
                  voluptas facere laboriosam perspiciatis minus, ipsam nam
                  debitis blanditiis.
                </p>
              </div>
              <div className='btn__section'>
                <div className='leftBtn'>
                  <button>Start Shopping</button>
                </div>
                <div className='ml--20 rightBtn'>
                  <button>Learn More</button>
                </div>
              </div>
              <div className='partner'>
                <h3>Our partner</h3>
                <div>
                  <span className=' d-inline-block'>
                    <img
                      className='img-fluid'
                      src='/Images/shape/shape_1.png'
                      alt=''
                    />
                  </span>
                  <span className='ml--30 d-inline-block'>
                    <img
                      className='img-fluid'
                      src='/Images/shape/shape_2.png'
                      alt=''
                    />
                  </span>
                  <span className='ml--30 d-inline-block'>
                    <img
                      className='img-fluid'
                      src='/Images/shape/shape_3.png'
                      alt=''
                    />
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className='rightSide position-relative'>
            <div>
              <div className='imgFile '>
                <img
                  className='img-fluid'
                  src='/Images/person/person_1.png'
                  alt=''
                />
              </div>
              <div className='shape_2 position-absolute'>
                <img
                  className='img-fluid'
                  src='/Images/shape/shape_6.png'
                  alt=''
                />
              </div>
              <div className='slider__body shadow-md'>
                <div className='wrapper'>
                  <Slider {...settings}>
                    {[...Array(3)].map((item, index) => (
                      <div className='slider__bodyInner d-flex'>
                        <div className='d-flex'>
                          <div className='imgFile'>
                            <img
                              className='img-fluid'
                              src='/Images/products/product_1.png'
                              alt=''
                            />
                          </div>
                          <div className='textFile pl--20 d-flex align-items-center'>
                            <div>
                              <div className='title__box'>
                                <h2>Denim Jeans</h2>
                                <p>Best Seller</p>
                              </div>
                              <div className='d-flex mt--10 align-items-center'>
                                <div className='price'>
                                  <span>$9.5</span>
                                </div>
                                <div className='review ml--8'>
                                  {[...Array(5)].map((item, index) => (
                                    <span key={index} className='mr--3'>
                                      <FaStar />
                                    </span>
                                  ))}
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
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className='shapeImage position-absolute'>
        <div className='shape_1'>
          <img src='/Images/shape/shape_4.png' alt='' />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
