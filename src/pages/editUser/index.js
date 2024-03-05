import React from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/profile_icon.jpg";

function EditProfile() {
  const navigation = useNavigate();

  const handleSignOut = () => {
    // navigation("/signin");
    console.log("Signing out...");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div
        style={{
          border: "1px solid lightgray",
          width: 400,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f1f3f9",
          alignContent: "center",
          padding: 10,
        }}
      >
        <h3 style={{ textAlign: "center" }}>Edit Profile</h3>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: "20px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={userIcon}
              alt="Profile"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            {/* <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              background: "white",
              borderRadius: "50%",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => navigation("/edit-profile")}
          >
            <i className="fas fa-pencil-alt"></i>
          </div> */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form
            style={{
              width: "300px",
              //   borderBottom: "2px solid gray",
              //   borderColor: "red",
            }}
          >
            <Form.Group controlId="name">
              <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="email">
              <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your email"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="phone">
              <Form.Label style={{ fontWeight: "bold" }}>Phone</Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your mobile no"
              />
            </Form.Group>
            <br />
            <Form.Group controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your password"
              />
            </Form.Group>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Button variant="secondary" onClick={() => navigation("/home")}>
                Back
              </Button>
              <Button variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
