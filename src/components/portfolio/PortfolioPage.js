import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionBlog() {
  return (
    <>
      <div className="section secion-blog cd-section" id="blogs">
        {/* ********* BLOGS 1 ********* */}
        <div className="blog-1" id="blog-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts</h2>
                <br />
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src="https://dl.airtable.com/.attachments/21d7a9698064822dbf264ed05a76322d/56d47b4b/Goodvibesroof.jpeg"
                        />
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <h6 className="card-category text-info">Enterprise</h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            The four waves of augmented reality
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Sharing processing, display and sensors across
                          smartphones and tethered smartglasses gives you two
                          batteries, each powering fewer individual systems. If
                          they’re connected by a cable, this could give a
                          healthy bump to battery life — and…{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <b>Tim Merel</b>
                          </a>
                          , 11 hours ago
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">
                      <CardBody>
                        <h6 className="card-category text-danger">
                          <i className="fa fa-free-code-camp mr-1" />
                          Trending
                        </h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Okoli connects you with tour guides around the world
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Okoli is a new service by developer Jack Deneut that
                          aims to replace those ugly little cards you find in
                          tourist hotels. The web app, which currently works in
                          Prague, Budapest, Berlin and Paris, lets you reserve a
                          nearly private tour with a professional guid — and…{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <b>John Biggs</b>
                          </a>
                          , 3 seconds ago
                        </p>
                      </CardBody>
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src="https://dl.airtable.com/.attachments/21d7a9698064822dbf264ed05a76322d/56d47b4b/Goodvibesroof.jpeg"
                        />
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END BLOGS 1 ********* */}
      </div>
    </>
  );
}

export default SectionBlog;
