import React from "react";

// reactstrap components
import { Badge, Button, Card, Media, Container, Row, Col } from "reactstrap";

// core components

function Destructuring() {
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
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage: `url(${"https://dl.airtable.com/.attachments/29495f22b802fbbde74e0675c5f07485/25129aef/contact_us_page_image.jpg"})`,
        }}
      ></div>
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>A place for storytelling</h2>
                  <h3 className="title-uppercase">
                    <small>Written by designers for designers</small>
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <div className="text-center">
                    <Badge className="main-tag" color="warning">
                      Trending
                    </Badge>
                    <a href="javascrip: void(0);">
                      <h3 className="title">
                        Make Somebody Nervous Before You Die
                      </h3>
                    </a>
                    <h6 className="title-uppercase">October 10, 2016</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage: `url(${"https://dl.airtable.com/.attachments/c37797dcf0407f4d9bb5d5d9a8892ad6/b55976e0/about_image_jenny.jpg"})`,
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by Cam Adams
                    </p>
                  </a>
                  <div className="article-content">
                    <h4>Follow unconventional beliefs</h4>
                    <p>
                      You won’t find many concepts that are very useful or
                      important if you insist on having a worldview that’s void
                      of controversy, invulnerable to criticism, and incapable
                      of making others feel confused.
                    </p>
                    <p>
                      Interesting ideas are a reward for not being afraid to
                      have unconventional beliefs. You can’t grow if you’re
                      never willing to turn your back on the status quo. You
                      can’t expand if you’re never willing to take an unorthodox
                      stand. You can’t have a beautiful mind if you’re never
                      willing to leave the crowd behind.
                    </p>
                    <blockquote className="blockquote">
                      <p>
                        "Don’t settle: Don’t finish crappy books. If you don’t
                        like the menu, leave the restaurant. If you’re not on
                        the right path, get off it."
                      </p>
                      <footer>
                        - Chris Brogan in{" "}
                        <cite title="Source Title">Trust Agents</cite>
                      </footer>
                    </blockquote>
                    <p>
                      It’s easier to fear rejection than it is to open our minds
                      to something new, but doing what’s easy doesn’t always
                      equal doing what’s authentic, enriching, and meaningful.
                    </p>
                    <Row>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage: `url(${"https://dl.airtable.com/.attachments/c37797dcf0407f4d9bb5d5d9a8892ad6/b55976e0/about_image_jenny.jpg"})`,
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
                              backgroundImage: `url(${"https://dl.airtable.com/.attachments/c37797dcf0407f4d9bb5d5d9a8892ad6/b55976e0/about_image_jenny.jpg"})`,
                            }}
                          />
                        </a>
                      </Col>
                    </Row>
                    <p />
                    <h4>Ideas Worth Mentioning</h4>
                    <p>
                      The stories, ideas and lessons are enough to fill a year’s
                      worth of articles, but for now I wanted to share the ideas
                      straight from the people creating the disruption. Below
                      are my most impactful takeaways from the last few days:
                    </p>
                    <p>
                      <strong>No one belongs here more than me.</strong> When in
                      doubt of your surroundings, this is the mantra.
                    </p>
                    <p>
                      <strong>The ultimate currency is being uncool.</strong> Be
                      vulnerably you and watch how you connect.
                    </p>
                    <p>
                      <strong>The opposite of scarcity is enough.</strong> Be
                      confident that if you’re doing work that matters to you,
                      you are enough. There is no comparison.
                    </p>
                    <p>
                      <strong>Unused creativity is not benign</strong> – it
                      turns into grief. Do something with it.
                    </p>
                    <p>
                      <strong>Get in the arena</strong>, show up, do your thing
                      and don’t be afraid to get your ass kicked a little bit.
                    </p>
                    <p>
                      Who you are will always trump who you think people want
                      you to be.
                    </p>
                    <p>
                      <strong>
                        You can’t control if someone loves you back.
                      </strong>{" "}
                      Love them anyway.
                    </p>
                    <h4>
                      <strong>Conclusions</strong>
                    </h4>
                    <p>
                      If all of your convictions can be expressed in a sound
                      bite on mainstream television without provoking the
                      slightest bit of anger or annoyance in anyone whatsoever,
                      I think it’s safe to say that your outlook on life offers
                      you very few opportunities for the remarkable.
                    </p>
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

export default Destructuring;