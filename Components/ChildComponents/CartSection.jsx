import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { VscAdd, VscChromeClose, VscRemove } from "react-icons/vsc";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { RiCoupon4Fill } from "react-icons/ri";
const CartSection = () => {
  return (
    <section id='cartSection'>
      <Container>
        {/* Cart Header Intro */}
        <Row>
          <Col>
            <div className='header__intro'>
              <div>
                <div className='d-flex justify-content-center'>
                  <h2>My Cart</h2>
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

        {/* Cart items Intro */}
        <Row>
          <Col>
            <div className='cart__items'>
              <div className='select__all'>
                <input type='checkbox' name='' id='selectAll' />
                <label
                  className='select-none cursor-pointer pt--3'
                  htmlFor='selectAll'
                >
                  Select All
                </label>
              </div>
              <div className='inner__items'>
                <div className='inner__item d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <input
                        className='cursor-pointer'
                        type='checkbox'
                        name=''
                        id='selectAll'
                      />
                    </div>
                    <div className='pl--50 d-flex align-items-center'>
                      <div className='imgFile'>
                        <img
                          className='img-fluid'
                          src='/Images/allProduct/product_1.png'
                          alt=''
                        />
                      </div>
                      <div className='textFile pl--40'>
                        <h2>Mens Premium Jeans</h2>
                        <p>$100.99</p>
                        <div className='item__increase__decrease'>
                          <div className='d-flex'>
                            <span>
                              <VscRemove />
                            </span>
                            <span>1</span>
                            <span>
                              <VscAdd />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='closeIcon'>
                    <span className='px--10 py--10 d-block cursor-pointer'>
                      <VscChromeClose className='fz--26 ' />
                    </span>
                  </div>
                </div>
                <div className='inner__item d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <input
                        className='cursor-pointer'
                        type='checkbox'
                        name=''
                        id='selectAll'
                      />
                    </div>
                    <div className='pl--50 d-flex align-items-center'>
                      <div className='imgFile'>
                        <img
                          className='img-fluid'
                          src='/Images/allProduct/product_3.png'
                          alt=''
                        />
                      </div>
                      <div className='textFile pl--40'>
                        <h2>Mens Premium Jeans</h2>
                        <p>$100.99</p>
                        <div className='item__increase__decrease'>
                          <div className='d-flex'>
                            <span>
                              <VscRemove />
                            </span>
                            <span>1</span>
                            <span>
                              <VscAdd />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='closeIcon'>
                    <span className='px--10 py--10 d-block cursor-pointer'>
                      <VscChromeClose className='fz--26 ' />
                    </span>
                  </div>
                </div>
                <div className='inner__item d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div>
                      <input
                        className='cursor-pointer'
                        type='checkbox'
                        name=''
                        id='selectAll'
                      />
                    </div>
                    <div className='pl--50 d-flex align-items-center'>
                      <div className='imgFile'>
                        <img
                          className='img-fluid'
                          src='/Images/allProduct/product_6.png'
                          alt=''
                        />
                      </div>
                      <div className='textFile pl--40'>
                        <h2>Mens Premium Jeans</h2>
                        <p>$100.99</p>
                        <div className='item__increase__decrease'>
                          <div className='d-flex'>
                            <span>
                              <VscRemove />
                            </span>
                            <span>1</span>
                            <span>
                              <VscAdd />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='closeIcon'>
                    <span className='px--10 py--10 d-block cursor-pointer'>
                      <VscChromeClose className='fz--26 ' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='checkout__body'>
                <div className='inner__checkout'>
                  <Row>
                    <Col lg={8}></Col>
                    <Col lg={4}>
                      <div className='coupon__accordion__body'>
                        <Accordion allowZeroExpanded>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <span className='fz--20 pr--10'>
                                  <RiCoupon4Fill />
                                </span>
                                <span className='fz--16'>
                                  Have a coupon code?
                                </span>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className='coupon__input'>
                                <input
                                  type='text'
                                  placeholder='Enter You Code ....'
                                />
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
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
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CartSection;
