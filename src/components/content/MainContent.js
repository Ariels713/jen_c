import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <div
        className="section text-center landing-section"
        style={{ paddingBottom: 0 }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Let's talk about your project!</h2>
              <h5>
                I’m busy creating even more quality work to show you, but enjoy
                this array of projects below, in the tabs above & also reach out
                for my portfolio password. SHHH! it has more private projects to
                share.
              </h5>
              <br />
              <Button
                className="btn-fill btn-round"
                color="danger"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                See Details
              </Button>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </>
  );
}

export default LandingPage;
