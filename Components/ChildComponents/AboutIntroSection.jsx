import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutIntroSection = ({ title }) => {
  return (
    <section id='aboutIntroSection'>
      <Container>
        <Row>
          <Col>
            <div className='wrapper'>
              <div className='heading__text'>
                <h2>About AVIOR</h2>
              </div>
              <div className='des'>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutIntroSection;
