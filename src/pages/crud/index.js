import React, { useEffect, useState } from "react";
import Read from "./Read";
import Create from "./Create";
import axios from "axios";
import { showMessage } from "../../components/toaster/toaster";
import { Container } from "react-bootstrap";
import { baseUrl } from "../../components/utilities/server";

function Crud() {
  const [usersData, setUsersData] = useState([]);

  const [isUpdate, setIsUpdate] = useState(false);

  const [currentData, setCurrentData] = useState({
    name: "",
    role: "",
    experience: "",
    id: "",
  });

  useEffect(() => {
    fetchCrudUsers();
  }, []);

  const fetchCrudUsers = async () => {
    try {
      const res = await axios.get(`${baseUrl}crud`);
      if (res) {
        showMessage("success", "crud users fetched successfully");
        // console.log(res?.data?.data, "from curd user successfully listed");

        setUsersData(res?.data?.data);
      }
    } catch (error) {
      showMessage(
        "error",
        `${error?.response?.message || "crud users not fetched successfully"} `
      );
      console.log(error, "from crud fetchen users");
    }
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;

    console.log(name, value, id, "bbbbbbbbb");
    setCurrentData({
      ...currentData,
      ["id"]: id,
    });

    setCurrentData({
      ...currentData,
      [name]: value,
    });
  };
  console.log(currentData, "currentData");
  const addUser = async () => {
    if (
      currentData.name === "" ||
      currentData.role === "" ||
      currentData.experience === ""
    ) {
      showMessage("error", "Please fill all the fields");
      return;
    }

    const newUser = {
      name: currentData.name,
      role: currentData.role,
      experience: currentData.experience,
      // id: currentData.id,
    };

    if (!isUpdate) {
      try {
        const res = await axios.post(`${baseUrl}crud/add`, {
          data: newUser,
        });

        if (res) {
          console.log(res?.data?.data, "from curd user successfully listed");

          setCurrentData({
            name: "",
            role: "",
            experience: "",
            id: "",
          });

          fetchCrudUsers();
        }
      } catch (error) {
        showMessage(
          "error",
          `${error?.response?.message || "crud users not added successfully"} `
        );
        console.log(error, "from crud fetched users");
      }
    } else {
      try {
        const res = await axios.put(`${baseUrl}crud/${currentData?.id}`, {
          data: newUser,
        });

        setCurrentData({
          name: "",
          role: "",
          experience: "",
          id: "",
        });
        fetchCrudUsers();

        console.log(res, "updated successfully");
      } catch (error) {
        console.log(error, "from updateee");
        showMessage(
          "error",
          `${error?.response?.message || "crud users not update successfully"} `
        );
      }
    }
  };

  const updateData = (userData) => {
    const { _id, name, role, experience } = userData;
    console.log(
      userData,
      " innnnnnnnnnnnnnnnnnnnnupdateDataupdateDataupdateDataupdateData"
    );

    setIsUpdate(true);
    setCurrentData({
      id: _id,
      name: name,
      role: role,
      experience: experience,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fafafb",
        height: "100vh",
        position: "relative",
      }}
    >
      <Container>
        <h1
          className="font-weight-bold "
          style={{ fontWeight: "700", color: "dimgray" }}
        >
          Crud App
        </h1>
        <div
          style={{
            borderBottom: "4px groove #faf0f0",
            width: "100%",
            marginBottom: 10,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <Create
            currentData={currentData}
            setCurrentData={setCurrentData}
            handleChange={(val, id) => handleChange(val, id)}
            addUser={addUser}
            status={isUpdate}
          />

          <div
            style={{ borderRight: "10px groove lightgray", marginLeft: 50 }}
          />

          <Read
            usersData={usersData}
            setUsersData={setUsersData}
            updateData={(val) => updateData(val)}
          />
        </div>
      </Container>
    </div>
  );
}

export default Crud;
