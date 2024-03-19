import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import noPageFoundImage from "../../assets/images/404.jpeg";

const NotFoundPage = () => {
  // const [reload, setReLoad] = useState(true);

  // useEffect(() => {
  // console.log("kkkkk", reload);
  // reload && window.location.reload();
  // setReLoad(false);
  // }, []);

  return (
    <div className="not-found d-flex justify-content-center align-items-center min-vh-100 w-100">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Row
            xs={12}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              src={noPageFoundImage}
              alt="404 Not Found"
              style={{
                height: 280,
                width: 300,
                borderRadius: "50%",
              }}
            />
            <h1>Oops! We can't find the page you're looking for.</h1>
            <p>
              The requested path may be incorrect, or the page may have been
              removed, moved, or renamed.
            </p>{" "}
          </Row>
        </Row>
        {/* <Button variant="primary" href="/">
          Go to Home Page
        </Button> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="primary" href="/">
            Go to Login Page
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
