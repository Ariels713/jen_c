import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
function Productions() {
  return (
    <>
      <div
        className="section text-center landing-section"
        style={{ paddingBottom: 0 }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Fuzzy Head Film</h2>
              <h5>
                Production Designer for Fuzzy Head Film, an indie film
                production
              </h5>
              <h5>FINAL PRODUCTION DATE: COMING SOON!</h5>
              <h6 className="card-category text-success">
                Director: Wendy McColm
              </h6>
              <h6 className="card-category text-success">
                Director of Photography: Sonja Tsypin
              </h6>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
      <div className="section secion-blog cd-section" id="blogs">
        <div className="blog-4">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img img-raised"
                      src="https://dl.airtable.com/.attachments/29495f22b802fbbde74e0675c5f07485/25129aef/contact_us_page_image.jpg"
                    />
                  </div>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img img-raised"
                      src="https://dl.airtable.com/.attachments/29495f22b802fbbde74e0675c5f07485/25129aef/contact_us_page_image.jpg"
                    />
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Productions;
