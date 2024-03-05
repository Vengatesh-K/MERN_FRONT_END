import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchUserSuccess } from "../../redux/actions";

import { useDispatch, useSelector } from "react-redux";

// import // fetchUserRequest,
// fetchUserSuccess,
// fetchUserFailure,
// "../../redux/actions";

const Login = () => {
  const [InputFields, setInputField] = useState({
    email: "",
    password: "",
  });

  const [Error, setError] = useState(false);
  const [ErrorText, setErrorText] = useState({});

  const navigation = useNavigate();

  // const userData = useSelector((state) => state);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputField({ ...InputFields, [name]: value });
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   searchMovies("spiderman");
  // }, []);

  // const USER_API = "http://www.omdbapi.com?apikey=927a9e9f";
  // const API_URL = 'http://www.omdbapi.com?apikey=3ec89900';

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${USER_API}&s=${title}`);
  //   const data = await response.json();
  //   // setMovies(data.Search);
  //   console.log(data, "dddddddddddd");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = handleError();

    setErrorText(err);

    // if (Object.keys(err).length === 0) {
    if (Object.keys(err)) {
      // console.log("try function");
      try {
        const res = await axios.post("http://localhost:7000/login", {
          data: InputFields,
        });

        console.log(res.data.data, "Login response 💚💚💚");

        if (res?.data?.status === "success") {
          alert("Login successfully 💚💚💚");
          dispatch(fetchUserSuccess(res?.data?.data));

          localStorage.setItem("login_data", JSON.stringify(res?.data));
          console.log(res?.data, "res?.dataaaaaaaaa");
          navigation("/home");
        } else {
          console.log("Login Error response");
        }
      } catch (error) {
        alert(
          ` ${error.response.data} ❌❌❌` || "User credentials not found "
        );
      }
    } else {
      console.log("Please fill all required fields");
    }
  };

  const handleError = (e) => {
    var error = {};

    if (InputFields.email === undefined || InputFields.email === "") {
      error.email = "Please enter email";
      setError(true);
    }

    if (InputFields.password === undefined || InputFields.password === "") {
      error.password = "Please enter password";
      setError(true);
    }

    return error;
  };

  return (
    <div style={{ backgroundColor: "#d6dcf8" }}>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-50 bg-light p-4 rounded shadow">
          <Col md={12}>
            <h1 className="mb-4 text-center">Login</h1>
          </Col>

          <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "bold" }}>
                Email address <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={InputFields.email}
                // value={"test@gmail.com"}
                name={"email"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.email && (
                <span style={{ color: "red" }}> {ErrorText.email}</span>
              )}
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "bold" }}>
                Password <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                // value={"123456"}
                value={InputFields.password}
                name={"password"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.password && (
                <span style={{ color: "red" }}> {ErrorText.password}</span>
              )}
            </Form.Group>
          </Col>

          <div
            style={{
              textAlign: "center",
              marginTop: 10,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="secondary"
              type="submit"
              onClick={() => {
                navigation("/");
              }}
              style={{ width: 150 }}
            >
              Back
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{ width: 150 }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>

          <div style={{ textAlign: "center", marginTop: 10 }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
