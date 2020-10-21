import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function BlogPosts() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
    };
  });

  useEffect(() => {
    const aboutMe = async (event) => {
      try {
        const res = await fetch("/.netlify/functions/blogPostTable");
        const data = await res.json();
        setImages(data);
        setIsLoading(false);
      } catch (err) {}
    };

    aboutMe();
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>Jenny from the Blawg</h2>
                  <h3 className="title-uppercase">
                    <small>I have a story to tell you</small>
                  </h3>
                </Col>
              </Row>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised"
                          src="https://dl.airtable.com/.attachments/21d7a9698064822dbf264ed05a76322d/56d47b4b/Goodvibesroof.jpeg"
                        />
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="primary">
                            Experience
                          </Badge>
                        </div>

                        <CardTitle tag="h3">Sandbar Rooftop</CardTitle>
                        <h6 className="card-category ">August 28th, 2020</h6>
                        <div className="card-description">
                          <p>
                            Let’s face it, 2020 needs a major redo and so many
                            summer traditions (like NYC happy hour rooftop
                            outings) have been taken away. Yesterday I got the
                            privilege to be amongst the first to experience the
                            new Sandbar Rooftop in Chelsea. LOVED IT!
                          </p>
                        </div>
                      </CardBody>
                      <Link to={`/blawg/sandbar`} exact>
                        <Button className="btn-round" color="danger">
                          Read More
                        </Button>
                      </Link>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised"
                          src="https://dl.airtable.com/.attachments/1df9e0c846cdcbde13e58c2a4049a120/7ab58187/ScreenShot2020-08-17at1_48_55PM.png"
                        />
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="danger">
                            Culture
                          </Badge>
                        </div>

                        <CardTitle tag="h3">
                          Black Is King - Production Design
                        </CardTitle>
                        <h6 className="card-category ">August 18th, 2020</h6>
                        <div className="card-description">
                          <p>
                            It’s important now more than ever to know who you
                            are, where you come from, and what you want from and
                            in life. It is important to know your values and The
                            Circle of Life.
                          </p>
                        </div>
                      </CardBody>
                      <Link to={`/blawg/blackisking`} exact>
                        <Button className="btn-round" color="danger">
                          Read More
                        </Button>
                      </Link>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />

              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised"
                          src="https://dl.airtable.com/.attachments/29ee6d2cc47f0f51feb0436eea749857/06d79d81/original.jpg"
                        />
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="warning">
                            Design
                          </Badge>
                        </div>

                        <CardTitle tag="h3">
                          Destructing Art of the Past for a Brighter Tomorrow
                        </CardTitle>
                        <h6 className="card-category ">August 18th, 2020</h6>
                        <div className="card-description">
                          <p>
                            It is the last few days in June 2020, and if I’m
                            honest it’s given me whiplash. This has been a heavy
                            month of thinking, re-rethinking, immense anger,
                            activism, and fear. I have learned so much more
                            about myself and have tried educating myself more
                            technically, artistically, socially, and
                            politically….. But I have a long way to go.
                          </p>
                        </div>
                      </CardBody>
                      <Link to={`/blawg/destructure`} exact>
                        <Button className="btn-round" color="danger">
                          Read More
                        </Button>
                      </Link>
                    </Card>
                  </Col>
                </Row>
              </div>

              <hr />
              <Row>
                <Col md="12">
                  <div className="pull-left">
                    <Button
                      className="btn-link btn-move-left"
                      color="default"
                      size="sm"
                    >
                      <i className="fa fa-angle-left mr-1" />
                      Older Posts
                    </Button>
                  </div>
                  <div className="pull-right">
                    <Button
                      className="btn-link btn-move-right"
                      color="default"
                      size="sm"
                    >
                      Newer Posts <i className="fa fa-angle-right" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPosts;
// 8 / 28 - experience;
// 8 / 18 - culture;
// 6 / 29 - design;
