import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchAuthTokenSuccess, fetchUserSuccess } from "../../redux/actions";

import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../components/authToken/authToken";
import { showMessage } from "../../components/toaster/toaster";
import { baseUrl } from "../../components/utilities/server";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [InputFields, setInputField] = useState({
    email: "",
    password: "",
  });

  const [Error, setError] = useState(false);
  const [ErrorText, setErrorText] = useState({});

  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputField({ ...InputFields, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = handleError();

    setErrorText(err);

    if (Object.keys(err).length === 0) {
      try {
        const res = await axios.post(`${baseUrl}login`, {
          data: InputFields,
        });

        console.log(res.data.data, "Login response 💚");

        if (res?.data?.status === "success") {
          dispatch(fetchUserSuccess(res?.data?.data));
          dispatch(
            fetchAuthTokenSuccess({
              authToken: res?.data?.accessToken,
              isLogin: true,
            })
          );

          localStorage.setItem("login_data", JSON.stringify(res?.data));

          setToken(res?.data?.accessToken);

          if (res?.data?.data.loginStatus === true) {
            setTimeout(() => {
              navigation("/home");
              window.location.reload();
            }, 100);
          }

          showMessage("success", "Login successfully 💚", 2000);
        } else {
          console.log("Login Error response");
          showMessage("error", "Login failed");
        }
      } catch (error) {
        showMessage(
          "error",
          `${error.response.data || "User credentials not found "} ❌`
        );
      }
    } else {
      console.log("Please fill all required fields");
      showMessage("error", "Please fill all required fields", 2000);
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
    <div style={{ backgroundColor: "#ebedf5" }}>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row
          className="w-50 bg-light p-4 rounded "
          style={{ boxShadow: "20px 20px 30px rgba(105, 145, 237, 0.7)" }}
        >
          <Col md={12}>
            <h1
              className="mb-4 text-center"
              style={{ fontSize: 40, fontWeight: "bold" }}
            >
              Login
            </h1>
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
                value={InputFields.password}
                name={"password"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.password && (
                <span style={{ color: "red" }}> {ErrorText.password}</span>
              )}
            </Form.Group>
          </Col>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
          <div style={{ textAlign: "left", marginTop: 10 }}>
            <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </div>
          <div style={{ textAlign: "left", marginTop: 10, display: "flex" }}>
            <p>You don't have an account? </p>
            <Link
              to="/signup"
              style={{ textDecoration: "none", marginLeft: 10 }}
            >
              Sign up.
            </Link>
          </div>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              console.log("credentialResponse", credentialResponse);

              const decoded = await jwtDecode(credentialResponse?.credential);

              console.log(decoded, "ddddddddddddddddd");

              setInputField({
                ...InputFields,
                ["email"]: decoded.email,
                // ["password"]: "fsklfdlk",
              });
            }}
            onError={() => {
              console.log("Login Failed credentialResponse");
            }}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Login;
