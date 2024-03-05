import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [InputFields, setInputField] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [Error, setError] = useState(false);
  const [ErrorText, setErrorText] = useState({});

  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputField({ ...InputFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = handleError();

    setErrorText(err);

    if (Object.keys(err).length === 0) {
      try {
        const response = await axios.post("http://localhost:7000/signup", {
          data: InputFields,
        });

        if (response) {
          console.log(response, "Signup response 💚💚💚");
          alert("Signup submitted 💚💚💚");
          navigation("/login");
        } else {
          console.log("Signup Error response");
        }
      } catch (error) {
        console.log(error, "Signup catch  error");
      }
    } else {
      console.log("Please fill all required fields");
    }
  };

  const handleError = (e) => {
    var error = {};

    if (InputFields.name == undefined || InputFields.name == "") {
      error.name = "Please enter name";
      setError(true);
    }
    if (InputFields.email == undefined || InputFields.email == "") {
      error.email = "Please enter email";
      setError(true);
    }
    if (InputFields.phone == undefined || InputFields.phone == "") {
      error.phone = "Please enter phone number";
      setError(true);
    }
    if (InputFields.password == undefined || InputFields.password == "") {
      error.password = "Please enter password";
      setError(true);
    }

    return error;
  };

  return (
    <div style={{ backgroundColor: "#e4e4f1" }}>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-50 bg-light p-4 rounded shadow">
          <Col md={12}>
            <h1 className="mb-4 text-center">Signup</h1>
          </Col>
          {/* <Form> */}
          <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label style={{ fontWeight: "bold" }}>
                Name <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={InputFields.name}
                name={"name"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.name ? (
                <span style={{ color: "red" }}> {ErrorText.name}</span>
              ) : (
                <p></p>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
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
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label style={{ fontWeight: "bold" }}>
                Phone number <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter phone number"
                value={InputFields.phone}
                name={"phone"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.phone && (
                <span style={{ color: "red" }}> {ErrorText.phone}</span>
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
            Sign Up
          </Button>
          {/* </Form> */}
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
