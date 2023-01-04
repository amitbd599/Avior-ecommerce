import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Link from "next/link";
import InputRange from "react-input-range";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Select from "react-select";
import SingleProductCard from "../Elements/SingleProductCard";
import AllProducts from "../../Data/AllProducts";
const ShopSection = () => {
  const [value, setValue] = useState({ min: 50, max: 200 });
  const sort = [
    { value: "Sort by latest", label: "Sort by latest" },
    { value: "Popularity", label: "Popularity" },
    { value: "Sort by rating", label: "Sort by rating" },
    { value: "Low to high", label: "Price low to high" },
    { value: "High to low", label: "Price high to low" },
  ];

  const NewestProducts = AllProducts.filter((data) => data.filter === "Newest");
  const TopRatedProducts = AllProducts.filter(
    (data) => data.filter === "Top Rated"
  );
  const FeaturedProducts = AllProducts.filter(
    (data) => data.filter === "Featured"
  );

  console.log(FeaturedProducts);
  return (
    <section id='shopSection'>
      <Container>
        <Row>
          <Col lg={3} className='leftSide'>
            <div className='wrapper'>
              <h2>Filter Option</h2>
            </div>
            <div className='accordion__nav'>
              <div className='inner__body'>
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  {/* For You List */}
                  <AccordionItem uuid='a'>
                    <AccordionItemHeading>
                      <AccordionItemButton>For You</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='inner__accordion'>
                        <Accordion allowZeroExpanded preExpanded={["a"]}>
                          {/* Best Sales */}
                          <AccordionItem uuid='a'>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                Best Sales (105)
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <ul>
                                <li>
                                  <Link href='/'>Juicy Couture</Link>
                                </li>
                                <li>
                                  <Link href='/'>Tommy Bahama</Link>
                                </li>
                                <li>
                                  <Link href='/'>Lois</Link>
                                </li>
                                <li>
                                  <Link href='/'>Mustang</Link>
                                </li>
                                <li>
                                  <Link href='/'>PRPS</Link>
                                </li>
                                <li>
                                  <Link href='/'>James Jeans</Link>
                                </li>
                                <li>
                                  <Link href='/'>Calvin Klein</Link>
                                </li>
                                <li>
                                  <Link href='/'>Lacoste</Link>
                                </li>
                                <li>
                                  <Link href='/'>Hugo Boss</Link>
                                </li>
                              </ul>
                            </AccordionItemPanel>
                          </AccordionItem>
                          {/* Most Sales */}
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                Most Sold (21)
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <ul>
                                <li>
                                  <Link href='/'>Levi Strauss</Link>
                                </li>
                                <li>
                                  <Link href='/'>Diesel</Link>
                                </li>
                                <li>
                                  <Link href='/'>Lee</Link>
                                </li>
                                <li>
                                  <Link href='/'>G-Star</Link>
                                </li>
                                <li>
                                  <Link href='/'>True Religion</Link>
                                </li>
                                <li>
                                  <Link href='/'>Guess</Link>
                                </li>
                                <li>
                                  <Link href='/'>Carhartt</Link>
                                </li>
                                <li>
                                  <Link href='/'>Pepe Jeans</Link>
                                </li>
                                <li>
                                  <Link href='/'>Uniqlo</Link>
                                </li>
                              </ul>
                            </AccordionItemPanel>
                          </AccordionItem>
                          {/* Newest */}
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                Newest (32)
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <ul>
                                <li>
                                  <Link href='/'>Buffalo David Bitton</Link>
                                </li>
                                <li>
                                  <Link href='/'>DKNY</Link>
                                </li>
                                <li>
                                  <Link href='/'>Marc Ecko</Link>
                                </li>
                                <li>
                                  <Link href='/'>Marlboro Classics</Link>
                                </li>
                                <li>
                                  <Link href='/'>Alfani</Link>
                                </li>
                                <li>
                                  <Link href='/'>Royal Premium Denim</Link>
                                </li>
                                <li>
                                  <Link href='/'>Marithe</Link>
                                </li>
                              </ul>
                            </AccordionItemPanel>
                          </AccordionItem>
                          {/* Featured */}
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                Featured (129)
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <ul>
                                <li>
                                  <Link href='/'>Francois Girbaud</Link>
                                </li>
                                <li>
                                  <Link href='/'>Lucky Brand Jeans</Link>
                                </li>
                                <li>
                                  <Link href='/'>Nautical Group</Link>
                                </li>
                                <li>
                                  <Link href='/'>Aeropostale</Link>
                                </li>
                                <li>
                                  <Link href='/'>Vince Camuto</Link>
                                </li>
                                <li>
                                  <Link href='/'>
                                    INC International Concepts
                                  </Link>
                                </li>
                                <li>
                                  <Link href='/'>Izod</Link>
                                </li>
                              </ul>
                            </AccordionItemPanel>
                          </AccordionItem>
                          {/* Most Popular */}
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                Most Popular (44)
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <ul>
                                <li>
                                  <Link href='/'>Union Bay</Link>
                                </li>
                                <li>
                                  <Link href='/'>American Rag</Link>
                                </li>
                                <li>
                                  <Link href='/'>Request Inc</Link>
                                </li>
                                <li>
                                  <Link href='/'>Affliction Clothing</Link>
                                </li>
                                <li>
                                  <Link href='/'>Joe’s</Link>
                                </li>
                                <li>
                                  <Link href='/'>Trukfit</Link>
                                </li>
                                <li>
                                  <Link href='/'>Nautical</Link>
                                </li>
                              </ul>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  {/* Color */}
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Color</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='inner__accordion__color'>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Slate' />
                          </span>
                          <label htmlFor='Slate'>Slate</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Gray' />
                          </span>
                          <label htmlFor='Gray'>Gray</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Zinc' />
                          </span>
                          <label htmlFor='Zinc'>Zinc</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Stone' />
                          </span>
                          <label htmlFor='Stone'>Stone</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Orange' />
                          </span>
                          <label htmlFor='Orange'>Orange</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Amber' />
                          </span>
                          <label htmlFor='Amber'>Amber</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Sky' />
                          </span>
                          <label htmlFor='Sky'>Sky</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Blue' />
                          </span>
                          <label htmlFor='Blue'>Blue</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Yellow' />
                          </span>
                          <label htmlFor='Yellow'>Yellow</label>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  {/* Tags */}
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Tags</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='inner__accordion__tag'>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Man' />
                          </span>
                          <label htmlFor='Man'>Man</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Womens' />
                          </span>
                          <label htmlFor='Womens'>Womens</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Kids' />
                          </span>
                          <label htmlFor='Kids'>Kids</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Unisex' />
                          </span>
                          <label htmlFor='Unisex'>Unisex</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Summer' />
                          </span>
                          <label htmlFor='Summer'>Summer</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Winter' />
                          </span>
                          <label htmlFor='Winter'>Winter</label>
                        </div>
                        <div className='d-flex item'>
                          <span>
                            <input type='checkbox' name='' id='Featured' />
                          </span>
                          <label htmlFor='Featured'>Featured</label>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  {/* Price Range */}
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Price Range</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='inner__accordion__price'>
                        <InputRange
                          maxValue={500}
                          minValue={20}
                          value={value}
                          formatLabel={(value) => `${value}$`}
                          onChange={(initValue) => setValue(initValue)}
                        />
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className='Btn'>
                <div className='refineBtn'>
                  <button>Refine Search</button>
                </div>
                <div className='resetBtn'>
                  <button>Reset Filter</button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={9} className='rightSide'>
            <div className='wrapper'>
              <h2>Shop</h2>
            </div>
            <div className='intro__box'>
              <div className='tab__filter'>
                <div>
                  <Tabs>
                    <TabList>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='leftTab'>
                          <Tab>All</Tab>
                          <Tab>Newest</Tab>
                          <Tab>Top Rated</Tab>
                          <Tab>Featured</Tab>
                        </div>
                        <div className='rightTab d-flex justify-content-between align-items-center'>
                          <div className='pr--10'>
                            <span>Sort By :</span>
                          </div>
                          <div className='select__body'>
                            <Select
                              className='select__color'
                              defaultValue={sort[0]}
                              options={sort}
                              styles={{
                                option: (provided, state) => ({
                                  ...provided,
                                  borderBottom: "1px solid #ddd",
                                  color: state.isSelected ? "#fff" : "#666",
                                  background: state.isSelected
                                    ? "#0D59EF"
                                    : "#fff",
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
                      </div>
                    </TabList>
                    {/* All Product Data */}
                    <TabPanel>
                      <div className='wrapper'>
                        <Row>
                          {AllProducts.slice(0, 9).map((item, index) => (
                            <Col lg={4} key={index} className='mb--20'>
                              <SingleProductCard item={item} />
                            </Col>
                          ))}
                        </Row>
                        <div className='pagination'>
                          <div className='pagination__inner'>
                            <span>Next</span>
                            <span className='active'>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>Prev</span>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    {/* Newest Product Data */}
                    <TabPanel>
                      <div className='wrapper'>
                        <Row>
                          {NewestProducts.map((item, index) => (
                            <Col lg={4} key={index} className='mb--20'>
                              <SingleProductCard item={item} />
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </TabPanel>
                    {/* Top Rated Product Data */}
                    <TabPanel>
                      <div className='wrapper'>
                        <Row>
                          {TopRatedProducts.map((item, index) => (
                            <Col lg={4} key={index} className='mb--20'>
                              <SingleProductCard item={item} />
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </TabPanel>
                    {/* Featured Product Data */}
                    <TabPanel>
                      <div className='wrapper'>
                        <Row>
                          {FeaturedProducts.map((item, index) => (
                            <Col lg={4} key={index} className='mb--20'>
                              <SingleProductCard item={item} />
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopSection;
