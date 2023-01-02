import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import AllProducts from "../../Data/AllProducts";
import SingleProductCard from "../Elements/SingleProductCard";

const Accessories = () => {
  return (
    <section id='accessories'>
      <Container>
        {/* Intro Box */}
        <Row>
          <Col>
            <div className='intro__box'>
              <div className='wrapper '>
                <div className='headingText position-relative'>
                  <h2>Hot Jeans Accessories</h2>
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
        <div className='product__card'>
          <Row>
            {AllProducts.slice(0, 8).map((item, index) => (
              <Col lg={3} key={index}>
                <div className='item'>
                  <SingleProductCard item={item} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Accessories;
