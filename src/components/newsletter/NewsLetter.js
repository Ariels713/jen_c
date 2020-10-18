import React, { useState } from "react";

// reactstrap components
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

function NewsLetter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

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
      setSentMessage(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {sentMessage ? (
        <div className="subscribe-line">
          <Container>
            <h2 className="title">Thanks For Subscribing!</h2>
          </Container>
        </div>
      ) : (
        <div className="subscribe-line">
          <Container>
            <h2 className="title">Subscribe To My Newsletter!</h2>
            <Form className="contact-form" onSubmit={submitHandler}>
              <Row>
                <Col md="4">
                  <Input
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col md="4">
                  <Input
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col md="4">
                  <Button
                    className="btn-fill"
                    style={{ margin: 0 }}
                    color="danger"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
              <Row></Row>
            </Form>
          </Container>
        </div>
      )}
      <div className="separator" />
    </>
  );
}

export default NewsLetter;
