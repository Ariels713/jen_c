import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionHeader() {
  return (
    <>
      {/* ********* FEATURES 4 ********* */}
      <div className="features-4" style={{ paddingBottom: "2%" }}>
        <Container md="12">
          <Row>
            <Col
              className="ml-auto mr-auto text-center"
              md="8"
              style={{ marginBottom: "5%" }}
            >
              <h2 className="title">Aloha</h2>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <div className="ipad-container">
                <img
                  alt="..."
                  src="https://dl.airtable.com/.attachments/c37797dcf0407f4d9bb5d5d9a8892ad6/b55976e0/about_image_jenny.jpg"
                />
              </div>
            </Col>
            <Col md="6">
              <div className="info info-horizontal">
                {/* <div className="info info-horizontal"></div> */}
                <div className="description">
                  <h3 className="info-title">I'm Jenny</h3>
                  <p style={{ margin: "5% auto" }}>
                    I’m Jenny, a passionate Georgia-bred Puerto Rican. I eat,
                    breathe, and dream of art, design and experience while my
                    pores ooze of inspiration... I am an expert of identifying,
                    sharing, and making great things and environments both in
                    real life and virtually.
                  </p>
                  <p>
                    I began my creative design journey with a BFA in Interior
                    Design from SCAD. It is my fascination of the psychology of
                    space, good design, and human experience that got me
                    started… I then quickly learned how to fuse this knowledge
                    with my love for art and my keen visionary mind. My
                    superpowers are: re-envisioning, producing, and designing
                    space to perfection from conception to completion.
                  </p>
                  <p style={{ margin: "5% auto" }}>
                    In addition to my 10+ years of design experience with a
                    focus in interiors, production, and styling, a unique asset
                    that I have is my extensive public relations experience
                    which has given me a strength in creative marketing. I
                    understand and communicate a clear direction of a brand or
                    individual’s social presence and branding. By identifying
                    WHO the individual or brand is, WHAT they want, and WHERE
                    they want to go, I provide deep knowledge of how to sell,
                    entice, and bring positive and necessary attention to
                    themselves.
                  </p>
                  <p>
                    The future of the world requires innovative, passionate, and
                    compassionate people. Let’s collaborate and let me help you
                    with your creative vision(s).
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionHeader;
