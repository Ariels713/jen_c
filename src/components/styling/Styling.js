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
import StylingHeader from "./StylingHeader";
function Styling() {
  return (
    <>
      <StylingHeader />
      <div
        className="section text-center landing-section"
        style={{ paddingBottom: 0 }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">
                Film & Photography Interiors and Prop Stylist{" "}
              </h2>
              <h5>
                Working with brands, photographers, real estate agents, and
                other creatives to stage interior spaces to be photographed,
                showed or sold.
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
                <h2 className="title text-center">Styling</h2>
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
                      src="https://dl.airtable.com/.attachments/51908a946cc3ce047291f6740b152398/42acce0d/Mazza_LS_patekmoneyshot_064_1-Retouched.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Styling</h6>
                    <CardTitle tag="h3">Mazza NYC</CardTitle>
                    <p className="card-description">
                      The following is a styling photoshoot to develop marketing
                      content for Mazza NYC
                    </p>
                    <br />
                    <Link to={`/styling/mazza`} exact>
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
                      src="https://dl.airtable.com/.attachments/3f3a1c5e93fbeb90a61dc78f3df1cc2e/2a9a18fc/IMG_2156.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Styling</h6>
                    <CardTitle tag="h3">LDSass Jewlery</CardTitle>

                    <br />
                    <Link to="/syling/ldsass">
                      <Button className="btn-round" color="success" disabled>
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
                      src="https://dl.airtable.com/.attachments/c00823dd3570d6e3d08e34ae83446cae/fe46745d/20191202_DOJI_Shot2_FreshCitrus_029_MAIN.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Styling</h6>
                    <CardTitle tag="h3">Doji Natural Deodorant</CardTitle>
                    <p className="card-description">
                      The following is a styling photoshoot to develop social
                      media & marketing content{" "}
                    </p>

                    <br />
                    <Link to="/styling/doji">
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
                      src="https://dl.airtable.com/.attachmentThumbnails/6a40f25a892f337f9766cfb425c127aa/dd1271e2"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Styling</h6>
                    <CardTitle tag="h3">Emily Fitzpatrick Ceramics</CardTitle>
                    <p className="card-description">
                      Product & Photography Stylist{" "}
                    </p>

                    <br />
                    <Link to="/styling/fitzpatrick">
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

export default Styling;
