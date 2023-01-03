import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section id='footer'>
      <Container>
        {/* Main Footer  */}
        <div className='main__footer pb--15'>
          <Row>
            <Col lg={4} className='part_1'>
              <div className='wrapper'>
                <div className='imgFile'>
                  <img
                    className='img-fluid'
                    src='/Images/Header/logo.png'
                    alt=''
                  />
                </div>
                <div className='textFile'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus feugiat amet pretium elementum. Orci elit mi,
                    facilisi massa blandit convallis purus. Ultrices id elit
                    turpis vel.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={2} className='part_2'>
              <div className='wrapper'>
                <div className='header'>
                  <h3>Products</h3>
                </div>
                <div className='linkData'>
                  <ul>
                    <li>
                      <Link href={"/"}>Denim</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Shirts</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Pants</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Jeans</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} className='part_3'>
              <div className='wrapper'>
                <div className='header'>
                  <h3>Quick Links</h3>
                </div>
                <div className='linkData'>
                  <ul>
                    <li>
                      <Link href={"/"}>Pricing</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Feedback</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Sales</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Privacy</Link>
                    </li>
                    <li>
                      <Link href={"/"}>How to Pay</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} className='part_4'>
              <div className='wrapper'>
                <div className='header'>
                  <h3>Follow Us</h3>
                </div>
                <div className='linkData'>
                  <ul className='d-flex'>
                    <li>
                      <a href='#'>
                        <FaFacebookSquare />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagramSquare />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='d-flex align-items-center emailBox'>
                  <span>
                    <FaEnvelope />
                  </span>
                  <span className='pt--2'>info@myemail.com</span>
                </div>
                <div className=' location'>
                  <span>603 Star Route Chicago, IL 60605</span>
                  <span>2006 Bentley Continental GTC</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        {/* Bottom Footer  */}
        <div className='bottom__footer '>
          <Row>
            <Col>
              <div className='wrapper'>
                <div className='d-flex justify-content-center align-items-center'>
                  <span className='pr--3'>&copy;</span>
                  <span>2022. AmitJS. All Rights Reserved.</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
