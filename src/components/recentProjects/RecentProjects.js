/*eslint-disable*/
import React from "react";

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
                  <a
                    href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachments/df2ac6891edff3a8fe43b849f0a5e257/e9bdae79/main_image_slider.jpg"
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category">Interiors</h6>
                  <CardTitle tag="h4">
                    Beautiful Desktop for Designers
                  </CardTitle>
                  <p className="card-description">
                    As this technology matures it will be cool to see what
                    hackers are able to do with it.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <a
                    href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachments/df2ac6891edff3a8fe43b849f0a5e257/e9bdae79/main_image_slider.jpg"
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category">Production</h6>
                  <CardTitle tag="h4">
                    Famous Website Redesign Implementation
                  </CardTitle>
                  <p className="card-description">
                    Streaming services once again top the list of this year’s
                    Emmy nominations
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardImg top tag="div">
                  <a
                    href="https://dl.airtable.com/.attachments/df2ac6891edff3a8fe43b849f0a5e257/e9bdae79/main_image_slider.jpg"
                    target="_blank"
                  >
                    <img
                      alt="..."
                      className="img"
                      src="https://dl.airtable.com/.attachments/df2ac6891edff3a8fe43b849f0a5e257/e9bdae79/main_image_slider.jpg"
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <h6 className="card-category">Styling</h6>
                  <CardTitle tag="h4">
                    The Best Productivity Applications
                  </CardTitle>
                  <p className="card-description">
                    Dietary supplements don’t need approval from the Food and
                    Drug Administration.
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
