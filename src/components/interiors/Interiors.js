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
import InteriorsHeader from "./InteriorsHeader";
function Interiors() {
  return (
    <>
      <InteriorsHeader />
      <div
        className="section text-center landing-section"
        style={{ paddingBottom: 0 }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">
                Residential, Retail & Hospitality Interior Designer{" "}
              </h2>
              <h5>
                As a trained interior designer with a BFA from SCAD I believe
                well thought out interior spaces that represent: the owner,
                users purpose, organization, and style, is essential to the
                human psyche. I am a transformer of designated space and area.
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
                <h2 className="title text-center">Interiors</h2>
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
                      src="https://dl.airtable.com/.attachments/9580b91941ee28c912acab061323e657/3eba41f1/ScreenShot2020-02-26at9_20_00AM.png"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Interiors</h6>
                    <CardTitle tag="h3">
                      Forest Hills Residential Project
                    </CardTitle>
                    <p className="card-description">
                      The following is a private client residential design.
                      Images Pending
                    </p>
                    <br />
                    <Link to={`/interiors/forest`} exact>
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
                      src="https://dl.airtable.com/.attachments/8d0b2841de77d2cd7228797141490ca4/32406758/IMG_8207.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">Upper West Side Rooftop</CardTitle>
                    <p className="card-description">
                      The following is a private client residential design.
                      Images Pending
                    </p>
                    <br />
                    <Link to="/interiors/uws">
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
                      src="https://dl.airtable.com/.attachments/53c5ee40de3b29e87d2ca1ee14cf0a85/7a07033c/img001.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">Residential Marker Rendering</CardTitle>
                    <p className="card-description">
                      The is a freelance project worked with{" "}
                    </p>

                    <br />
                    <Link to="/interiors/rendering">
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

export default Interiors;
