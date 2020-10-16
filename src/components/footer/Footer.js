/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Button,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

// core components

function FooterGray() {
  return (
    <>
      <footer
        className="footer footer-success"
        style={{ backgroundColor: "#6bd098" }}
      >
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <Button
                    className="btn-just-icon"
                    color="instagram"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/jennycarlys/",
                        "_blank"
                      )
                    }
                  >
                    <i className="fa fa-instagram"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-just-icon"
                    color="pinterest"
                    onClick={() =>
                      window.open(
                        "https://www.pinterest.com/jennycarlys/_created/",
                        "_blank"
                      )
                    }
                  >
                    <i className="fa fa-pinterest-p"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    className="btn-just-icon"
                    color="linkedin"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/jennycarylsmelendez/",
                        "_blank"
                      )
                    }
                  >
                    <i className="fa fa-linkedin"></i>
                  </Button>
                </li>
              </ul>
            </nav>
            <div
              className="credits ml-auto footer-nav"
              style={{ display: "flex" }}
            >
              <Form className="form-inline ml-auto">
                <input
                  placeholder="Newsletter!"
                  type="text"
                  class="mr-sm-3 no-border form-control"
                ></input>
                <Button
                  className="btn-magnify btn-round"
                  color="danger"
                  type="button"
                  onClick={() => setLoginModal(true)}
                >
                  Subscribe
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterGray;
