import React, { useState, useEffect } from "react";

// reactstrap components
import { Card, Container, Row, Col, Button } from "reactstrap";
// core components

function Orient() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const aboutMe = async (event) => {
      try {
        const res = await fetch("/.netlify/functions/funnyFaceTable");
        const data = await res.json();
        setImages(data);
        setIsLoading(false);
      } catch (err) {}
    };
    console.log(images);
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
              <h2 className="title">Funny Face Film</h2>
              <h5>Scenic Prop Artist | Car Destruction & Mask Art Details</h5>
              <Button
                className="btn-link"
                color="success"
                onClick={() =>
                  window.open(
                    "https://www.imdb.com/title/tt11638942/?ref_=nm_flmg_art_1",
                    "_blank"
                  )
                }
              >
                Funny Face Film 2020
              </Button>

              <h6 className="card-category text-success">
                <Button
                  className="btn-link"
                  color="success"
                  onClick={() =>
                    window.open(
                      "https://www.imdb.com/name/nm3048822/",
                      "_blank"
                    )
                  }
                >
                  Production Designer: Alan Iampert
                </Button>
              </h6>
              <h6 className="card-category text-success">
                <Button
                  className="btn-link"
                  color="success"
                  onClick={() =>
                    window.open(
                      "https://www.imdb.com/name/nm8369474/",
                      "_blank"
                    )
                  }
                >
                  Art Director: Clarence McLay
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

export default Orient;
