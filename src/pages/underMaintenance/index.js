import React from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import imagePath from "../../components/imagePath";
import { useNavigate } from "react-router-dom";

const MaintenancePage = () => {
  const navigation = useNavigate();

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
              src={imagePath.maintenance}
              alt="404 Not Found"
              style={{
                height: 380,
                width: 400,
              }}
            />
            <h1>Oops! This page is under maintenance.</h1>
            <p>
              Our developing team has been working on this page... Sorry for
              inconvenience...
            </p>{" "}
          </Row>
        </Row>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: 300,
            }}
          >
            <Button variant="secondary" onClick={() => navigation(-1)}>
              Go Back
            </Button>

            <Button variant="primary" href="/">
              Go to Login Page
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MaintenancePage;
