/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";

// core components

function RecentProjects() {
  const [activePill, setActivePill] = React.useState("1");
  return (
    <>
      <div className="projects-3 section-gray" id="projects-3">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <div className="space-top" />
              <h2 className="title">Jenny Carly's Latest Creations</h2>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <Link to="/interiors/uws">
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachments/65f9f121f27a186b3ac8e6d50ddc968c/07f65c40/image-asset.jpeg"
                    />
                  </Link>
                </CardImg>
                <CardBody>
                  <Badge className="main-tag" color="primary">
                    Interiors
                  </Badge>
                  <CardTitle tag="h4">Upper West Side Roof Top</CardTitle>
                  <p className="card-description">
                    The following is a private client residential design. Images
                    Pending
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <Link to="/production/orient">
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachments/df2ac6891edff3a8fe43b849f0a5e257/e9bdae79/main_image_slider.jpg"
                    />
                  </Link>
                </CardImg>
                <CardBody>
                  <Badge className="main-tag" color="danger">
                    production
                  </Badge>
                  <CardTitle tag="h4">Postcards from the Orient</CardTitle>
                  <p className="card-description">
                    Production Designer for Postcards from the Orient
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <Link to="/styling/mazza">
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachments/ef3d15880cd10c153731427b7c1d84ac/259ded92/Mazza_Mixed_W_M_pieces_038_1-Retouched.jpg"
                    />
                  </Link>
                </CardImg>
                <CardBody>
                  <Badge className="main-tag" color="warning">
                    Styling
                  </Badge>
                  <CardTitle tag="h4">Mazza New York</CardTitle>
                  <p className="card-description">
                    The following is a styling photoshoot to develop marketing
                    content for Mazza NYC
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RecentProjects;
