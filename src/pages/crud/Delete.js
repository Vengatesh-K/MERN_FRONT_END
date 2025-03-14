import axios from "axios";
import React from "react";
import { baseUrl } from "../../components/utilities/server";
import { showMessage } from "../../components/toaster/toaster";

function Delete({ userData, setUsersData, item }) {
  const handleDelete = async (userId) => {
    try {
      const res = await axios.delete(`${baseUrl}crud/${userId}`);

      if (res) {
        console.log(res, "sssssssssssss resss");

        if (res.status === "success" || "Success") {
          window.location.reload();

          // showMessage(
          //   "success",
          //   `${res?.data?.message || `crud users deleted successfully`} `
          // );
        }
      }
    } catch (err) {
      console.log(err, "error deleting item");

      showMessage(
        "error",
        `${
          err?.data?.message ||
          err?.data?.response?.message ||
          `Error in crud users delete`
        } `
      );
    }
  };
  return (
    <div>
      <button
        onClick={() => handleDelete(item._id)}
        style={{
          padding: 5,
          backgroundColor: "#ee463a",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
          width: 100,
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
