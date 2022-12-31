import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
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
          <Col lg={6} className='rightSide'></Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
