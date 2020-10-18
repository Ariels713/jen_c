import React from "react";

// reactstrap components
import { Badge, Card, Container, Row, Col } from "reactstrap";

// core components

function BlogPost() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  });
  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <div className="text-center">
                    <Badge className="main-tag" color="danger">
                      Culture
                    </Badge>
                    <a href="javascrip: void(0);">
                      <h3 className="title">
                        Black Is King - Production Design
                      </h3>
                    </a>
                    <h6 className="title-uppercase">August 18, 2020</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage: `url(${"https://dl.airtable.com/.attachments/1df9e0c846cdcbde13e58c2a4049a120/7ab58187/ScreenShot2020-08-17at1_48_55PM.png"})`,
                      }}
                    />
                    <p className="image-thumb text-center">Photo by</p>
                  </a>
                  <div className="article-content">
                    <h4>It’s important now more than ever</h4>
                    <p>
                      to know who you are, where you come from, and what you
                      want from and in life. It is important to know your values
                      and The Circle of Life.
                    </p>
                    <p>
                      The new Beyoncé produced Disney movie “Black is King” is a
                      much-needed celebration of Black and African culture. It
                      takes the story and some audio from the beloved Disney
                      classic The Lion King and translates it from a cartoon to
                      a modern music video walkthrough of the true history of
                      “The Circle of Life.” This movie touched my soul and
                      amazed me from beginning to end.
                    </p>
                    <p>
                      Because I am sure that you know the story of The Lion
                      King, and because it is your duty to learn/know the
                      history and truth of African heritage, I will leave it to
                      you to get the storyline and just watch/enjoy the film.
                      Let it sweep your thoughts and keep your jaw dropped in
                      awe.
                    </p>
                    <blockquote className="blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                      <footer>
                        - Chris Brogan in{" "}
                        <cite title="Source Title">Jenny C</cite>
                      </footer>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Row>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage: `url(${"https://dl.airtable.com/.attachments/1df9e0c846cdcbde13e58c2a4049a120/7ab58187/ScreenShot2020-08-17at1_48_55PM.png"})`,
                            }}
                          />
                          {/* end card */}
                        </a>
                      </Col>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage: `url(${"https://dl.airtable.com/.attachments/21d7a9698064822dbf264ed05a76322d/56d47b4b/Goodvibesroof.jpeg"})`,
                            }}
                          />
                        </a>
                      </Col>
                    </Row>
                    <p />
                    <h4>Ideas Worth Mentioning</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      <strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et
                      </strong>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </p>

                    <p>
                      <strong>Lorem ipsum dolor sit amet</strong> Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      <strong>Lorem ipsum dolor sit amet</strong> – iExcepteur
                      sint occaecat cupidatat non proident.
                    </p>
                    <p>
                      <strong>Lorem ipsum dolor</strong>, sExcepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      <strong>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </strong>{" "}
                      Love them anyway.
                    </p>
                    <h4>
                      <strong>Conclusions</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore etLorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore etLorem ipsum dolor
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et
                    </p>
                  </div>
                  <br />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
