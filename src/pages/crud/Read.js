import React from "react";
import Delete from "./Delete";

function Read({ usersData, setUsersData, updateData }) {
  console.log("data is : ", usersData);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ol style={{ listStyle: "none", padding: 0 }}>
        {usersData?.map((item, ind) => (
          <li
            key={ind}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              padding: 10,
              marginBottom: 20,
              width: 500,
              borderRadius: 15,
              boxShadow: "10px 10px 20px rgba(105, 145, 237, 0.7)",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 170,
                  position: "relative",
                  marginBottom: 10,
                }}
              >
                <div style={{}}>
                  <span style={{ fontWeight: "bold", fontSize: 14 }}>
                    Name : {item.name}
                  </span>
                </div>
                <div style={{}}>
                  <span style={{ fontWeight: "bold", fontSize: 14 }}>
                    {" "}
                    Role : {item.role}{" "}
                  </span>
                </div>
                <div style={{}}>
                  <span style={{ fontWeight: "bold", fontSize: 14 }}>
                    {" "}
                    Experience : {item.experience}{" "}
                  </span>
                </div>
              </div>

              <div style={{ borderRight: "7px groove lightgray" }}></div>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    padding: 5,
                    backgroundColor: "#6959f7",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    width: 100,
                  }}
                  onClick={() => updateData(item)}
                >
                  Edit
                </button>
                <Delete
                  usersData={usersData}
                  item={item}
                  setUsersData={setUsersData}
                />
              </div>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Read;
