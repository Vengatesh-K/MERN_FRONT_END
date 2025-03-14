import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../components/utilities/server";

function Create({
  currentData,
  setCurrentData,
  handleChange,
  addUser,
  status,
}) {
  const [isUpdate, setIsUpdate] = useState(status || false);

  const [ReadData, setReadData] = useState(currentData);

  useEffect(() => {
    setIsUpdate(status);
    setReadData(currentData);
  }, [status, currentData]);

  const onClear = () => {
    window.location.reload();
  };

  return (
    <div
      style={{
        padding: 30,
        borderRadius: 20,
        width: 400,
        boxShadow: "10px 10px 20px rgba(105, 145, 237, 0.7)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <label style={{ width: "120px", fontWeight: "bold", fontSize: 18 }}>
          Name :
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={ReadData.name}
          onChange={(val) => handleChange(val, currentData.id)}
          style={{ padding: 5, border: "1px solid #ccc", borderRadius: 4 }}
        />
        <label style={{ width: "120px", fontWeight: "bold", fontSize: 18 }}>
          Role :
        </label>
        <input
          type="text"
          name="role"
          placeholder="Enter role"
          value={ReadData.role}
          onChange={(val) => handleChange(val, currentData.id)}
          style={{ padding: 5, border: "1px solid #ccc", borderRadius: 4 }}
        />
        <label style={{ width: "120px", fontWeight: "bold", fontSize: 18 }}>
          Experience :
        </label>
        <input
          type="text"
          name="experience"
          placeholder="Enter experience"
          value={ReadData.experience}
          onChange={(val) => handleChange(val, currentData.id)}
          style={{ padding: 5, border: "1px solid #ccc", borderRadius: 4 }}
        />
        <button
          onClick={addUser}
          style={{
            padding: 10,
            marginTop: 20,
            backgroundColor: "#1d9421",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {isUpdate === true ? "Update" : "Submit"}
        </button>
        <button
          onClick={() => onClear()}
          style={{
            padding: 10,
            marginTop: 20,
            backgroundColor: "#f46613",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Create;
