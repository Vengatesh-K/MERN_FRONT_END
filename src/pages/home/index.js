import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import videoSrc from "../../../src/assets/videos/ggg.mp4";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { showMessage } from "../../components/toaster/toaster";
import imagePath from "../../components/imagePath";
import "./style.css";

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
    }, 5000);

    // showMessage(
    //   "success",
    //   `Welcome ${userData?.name || userRdxData?.name} 💚`,
    //   2000
    // );
  }, []);

  const aa = 3;
  const bb = 4;

  const cc = aa + bb;

  console.log(cc);

  return (
    <>
      <video
        ref={videoRef}
        muted
        loop
        autoPlay
        className="position-absolute w-100 h-100 object-fit-cover video-background"
      >
        {/* <source src={videoSrc} type="video/mp4" /> */}
        <source
          // src={
          //   "https://static.videezy.com/system/resources/previews/000/041/249/original/4K_2.mp4"
          // }
          // src="https://cdn.pixabay.com/video/2019/10/09/27669-365224683_large.mp4"
          src="https://cdn.pixabay.com/video/2020/04/08/35344-405897623_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Navbar
        expand="lg"
        className="d-flex justify-content-between position-absolute object-fit-cover w-100"
        style={{
          borderBottom: "5px groove #d5cfcf",
          borderRight: "3px groove #d5cfcf",
          borderLeft: "3px groove #d5cfcf",
          borderTop: "4px groove #d5cfcf",
          borderRadius: 7,
          marginTop: 5,
          padding: 10,
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="Brand_text">
            <h2> Google V7</h2>
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
                className="name_text"
              >
                <a
                  href="/editProfile"
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "bold",
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
                  src={
                    userData?.image || userRdxData?.image || imagePath.userLogo
                  }
                  height={60}
                  width={60}
                  style={{
                    borderRadius: "30%",
                    background: "transparent",
                    marginLeft: 10,
                    objectFit: "cover",
                  }}
                />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container
        xs={4}
        md={4}
        lg={4}
        className="d-flex justify-content-center align-items-center vh-100 "
      >
        <Row
          className="position-absolute translate-middle text-white"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 140,
            textAlign: "center",
            marginLeft: 650,
          }}
        >
          <h1 className="welcome_text">
            Welcome ,{" "}
            <span
              style={{
                fontSize: 100,
                fontWeight: "bold",
                fontFamily: "serif",
                textAlign: "center",
              }}
            >
              {userData?.name || userRdxData?.name}
            </span>
          </h1>
          <Col md={12}>
            <Button
              variant="outline-success"
              size="lg"
              onClick={() => navigation("/profile")}
            >
              {"Let's Start"}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
