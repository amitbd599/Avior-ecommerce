import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import SliderProducts from "../../Data/SliderProducts";

const HeroSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
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
                    {SliderProducts.map((item, index) => (
                      <div key={index} className='slider__bodyInner d-flex'>
                        <div className='d-flex'>
                          <div className='imgFile'>
                            <img className='img-fluid' src={item.img} alt='' />
                          </div>
                          <div className='textFile pl--20 d-flex align-items-center'>
                            <div>
                              <div className='title__box'>
                                <h2>{item.name}</h2>
                                <p>{item.subTitle}</p>
                              </div>
                              <div className='d-flex mt--10 align-items-center'>
                                <div className='price'>
                                  <span>${item.price}</span>
                                </div>
                                <div className='review ml--10'>
                                  {[...Array(item.review)].map(
                                    (item, reviewIndex) => (
                                      <span key={reviewIndex} className='mr--3'>
                                        <FaStar />
                                      </span>
                                    )
                                  )}
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
    </section>
  );
};

export default HeroSection;
