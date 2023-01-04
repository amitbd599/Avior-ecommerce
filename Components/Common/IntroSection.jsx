import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const IntroSection = ({ pageName }) => {
  return (
    <section id='introSection'>
      <Container>
        <Row>
          <Col>
            <div className='wrapper'>
              <div className='text'>
                <Link href={"/"}>Home</Link> / <span>{pageName}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IntroSection;
