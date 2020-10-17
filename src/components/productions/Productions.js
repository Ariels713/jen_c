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
import ProductionHeaders from "./ProductionsHeader";
function Productions() {
  return (
    <>
      <ProductionHeaders />
      <div
        className="section text-center landing-section"
        style={{ paddingBottom: 0 }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">
                Events, Film & Cinematography Production Designer{" "}
              </h2>
              <h5>
                As a production designer I design, lead, produce, and transform
                space. Whether it’s behind a lens or a tangible area I fuse art
                and design to produce experience
              </h5>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
      <div className="section secion-blog cd-section" id="blogs">
        <div className="blog-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title text-center">Production</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img img-raised"
                      src="https://dl.airtable.com/.attachments/1b60fac84a05423f0876efefb45039fa/6c7a2eca/IMG_70911.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Fuzzy Head Film
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Production Designer for Fuzzy Head Film, an indie film
                      production
                    </p>
                    <br />
                    <Link to={`/production/fuzzyhead`} exact>
                      <Button className="btn-round" color="success">
                        Read More
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img img-raised"
                      src="https://dl.airtable.com/.attachments/a4c67d0253964971ebdf9d348aa6e525/4af9b59f/123.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Postcards from the Orient
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Production Designer for Postcards from the Orient
                    </p>
                    <br />
                    <Link to="/production/orient">
                      <Button className="btn-round" color="success">
                        Read More
                      </Button>
                    </Link>
                  </CardBody>
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
