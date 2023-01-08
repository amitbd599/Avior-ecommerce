import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsBank, BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const CheckoutSection = () => {
  return (
    <section id='checkoutSection'>
      <Container>
        {/* Cart Header Intro */}
        <Row>
          <Col>
            <div className='header__intro'>
              <div>
                <div className='d-flex justify-content-center'>
                  <h2>Checkout</h2>
                </div>
                <div className='link__point'>
                  <div className='leftSide'>
                    <span>1</span>
                    <span>My Cart</span>
                  </div>
                  <div className='midSide'></div>
                  <div className='rightSide'>
                    <span>2</span>
                    <span>Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* Checkout items Intro */}
        <div className='checkout__inner'>
          <Row>
            <Col lg={7}>
              <div className='leftSide'>
                <div className='wrapper__inner'>
                  <div className='buyer__info'>
                    <h2>Buyer Info</h2>
                  </div>
                  <div className='input__section'>
                    <div className='d-flex justify-content-between'>
                      <div className='w-100 pe-3'>
                        <label className='d-block mb--5' htmlFor='FirstName'>
                          First Name
                        </label>
                        <input
                          className='d-block w-100'
                          type='text'
                          placeholder='Richard'
                          id='FirstName'
                        />
                      </div>
                      <div className='w-100 ps-3'>
                        <label className='d-block mb--5' htmlFor='LastName'>
                          Last Name
                        </label>
                        <input
                          className='d-block w-100'
                          type='text'
                          placeholder='Lora'
                          id='LastName'
                        />
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mt--25'>
                      <div className='w-100 pe-3'>
                        <label className='d-block mb--5' htmlFor='Email'>
                          Email Address
                        </label>
                        <input
                          className='d-block w-100'
                          type='email'
                          placeholder='richardlora@mail.com'
                          id='Email'
                        />
                      </div>
                      <div className='w-100 ps-3'>
                        <label className='d-block mb--5' htmlFor='PhoneNumber'>
                          Phone Number
                        </label>
                        <input
                          className='d-block w-100'
                          type='text'
                          placeholder='Lora'
                          id='PhoneNumber'
                        />
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mt--25'>
                      <div className='w-100'>
                        <label className='d-block mb--5' htmlFor='Address'>
                          Address
                        </label>
                        <input
                          className='d-block w-100'
                          type='text'
                          placeholder='Corner Grove St. Franklin Avenue'
                          id='Address'
                        />
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mt--25'>
                      <div className='w-100 pe-3'>
                        <label className='d-block mb--5' htmlFor='State'>
                          State
                        </label>
                        <input
                          className='d-block w-100'
                          type='text'
                          placeholder='richardlora@mail.com'
                          id='State'
                        />
                      </div>
                      <div className='w-100 ps-3'>
                        <label className='d-block mb--5' htmlFor='Postcode'>
                          Postcode/ZIP
                        </label>
                        <input
                          className='d-block w-100'
                          type='text'
                          placeholder='Lora'
                          id='Postcode'
                        />
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mt--25'>
                      <div className='w-100 pe-3'>
                        <label className='d-block mb--5' htmlFor='Town'>
                          Town/City
                        </label>
                        <input
                          className='d-block w-100'
                          type='text'
                          placeholder='City of Westminster'
                          id='Town'
                        />
                      </div>
                      <div className='w-100 ps-3'>
                        <label className='d-block mb--5' htmlFor='Country'>
                          Country
                        </label>
                        <input
                          className='d-block w-100'
                          type='text'
                          placeholder='London'
                          id='Country'
                        />
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mt--25'>
                      <div className='w-100 '>
                        <label className='d-block mb--5' htmlFor='Note'>
                          Note
                        </label>
                        <textarea
                          className='d-block w-100'
                          id='Note'
                          name='txtname'
                          rows='6'
                          cols='50'
                          maxlength='200'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className='rightSide'>
                <div className='wrapper__inner'>
                  <div className='payment__info'>
                    <h2>Payment</h2>
                  </div>
                  <div className='payment__option '>
                    <div className='item__body'>
                      <div className='item mr--10'>
                        <span>
                          <BsBank />
                        </span>
                        <p>Bank Transfer</p>
                      </div>
                      <div className='item ml--10'>
                        <span>
                          <BsFillCreditCard2FrontFill />
                        </span>
                        <p>Credit Card</p>
                      </div>
                    </div>
                    <div className='item__body mt--20'>
                      <div className='item mr--10'>
                        <span>
                          <FaCcPaypal />
                        </span>
                        <p>Paypal</p>
                      </div>
                      <div className='item ml--10'>
                        <span>
                          <FaCcMastercard />
                        </span>
                        <p>Mastercard</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='summary'>
                  <div className='heading__text'>
                    <h2>Summary</h2>
                  </div>
                  <div className='total'>
                    <span>Total:</span>
                    <span>$230.00</span>
                  </div>
                  <div className='checkout__Btn'>
                    <button>Checkout</button>
                  </div>
                  <div className='continue__shopping__btn'>
                    <button>Continue Shopping</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutSection;
