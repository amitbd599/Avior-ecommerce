import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Select from "react-select";
import {
  FaCommentDots,
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaStar,
  FaStarHalfAlt,
  FaTruck,
  FaTwitter,
} from "react-icons/fa";
const SingleProductSection = () => {
  const [item, setItem] = useState(1);
  const increaseValue = () => {
    setItem(item + 1);
  };
  const decreaseValue = () => {
    setItem(item - 1);
  };
  const images = [
    {
      original: "/Images/singleProducts/singleProduct_1.png",
      thumbnail: "/Images/singleProducts/singleProduct_1.png",
    },
    {
      original: "/Images/singleProducts/singleProduct_2.png",
      thumbnail: "/Images/singleProducts/singleProduct_2.png",
    },
    {
      original: "/Images/singleProducts/singleProduct_3.png",
      thumbnail: "/Images/singleProducts/singleProduct_3.png",
    },
    {
      original: "/Images/singleProducts/singleProduct_4.png",
      thumbnail: "/Images/singleProducts/singleProduct_4.png",
    },
    {
      original: "/Images/singleProducts/singleProduct_5.png",
      thumbnail: "/Images/singleProducts/singleProduct_5.png",
    },
  ];

  const color = [
    { value: "Slate", label: "Slate" },
    { value: "Gray", label: "Gray" },
    { value: "Orange", label: "Orange" },
    { value: "Yellow", label: "Yellow" },
    { value: "Cyan", label: "Cyan" },
    { value: "Blue", label: "Blue" },
    { value: "Purple", label: "Purple" },
  ];
  const size = [
    { value: "XS", label: "XS" },
    { value: "SM", label: "SM" },
    { value: "LG", label: "LG" },
    { value: "XL", label: "XL" },
    { value: "2XL", label: "2XL" },
  ];
  return (
    <section id='singleProductSection'>
      <Container>
        <Row>
          <Col lg={4} className='leftSide'>
            <div className='wrapper'>
              <div className='slider__body'>
                <ImageGallery
                  items={images}
                  showNav={false}
                  showPlayButton={false}
                />
              </div>
            </div>
          </Col>
          <Col lg={8} className='rightSide'>
            <div className='wrapper'>
              <div className='inner__section'>
                <div className='header__text'>
                  <h2>Jeans : Men’s Premium</h2>
                </div>
                <div className='review__inner'>
                  <div className='review'>
                    <div className='d-flex align-items-center reviewIcon'>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStarHalfAlt />
                      </span>
                    </div>
                    <div className='mt--6'>
                      <h4 className='fz--20 fw-bold pl--12'>363</h4>
                    </div>
                    <div className='mt--6 reviewText'>
                      <span>
                        <FaCommentDots className='fz--20 theme_text_color' />
                      </span>
                      <span>235 Review</span>
                    </div>
                    <div className='mt--6 socialBtn'>
                      <div className='facebookBtn'>
                        <button>
                          <FaFacebookF /> <span>Facebook</span>
                        </button>
                      </div>
                      <div className='twitterBtn'>
                        <button>
                          <FaTwitter /> <span>Twitter</span>
                        </button>
                      </div>
                      <div className='linkedinBtn'>
                        <button>
                          <FaLinkedinIn /> <span>Linkedin</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='des'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className='shipping__stock'>
                  <div className='shipping'>
                    <button>
                      <span>
                        <FaTruck />
                      </span>
                      <span className='pl--8'>Free Shipping</span>
                    </button>
                  </div>
                  <div className='stock'>
                    <button>
                      <span>
                        <FaShoppingBag />
                      </span>
                      <span className='pl--8 mt--2 d-inline-block'>
                        In Stock
                      </span>
                    </button>
                  </div>
                </div>
                <div className='price__section'>
                  <div className='price'>
                    <span>$15,86</span>
                  </div>
                  <div className='bar'>
                    <span>$15,86</span>
                  </div>
                  <div className='discount'>
                    <span>5%</span>
                  </div>
                  <div className='addToCart'>
                    <span>
                      <FaHeart />
                    </span>
                  </div>
                </div>
                <div className='intro__select__option'>
                  <div className='select__body'>
                    {/* Color Select Section */}
                    <div className='color d-flex align-items-center'>
                      <div>
                        <span>Color: </span>
                      </div>
                      <div className='color__select__section'>
                        <Select
                          className='select__color'
                          defaultValue={color[0]}
                          options={color}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#0D59EF" : "#fff",
                              cursor: "pointer",
                              margin: "0px",
                              ":active": {
                                backgroundColor: "#ddd",
                                cursor: "pointer",
                              },
                            }),
                            singleValue: (provided, state) => ({
                              ...provided,
                              color: "#666",
                              cursor: "pointer",
                              fontSize: "15px",
                            }),
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "#ffffff",
                              padding: "0px 0px",
                              margin: "0px 0px",
                              cursor: "pointer",

                              ":focus-within": {
                                ...styles[":focus-within"],
                                border: "1px solid #ddd",
                                boxShadow: "none",
                              },
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              margin: "0px",
                              padding: "0px",
                              cursor: "pointer",
                            }),
                            noOptionsMessage: (styles) => ({
                              ...styles,
                              background: "red",
                              color: "#fff",
                            }),
                          }}
                        />
                      </div>
                    </div>
                    {/* Size Select Section */}
                    <div className='size d-flex align-items-center'>
                      <div>
                        <span>Size: </span>
                      </div>
                      <div className='size__select__section'>
                        <Select
                          className='select__color'
                          defaultValue={size[0]}
                          options={size}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#0D59EF" : "#fff",
                              cursor: "pointer",
                              margin: "0px",
                              ":active": {
                                backgroundColor: "#ddd",
                                cursor: "pointer",
                              },
                            }),
                            singleValue: (provided, state) => ({
                              ...provided,
                              color: "#666",
                              cursor: "pointer",
                              fontSize: "15px",
                            }),
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "#ffffff",
                              padding: "0px 0px",
                              margin: "0px 0px",
                              cursor: "pointer",

                              ":focus-within": {
                                ...styles[":focus-within"],
                                border: "1px solid #ddd",
                                boxShadow: "none",
                              },
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              margin: "0px",
                              padding: "0px",
                              cursor: "pointer",
                            }),
                            noOptionsMessage: (styles) => ({
                              ...styles,
                              background: "red",
                              color: "#fff",
                            }),
                          }}
                        />
                      </div>
                    </div>
                    {/* Product increase and decrease */}
                    <div className='product__item__select'>
                      <div className='inner__body'>
                        <button onClick={decreaseValue}>
                          <FaMinus />
                        </button>
                        <span>{item}</span>
                        <button onClick={increaseValue}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    {/* Add To Cart BTN */}
                    <div className='addToCartBtn'>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleProductSection;
