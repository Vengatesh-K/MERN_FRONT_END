import React, { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/profile_icon.jpg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getToken, removeToken } from "../../components/authToken/authToken";
import { showMessage } from "../../components/toaster/toaster";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { fetchUserSuccess } from "../../redux/actions";

function EditProfile() {
  const [InputFields, setInputField] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    image: null,
  });

  const [userId, setUserID] = useState("");
  const [Error, setError] = useState(false);
  const [ErrorText, setErrorText] = useState({});

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const userAccessToken = getToken();

  const userRdxData = useSelector((state) => state.user.userReducer.user);

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("login_data"));

    console.log(loginData, "loginData from localStorage in edit screen ✨");

    if (loginData) {
      setData(loginData);
      setUserData(loginData?.data);
      setInputField({
        name: loginData?.data?.name,
        email: loginData?.data?.email,
        phone: loginData?.data?.phone,
        image: loginData?.data?.image,
      });

      console.log(loginData?.data, "xxxxxxxxxxxxxxxxxxxx");

      setUserID(
        loginData?.data?.userId ? loginData?.data?.userId : loginData?.data?._id
      );
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSignOut = async () => {
    // console.log("Signing out...");

    try {
      const res = await axios.post(
        "http://localhost:7000/logout",
        {
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
            "content-type": "application/json",
          },
        }
      );

      console.log(res.data.message, "logout response 💚");

      if (res?.data?.status === "success") {
        showMessage("success", `${res.data.message}`, 3000);

        dispatch(fetchUserSuccess({}));
        removeToken();

        navigation("/");
      } else {
        console.log("Login Error response");
        showMessage("error", "Login failed");
      }
    } catch (error) {
      showMessage(
        "error",
        `${error.response.data.message || "Logout failed "} ❌`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputField({ ...InputFields, [name]: value });
  };

  const authToken = getToken();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = handleError();
    setErrorText(err);

    if (Object.keys(err).length === 0) {
      // console.log("input field before submit", InputFields);

      // try {
      //   const formData = new FormData();
      //   formData.append("image", imageFile);

      //   if (imageFile) {
      //     // Check if selectedImage is defined and not null
      //     formData.append("imagess", imageFile); // Append the image file
      //   }
      //   console.log(
      //     imageFile,
      //     "cattitititiimageFileimageFileimageFileimageFile"
      //   );
      //   console.log(formData, "fffffffffffffffffffffffff");
      // } catch (error) {
      //   console.log(error, "cattitititi");
      // }

      // formData.append("email", "InputFields?.email");
      // formData.append("phone", InputFields?.phone);
      // formData.append("currentPassword", InputFields?.currentPassword);
      // formData.append("newPassword", InputFields?.newPassword);
      // formData.append("image", {
      //   uri: imageUrl,
      //   name: image.name,
      //   filename: "",
      //   type: image.type,
      // });
      // formData.name = InputFields.name;
      // formData.phone = InputFields.phone;
      // formData.email = InputFields.email;
      // formData.currentPassword = InputFields.currentPassword;
      // formData.newPassword = InputFields.newPassword;

      // const response = await axios.post("http://localhost:7000/");
      // } catch (error) {}

      console.log(InputFields, userId, "inpup idddddd before send");

      try {
        const response = await axios.post(
          "http://localhost:7000/update",
          {
            data: InputFields,
            userId: userId,
          },
          {
            headers: {
              Authorization: `Bearer ${userAccessToken}`,
              "content-type": "application/json",
            },
          }
        );

        if (response) {
          console.log(response, "Updated successfully 💚");

          dispatch(fetchUserSuccess(response?.data?.data));

          localStorage.setItem("login_data", JSON.stringify(response?.data));

          showMessage(
            "success",
            `${response?.data?.message || response?.message}`,
            3000
          );
          // navigation("/home");
        } else {
          console.log("Update Error response");
        }
      } catch (error) {
        console.log(error?.response?.data?.message, "Update catch  error");

        showMessage(
          "error",
          `${error?.response?.data?.message || error?.message}`,
          3000
        );
      }
    } else {
      console.log("Please fill all required fields");
      showMessage("error", `Please fill all required fields`, 3000);
    }
  };

  const handleError = (e) => {
    var error = {};

    if (InputFields.name === undefined || InputFields.name === "") {
      error.name = "Please enter name";
      setError(true);
    }
    if (InputFields.email === undefined || InputFields.email === "") {
      error.email = "Please enter email";
      setError(true);
    }
    if (InputFields.phone === undefined || InputFields.phone === "") {
      error.phone = "Please enter phone number";
      setError(true);
    }

    if (InputFields.newPassword) {
      if (!InputFields.currentPassword) {
        error.currentPassword = "Enter current password";
        setError(true);
      }
    } else if (InputFields.currentPassword) {
      if (!InputFields.newPassword) {
        error.newPassword = "Enter new password";
        setError(true);
      }
    }

    return error;
  };

  const [imageUrl, setImageUrl] = useState();
  const [imageFile, setImageFile] = useState(null);
  const [image, setImage] = useState("");

  const handleEditClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (event) => {
    const newImage = event.target.files[0];
    setImageFile(newImage);
    setImage(newImage);
    console.log(newImage, "fileeeeeeeeeee");

    if (newImage) {
      const reader = new FileReader();

      console.log(reader, "readersssssss");
      reader.onload = (e) => {
        setImageUrl(e?.target?.result);

        if (e?.target?.result) {
          setInputField({ ...InputFields, ["image"]: e?.target?.result });
        }

        console.log(e.target.result, "rrrrrssss");
      };
      reader.readAsDataURL(newImage);
    }
  };

  // console.log(InputFields, InputFields.image, "kkkkkkkkkkkkk");

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div
        style={{
          border: "1px solid lightgray",
          width: 400,
          borderRadius: 10,
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
          <div style={{ position: "relative", display: "inline-block" }}>
            <Image
              src={InputFields.image || userIcon}
              alt="Image to be edited"
              style={{
                width: 130,
                height: 130,
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <FontAwesomeIcon
              icon={faPencilAlt}
              style={{
                position: "absolute",
                bottom: 5,
                right: 5,
                color: "white",
                backgroundColor: "#333",
                padding: "10px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: 20,
              }}
              onClick={handleEditClick}
            />
            <Form.Control
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form
            style={{
              width: "300px",
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
                value={InputFields.email}
                name={"email"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.email && (
                <span style={{ color: "red" }}> {ErrorText.email}</span>
              )}
            </Form.Group>
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
                placeholder="Enter your mobile number"
                value={InputFields.phone}
                name={"phone"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.phone && (
                <span style={{ color: "red" }}> {ErrorText.phone}</span>
              )}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>
                Current Password
              </Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your current password"
                value={InputFields.currentPassword}
                name={"currentPassword"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.currentPassword && (
                <span style={{ color: "red" }}>
                  {ErrorText.currentPassword}
                </span>
              )}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label style={{ fontWeight: "bold" }}>
                New Password
              </Form.Label>
              <Form.Control
                style={{
                  border: "0 none",
                  borderBottom: "1px solid #ccc",
                  padding: "5px 10px",
                  backgroundColor: "transparent",
                }}
                type="text"
                placeholder="Enter your new password"
                value={InputFields.newPassword}
                name={"newPassword"}
                onChange={(val) => handleChange(val)}
              />
              {Error && ErrorText.newPassword && (
                <span style={{ color: "red" }}> {ErrorText.newPassword}</span>
              )}
            </Form.Group>
            <br />
          </Form>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Button
              variant="secondary"
              style={{ width: 100 }}
              onClick={() => navigation(-1)}
            >
              Back
            </Button>
            <Button
              variant="success"
              style={{ width: 100 }}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button
              variant="danger"
              style={{ width: 100 }}
              onClick={handleSignOut}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
