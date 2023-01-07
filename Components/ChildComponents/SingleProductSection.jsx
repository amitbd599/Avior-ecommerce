import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Select from "react-select";
import {
  FaCartPlus,
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
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const SingleProductSection = () => {
  const [item, setItem] = useState(1);
  const increaseValue = () => {
    setItem(item + 1);
  };
  const decreaseValue = () => {
    if (item >= 1) {
      setItem(item - 1);
    }
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
                  <h2>Jeans : Women's Premium</h2>
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
                      <button>
                        <FaCartPlus className='mr--3 mb--5' /> Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Product Description */}
        <div className='product__Description'>
          <Row>
            <Col>
              <div className='wrapper'>
                <div className='inner__body'>
                  <Tabs>
                    <TabList>
                      <Tab>Description</Tab>
                      <Tab>Reviews (200)</Tab>
                      <Tab>Shipping and Returns</Tab>
                    </TabList>
                    {/* Description Body Section */}
                    <TabPanel>
                      <Row>
                        <Col>
                          <div className='description__section'>
                            <div className='wrapper__inner'>
                              <ul>
                                <li className='d-flex align-items-center '>
                                  <span>Name:</span>
                                  <span>Women's Premium Jeans</span>
                                </li>
                                <li className='d-flex align-items-center '>
                                  <span>Brand:</span>
                                  <span>AVIOR Clothing Ltd.</span>
                                </li>
                                <li className='d-flex align-items-center '>
                                  <span>Product Code:</span>
                                  <span>DF$215230LKMJJUH</span>
                                </li>
                                <li className='d-flex align-items-center '>
                                  <span>Date:</span>
                                  <span>27th January 2022</span>
                                </li>
                                <li className='d-flex align-items-center '>
                                  <span>Materials:</span>
                                  <span>Jeans</span>
                                </li>
                                <li className='d-flex align-items-center color__variation__btn'>
                                  <span>Color Variations:</span>
                                  <div className='variation__btn'>
                                    <span>Blue</span>
                                    <span>Purple</span>
                                    <span>Gray</span>
                                  </div>
                                </li>
                                <li className='d-flex align-items-center size__variation__btn'>
                                  <span>Size Variations:</span>
                                  <div className='variation__btn'>
                                    <span>XL</span>
                                    <span>L</span>
                                    <span>M</span>
                                    <span>S</span>
                                  </div>
                                </li>
                                <li className='d-flex align-items-center tags__variation__btn'>
                                  <span>Tags:</span>
                                  <div className='variation__btn'>
                                    <span>Jeans In Bangladesh</span>
                                    <span>Clothing Brand in Bangladesh</span>
                                    <span>Jeans Pant</span>
                                    <span>Best Ecommerce</span>
                                    <span>Best Brand</span>
                                    <span>Jeans 2023</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPanel>
                    {/* Reviews Body Section */}
                    <TabPanel>
                      <Row>
                        <Col lg={8}>
                          <div className='reviews__section'>
                            <div className='wrapper__inner'>
                              <div className='top__bar'>
                                <div className='imgFile'>
                                  <img
                                    className='img-fluid'
                                    src='/Images/Profile/profile_4.png'
                                    alt=''
                                  />
                                </div>
                                <div className='textFile'>
                                  <div className='userName'>
                                    <h3>Maria Lopa</h3>
                                  </div>
                                  <div className='review'>
                                    <div className='review__text mt--4 pr--10'>
                                      <span>5.0</span>
                                    </div>
                                    <div className='reviewIcon'>
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
                                        <FaStar />
                                      </span>
                                    </div>
                                    <div className='time  pl--10'>
                                      <span className='mt--5'>1 Month Ago</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='bottom__bar'>
                                <div className='review__des'>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Amet a habitant tortor nec.
                                    Rhoncus nullam sit lacus, mi. Tincidunt
                                    ornare sed venenatis quam odio sit. Sed enim
                                    enim cras nibh elit. Leo a habitant aliquam
                                    a, amet, enim mauris eget pretium. Proin
                                    tellus diam, egestas orci. Id at vitae nunc,
                                    fermentum aliquam ultrices massa, pretium.
                                    Sit nulla aliquet nulla felis sed natoque
                                    congue. Eget nunc et ultrices enim sed ac
                                    volutpat. Diam convallis iaculis id leo
                                    vitae purus. Morbi tempor a ac imperdiet
                                    morbi. Eros, purus diam enim blandit elit
                                    enim arcu at proin. Amet quam et.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className='wrapper__inner'>
                              <div className='top__bar'>
                                <div className='imgFile'>
                                  <img
                                    className='img-fluid'
                                    src='/Images/Profile/profile_5.png'
                                    alt=''
                                  />
                                </div>
                                <div className='textFile'>
                                  <div className='userName'>
                                    <h3>John Alex</h3>
                                  </div>
                                  <div className='review'>
                                    <div className='review__text mt--4 pr--10'>
                                      <span>5.0</span>
                                    </div>
                                    <div className='reviewIcon'>
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
                                        <FaStar />
                                      </span>
                                    </div>
                                    <div className='time  pl--10'>
                                      <span className='mt--5'>1 Month Ago</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='bottom__bar'>
                                <div className='review__des'>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Amet a habitant tortor nec.
                                    Rhoncus nullam sit lacus, mi. Tincidunt
                                    ornare sed venenatis quam odio sit. Sed enim
                                    enim cras nibh elit. Leo a habitant aliquam
                                    a, amet, enim mauris eget pretium. Proin
                                    tellus diam, egestas orci.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className='wrapper__inner'>
                              <div className='top__bar'>
                                <div className='imgFile'>
                                  <img
                                    className='img-fluid'
                                    src='/Images/Profile/profile_6.png'
                                    alt=''
                                  />
                                </div>
                                <div className='textFile'>
                                  <div className='userName'>
                                    <h3>Piter Hoker</h3>
                                  </div>
                                  <div className='review'>
                                    <div className='review__text mt--4 pr--10'>
                                      <span>5.0</span>
                                    </div>
                                    <div className='reviewIcon'>
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
                                        <FaStar />
                                      </span>
                                    </div>
                                    <div className='time  pl--10'>
                                      <span className='mt--5'>1 Month Ago</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='bottom__bar'>
                                <div className='review__des'>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Amet a habitant tortor nec.
                                    Rhoncus nullam sit lacus, mi. Tincidunt
                                    ornare sed venenatis quam odio sit. Sed enim
                                    enim cras nibh elit. Leo a habitant aliquam
                                    a, amet, enim mauris eget pretium. Proin
                                    tellus diam, egestas orci. Id at vitae nunc,
                                    fermentum aliquam ultrices massa.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}></Col>
                      </Row>
                    </TabPanel>
                    {/* Shipping and Returns Body Section */}
                    <TabPanel>
                      <Row>
                        <Col lg={8}>
                          <div className='shipping__returns__section'>
                            <div className='wrapper__inner'>
                              <div>
                                <h2>Returns Policy</h2>
                                <p>
                                  You may return most new, unopened items within
                                  30 days of delivery for a full refund. We'll
                                  also pay the return shipping costs if the
                                  return is a result of our error (you received
                                  an incorrect or defective item, etc.).
                                </p>
                                <br />
                                <p>
                                  You should expect to receive your refund
                                  within four weeks of giving your package to
                                  the return shipper, however, in many cases you
                                  will receive a refund more quickly. This time
                                  period includes the transit time for us to
                                  receive your return from the shipper (5 to 10
                                  business days), the time it takes us to
                                  process your return once we receive it (3 to 5
                                  business days), and the time it takes your
                                  bank to process our refund request (5 to 10
                                  business days).
                                </p>
                                <br />
                                <p>
                                  If you need to return an item, simply login to
                                  your account, view the order using the
                                  'Complete Orders' link under the My Account
                                  menu and click the Return Item button. We'll
                                  notify you via e-mail of your refund once
                                  we've received and processed the returned
                                  item.
                                </p>
                              </div>
                              <div className='mt--30'>
                                <h2>Shipping Policy</h2>
                                <p>
                                  We can ship to virtually any address in the
                                  world. Note that there are restrictions on
                                  some products, and some products cannot be
                                  shipped to international destinations.
                                </p>
                                <br />
                                <p>
                                  When you place an order, we will estimate
                                  shipping and delivery dates for you based on
                                  the availability of your items and the
                                  shipping options you choose. Depending on the
                                  shipping provider you choose, shipping date
                                  estimates may appear on the shipping quotes
                                  page.
                                </p>
                                <br />
                                <p>
                                  Please also note that the shipping rates for
                                  many items we sell are weight-based. The
                                  weight of any such item can be found on its
                                  detail page. To reflect the policies of the
                                  shipping companies we use, all weights will be
                                  rounded up to the next full pound.
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}></Col>
                      </Row>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default SingleProductSection;
