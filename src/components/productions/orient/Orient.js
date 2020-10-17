import React, { useState, useEffect } from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";
// core components

function Orient() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const aboutMe = async (event) => {
      try {
        const res = await fetch("/.netlify/functions/orientTable");
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
              <h2 className="title">Postcards from the Orient</h2>
              <h5>Production Designer for Postcards from the Orient</h5>
              <h5>FINAL PRODUCTION DATE: COMING SOON!</h5>
              <h6 className="card-category text-success">
                Director: Brooke Sis Guttural
              </h6>
              <h6 className="card-category text-success">
                Co-Production Designer: Celina Arslanian
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
