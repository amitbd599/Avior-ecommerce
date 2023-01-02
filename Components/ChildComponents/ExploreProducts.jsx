import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import ExploreProductsData from "../../Data/ExploreProductsData";

const ExploreProducts = () => {
  return (
    <section id='exploreProducts'>
      <Container>
        {/* Intro Box */}
        <Row>
          <Col>
            <div className='intro__box'>
              <div className='wrapper '>
                <div className='headingText position-relative'>
                  <h2>Explore Our Products</h2>
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
      <Container fluid>
        <Row>
          <Col>
            <div className='wrapper'>
              <div className='intro__body'>
                <Marquee gradientColor={[248, 248, 248]} gradientWidth={180}>
                  {ExploreProductsData.map((item, index) => (
                    <div key={index} className='item'>
                      <img src={item.img} alt='' />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExploreProducts;
