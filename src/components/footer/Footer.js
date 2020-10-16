/*eslint-disable*/
import React, { useState } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await fetch("/.netlify/functions/newsLetterTable", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
        }),
      });
      resetForm();
      setSubscribed(true);
      set;
    } catch (err) {
      console.error(err);
    }
    // console.log(name, email);
  };

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
                {subscribed ? (
                  <div></div>
                ) : (
                  <li>
                    <h3
                      className="title"
                      style={{ marginTop: "5px", marginLeft: "20px" }}
                    >
                      Sign up for my news letter!
                    </h3>
                  </li>
                )}
              </ul>
            </nav>
            <div
              className="credits ml-auto footer-nav"
              style={{ display: "flex" }}
            >
              {subscribed ? (
                <div>
                  <Container>
                    <h3 className="title">Thanks For Subscribing!</h3>
                  </Container>
                </div>
              ) : (
                <Container>
                  <Form className="contact-form" onSubmit={submitHandler}>
                    <Row>
                      <Col md="5">
                        <Input
                          placeholder="Name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Col>
                      <Col md="5">
                        <Input
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                      <Col md="2">
                        <Button
                          className="btn-magnify btn-round"
                          style={{ display: "flex", marginTop: "0" }}
                          color="danger"
                        >
                          Subscribe
                        </Button>
                      </Col>
                    </Row>
                    <Row></Row>
                  </Form>
                </Container>
              )}
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterGray;
