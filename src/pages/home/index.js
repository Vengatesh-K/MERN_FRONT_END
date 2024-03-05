import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import image from "../../../src/assets/images/blue.jpg";
import videoSrc from "../../../src/assets/videos/ggg.mp4";
import profile_icon from "../../../src/assets/images/profile_icon.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const videoRef = useRef(null);

  const userRdxData = useSelector((state) => state.user.userReducer.user);
  console.log(userRdxData, "userRdxData from redux ✨");

  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();

  const [data, setData] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("login_data"));

    console.log(loginData, "loginData from localStorage ✨");

    if (loginData) {
      setData(loginData);
      setUserData(loginData?.data);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        muted
        loop
        autoPlay
        className="position-absolute w-100 h-100 object-fit-cover video-background"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar
        expand="lg"
        className="d-flex justify-content-between position-absolute object-fit-cover w-100"
        style={{
          borderBottom: "5px solid #9e9a9a",
          borderRight: "3px solid #9e9a9a",
          borderLeft: "3px solid #9e9a9a",
          borderRadius: 7,
          marginTop: 5,
          marginRight: "auto",
          marginLeft: "auto",
          padding: 10,
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "system-ui",
            }}
          >
            Google V7
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Container>
          <Navbar.Collapse className="justify-content-end">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Navbar.Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: "bold",
                  fontFamily: "system-ui",
                }}
              >
                {" "}
                <a
                  href="/editProfile"
                  // href={navigation("/home")}
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "system-ui",
                    textDecoration: "none",
                  }}
                >
                  {userData?.name || userRdxData?.name}
                </a>
              </Navbar.Text>
              <a
                href="/editProfile"
                style={{
                  textDecoration: "none",
                }}
              >
                <img
                  src={profile_icon}
                  height={35}
                  width={35}
                  style={{
                    borderRadius: "50%",
                    background: "transparent",
                    marginLeft: 10,
                  }}
                />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="d-flex justify-content-center align-items-center vh-100 ">
        <Row
          className="position-absolute translate-middle text-white"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            Welcome ,{" "}
            <span
              style={{
                fontSize: 85,
                fontWeight: "bold",
                fontFamily: "serif",
              }}
            >
              {userData?.name || userRdxData?.name}
            </span>
          </h1>
          <Col md={12}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigation("/profile")}
            >
              {"Let's Start"}
            </Button>
          </Col>
        </Row>

        {isLoading && (
          <div className="d-flex justify-content-center align-items-center vh-100 position-absolute">
            <Spinner animation="border" size="sm" />
            <p className="ms-3">Loading...</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default Home;
