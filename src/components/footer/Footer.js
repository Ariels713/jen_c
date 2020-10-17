import React from "react";

// reactstrap components
import { Container, Row, Button } from "reactstrap";

// core components
import Dance from "./Dance";
function Footer() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <Dance />
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
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
              </Button>{" "}
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
              </Button>{" "}
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
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
