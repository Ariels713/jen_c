import React, { useState, useEffect } from "react";

// reactstrap components
import { Card, Container, Row, Col, Button } from "reactstrap";
// core components

function Doji() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const aboutMe = async (event) => {
      try {
        const res = await fetch("/.netlify/functions/mazzaTable");
        const data = await res.json();
        setImages(data);
        setIsLoading(false);
      } catch (err) {}
    };
    aboutMe();
  }, []);

  return (
    <>
      <div
        className="section text-center landing-section"
        style={{ paddingBottom: 0 }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Mazza New York</h2>
              <h5>
                The following is a styling photoshoot to develop marketing
                content for Mazza NYC
                <Button
                  className="btn-link"
                  color="success"
                  onClick={() =>
                    window.open("https://www.mazzanewyork.com/", "_blank")
                  }
                >
                  Mazza NYC
                </Button>
              </h5>
              <h6 className="card-category">
                Photographers
                <Button
                  className="btn-link"
                  color="success"
                  onClick={() =>
                    window.open("https://harrisonjamesobrien.com/", "_blank")
                  }
                >
                  Harrison O'Brian
                </Button>
                &
                <Button
                  className="btn-link"
                  color="success"
                  onClick={() =>
                    window.open("https://www.biagiofoto.com/", "_blank")
                  }
                >
                  Biagio Dell'Aiera
                </Button>
              </h6>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
      {isLoading ? (
        <div className="uil-reload-css mr-1" />
      ) : (
        <>
          <div className="section secion-blog cd-section" id="blogs">
            <div className="blog-4">
              {console.log(images)}
              <Container>
                <Row>
                  {images.map((image) => {
                    return (
                      <Col md="6" key={image.id}>
                        <Card className="card-plain card-blog text-center">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="img img-raised"
                              src={image.fields.images[0].url}
                              style={{ marginBottom: "2%" }}
                            />
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Doji;
