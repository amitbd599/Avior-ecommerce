import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillCartPlusFill, BsHeartFill, BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import {
  FaBellSlash,
  FaChevronDown,
  FaEnvelopeOpenText,
  FaExclamationTriangle,
  FaLongArrowAltRight,
  FaQuestion,
  FaSignOutAlt,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
const Header = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const controlCartSideBar = () => {
    setActive(!active);
  };
  return (
    <>
      <header>
        <div id='header__area'>
          {/* Header Top Section */}
          <Container>
            <Row>
              <Col lg={2}>
                <div className='logo__section d-flex align-items-center'>
                  <div className='img__file'>
                    <Link href={"/"}>
                      <img
                        className='img-fluid'
                        src='/Images/Header/logo.png'
                        alt=''
                      />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <div className='category__section rounded'>
                  <div className='w-100'>
                    <div className='w-100 wrapper'>
                      <div className='w-100'>
                        <div className='d-flex justify-content-between'>
                          <div className='dropdown__menu'>
                            <div className='category__box'>
                              <div className='cursor-pointer'>
                                <span>Category</span>
                                <span className='pl--5'>
                                  <FaChevronDown />
                                </span>
                              </div>
                              <div className='nav drop-shadow-md'>
                                <nav className='w-100'>
                                  <ul>
                                    <li>
                                      <Link href={"/"}>Wrangler</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Lee</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Levi's</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Rare Rabbit</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Pepe Jeans</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Diesel</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Mufti</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Jack & Jones</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Killer</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Lee Cooper</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Numero Uno</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>USPA</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Roadster</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Allen Solly</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Arrow</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Calvin Klein Jeans</Link>
                                    </li>
                                    <li>
                                      <Link href={"/"}>Ralph Lauren</Link>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div className='input__field'>
                            <div className='w-100 '>
                              <div className='d-flex'>
                                <input
                                  type='text'
                                  placeholder='Search products here'
                                />
                                <span>
                                  <BsSearch />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <div className='user__section'>
                  <div className='d-flex justify-content-end'>
                    <div className='all__page d-flex align-items-center pr--5 position-relative'>
                      <div className='dropdown__menu'>
                        <div className='category__box'>
                          <div className='cursor-pointer'>
                            <span>All Pages</span>
                            <span className='pl--5'>
                              <FaChevronDown />
                            </span>
                          </div>
                          <div className='nav drop-shadow-md'>
                            <nav className='w-100'>
                              <ul>
                                <li
                                  className={
                                    router.pathname == "/" ? "active" : ""
                                  }
                                >
                                  <Link href={"/"}>Home</Link>
                                </li>
                                <li
                                  className={
                                    router.pathname == "/about" ? "active" : ""
                                  }
                                >
                                  <Link href={"/about"}>About US</Link>
                                </li>
                                <li
                                  className={
                                    router.pathname == "/cart" ? "active" : ""
                                  }
                                >
                                  <Link href={"/cart"}>Cart</Link>
                                </li>
                                <li
                                  className={
                                    router.pathname == "/checkout"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <Link href={"/checkout"}>Checkout</Link>
                                </li>
                                <li
                                  className={
                                    router.pathname == "/shop" ? "active" : ""
                                  }
                                >
                                  <Link href={"/shop"}>Shop</Link>
                                </li>
                                <li
                                  className={
                                    router.pathname == "/single-product"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <Link href={"/single-product"}>
                                    Single Product
                                  </Link>
                                </li>
                                <li
                                  className={
                                    router.pathname == "/contact"
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <Link href={"/contact"}>Contact</Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='cart__hart__icon d-flex align-items-center pr--5 position-relative'>
                      <Link href={"/cart"}>
                        <span className='hartIcon'>
                          <BsHeartFill />
                        </span>
                        <span className='hartIconItems'>5</span>
                      </Link>
                    </div>
                    <div
                      className='cart__hart__icon d-flex align-items-center pr--20 position-relative'
                      onClick={controlCartSideBar}
                    >
                      <span className='cartIcon'>
                        <BsFillCartPlusFill />
                      </span>
                      <span className='cartIconItems'>3</span>
                    </div>
                    <div className='user__profile position-relative'>
                      <div className='d-flex justify-content-between cursor-pointer'>
                        <div className='img__file'>
                          <img
                            className='img-fluid'
                            src='/Images/Profile/user.png'
                            alt=''
                          />
                        </div>
                        <div className='pl--15 text__file'>
                          <div>
                            <h3 className='user__name'>Alex John</h3>
                            <span>alex@demo.com</span>
                          </div>
                          <div>
                            <span className='pl--20'>
                              <FaChevronDown />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='userProfileData position-absolute drop-shadow-md'>
                        <div className='userProfileData__body'>
                          <div className='heading__text'>
                            <h4>Welcome Alex John!</h4>
                          </div>
                          <div>
                            <ul className='userProfileData__items'>
                              <li>
                                <Link
                                  href={"/"}
                                  className='d-flex align-items-center item'
                                >
                                  <FaUserTie className='d-block' />
                                  <span className='pl--5  mt--3'>Profile</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className='d-flex align-items-center item'
                                >
                                  <FaEnvelopeOpenText className='d-block' />
                                  <span className='pl--5  mt--3'>Messages</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className='d-flex align-items-center item'
                                >
                                  <FaExclamationTriangle className='d-block' />
                                  <span className='pl--5  mt--3'>Help</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className='d-flex align-items-center item'
                                >
                                  <FaQuestion className='d-block' />
                                  <span className='pl--5  mt--3'>FAQ</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className='d-flex align-items-center item'
                                >
                                  <FaBellSlash className='d-block' />
                                  <span className='pl--5  mt--3'>
                                    Notification
                                  </span>
                                </Link>
                              </li>
                            </ul>
                            <hr />
                            <ul className='userProfileData__items'>
                              <li>
                                <Link
                                  href={"/"}
                                  className='d-flex align-items-center item'
                                >
                                  <FaSignOutAlt className='d-block' />
                                  <span className='pl--5  mt--3'>Logout</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className='d-flex align-items-center item'
                                >
                                  <FaUserFriends className='d-block' />
                                  <span className='pl--5  mt--3'>Support</span>
                                  <span className='badgeBtn'>New</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/* Overlay Section */}

            <div className={active ? "overlay__cart active" : "overlay__cart"}>
              <div className='wrapper'>
                <div className='inner__wrapper'>
                  <div className='header__intro'>
                    <div>
                      <h2>SHOPPING CART</h2>
                    </div>
                    <div onClick={controlCartSideBar}>
                      <span className='close__icon'>
                        Close <FaLongArrowAltRight />
                      </span>
                    </div>
                  </div>
                  {/* Cart Items */}
                  <div className='inner__cart__items'>
                    <div className='inner__cart'>
                      <div className='text__file'>
                        <p>Original brand gift ladies</p>
                        <div className='price'>
                          <span>1 x 250</span>
                        </div>
                      </div>
                      <div className='img__file'>
                        <img src='/Images/allProduct/product_2.png' alt='' />
                      </div>
                      <div className='close__icon'>
                        <span>
                          <GrClose />
                        </span>
                      </div>
                    </div>
                    <div className='inner__cart'>
                      <div className='text__file'>
                        <p>Original brand gift ladies</p>
                        <div className='price'>
                          <span>1 x 250</span>
                        </div>
                      </div>
                      <div className='img__file'>
                        <img src='/Images/allProduct/product_3.png' alt='' />
                      </div>
                      <div className='close__icon'>
                        <span>
                          <GrClose />
                        </span>
                      </div>
                    </div>
                    <div className='inner__cart'>
                      <div className='text__file'>
                        <p>Original brand gift ladies</p>
                        <div className='price'>
                          <span>1 x 250</span>
                        </div>
                      </div>
                      <div className='img__file'>
                        <img src='/Images/allProduct/product_4.png' alt='' />
                      </div>
                      <div className='close__icon'>
                        <span>
                          <GrClose />
                        </span>
                      </div>
                    </div>
                    <div className='inner__cart'>
                      <div className='text__file'>
                        <p>Original brand gift ladies</p>
                        <div className='price'>
                          <span>1 x 250</span>
                        </div>
                      </div>
                      <div className='img__file'>
                        <img src='/Images/allProduct/product_5.png' alt='' />
                      </div>
                      <div className='close__icon'>
                        <span>
                          <GrClose />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Sub Total */}
                  <div className='sub__total'>
                    <div className='inner__item'>
                      <hr />
                      <div className='intro__header'>
                        <h2>Subtotal:</h2>
                        <h2>$ 2500.00</h2>
                      </div>
                    </div>
                  </div>
                  {/* Cart Button */}
                  <div className='cart__button'>
                    <div>
                      <button className='btn-big-full-bg'>VIEW CART</button>
                    </div>
                    <div>
                      <button className='btn-big-full-outline'>CHECKOUT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
