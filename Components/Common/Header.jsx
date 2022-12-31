import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillCartPlusFill, BsHeartFill, BsSearch } from "react-icons/bs";
import {
  FaBellSlash,
  FaChevronDown,
  FaEnvelopeOpenText,
  FaExclamationTriangle,
  FaQuestion,
  FaSignOutAlt,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header>
        <div id='header__area'>
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
              <Col lg={6}>
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
              <Col lg={4}>
                <div className='user__section'>
                  <div className='d-flex justify-content-end'>
                    <div className='cart__hart__icon d-flex align-items-center pr--5 position-relative'>
                      <span className='hartIcon'>
                        <BsHeartFill />
                      </span>
                      <span className='hartIconItems'>5</span>
                    </div>
                    <div className='cart__hart__icon d-flex align-items-center pr--20 position-relative'>
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
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
