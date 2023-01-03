import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const GetNotification = () => {
  return (
    <section id='getNotification'>
      <Container>
        <Row>
          <Col>
            <div className='wrapper'>
              <div className='inner__body'>
                <h2>Get Notified about our new product launches and offers.</h2>
                <div className='input__box'>
                  <input type='text' placeholder='Enter your email' />
                  <div className='btn__box'>
                    <button>Get Started</button>
                  </div>
                </div>
              </div>
              <div className='shape_1'>
                <img
                  className='img-fluid'
                  src='/Images/shape/shape_12.png'
                  alt=''
                />
              </div>
              <div className='shape_2'>
                <img
                  className='img-fluid'
                  src='/Images/shape/shape_13.png'
                  alt=''
                />
              </div>
              <div className='shape_3'>
                <img
                  className='img-fluid'
                  src='/Images/shape/shape_14.png'
                  alt=''
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetNotification;
