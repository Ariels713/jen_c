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
                    <CardTitle tag="h3">Fuzzy Head Film</CardTitle>
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
                    <CardTitle tag="h3">Postcards from the Orient</CardTitle>
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
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img img-raised"
                      src="https://dl.airtable.com/.attachments/a217aadfd381287808c01bfaad7b41c3/45b3b5e4/montblanc_Option1.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">Montblanc x The Webster</CardTitle>
                    <p className="card-description">
                      The is a freelance project worked with{" "}
                    </p>

                    <br />
                    <Link to="/production/montblanc">
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
                      src="https://dl.airtable.com/.attachments/c1e82ce3a5c09bad802d45ec60013c25/5fdd2f15/MV5BMDE4NDNmNDItMzA4ZC00MmE0LTg4ZTctYmNkYjE0ODRlNjViXkEyXkFqcGdeQXVyMTQ4NDY5OTc__V1_.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">Funny Face Film</CardTitle>
                    <p className="card-description">
                      Scenic Prop Artist | Car Destruction & Mask Art Details{" "}
                    </p>
                    <br />
                    <Link to="/production/funnyface">
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
                      src="https://dl.airtable.com/.attachments/4df001a436e133bd5525d62994f63680/a128f4cb/IMG_4603.png"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">Biology + Fossils</CardTitle>
                    <p className="card-description">
                      Production Design for Museum of Natural History NYC
                      holiday event
                    </p>
                    <br />
                    <Link to="/production/museum">
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
                      src="https://dl.airtable.com/.attachments/f67ec7b1eec383b977481cae9a331f1a/3459bc2f/NYBGOrchidDinner-Karen-2-LowRes.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">
                      Aux Abris - NYBG Orchid Dinner
                    </CardTitle>
                    <p className="card-description">
                      The following is table design that I helped construct with
                      Aux Abris for the annual NY Botanical Garden Fundraising
                      Gala. The Design look and concept was done by Karen
                      Roberts founder & CEO of Aux Abris
                    </p>
                    <div className="separator" style={{ padding: 0 }} />
                    <br />
                    <Link to="/production/orchid">
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
                      src="https://dl.airtable.com/.attachments/d404a23f90180aa59a7a66b9da46a3cf/22c511d7/IMG_2904.jpg"
                    />
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Production</h6>
                    <CardTitle tag="h3">Tribecca Wedding</CardTitle>
                    <p className="card-description">
                      Production Design for Beautiful Wedding in Tribecca NYC.
                    </p>
                    <div className="separator" style={{ padding: 0 }} />
                    <br />
                    <Link to="/production/tribecca">
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
