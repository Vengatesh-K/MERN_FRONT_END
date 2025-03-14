import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

function CardView({ data, img, title, content, index, navScreen = () => {} }) {
  const handleProject = (data) => {
    let check = data;

    if (check.id) {
      alert(check.title);
    }
  };

  // console.log(data, "sssssssssss");

  const opp = () => {
    alert("opponent");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        key={index}
        onClick={() => navScreen(data.id)}
      >
        <div
          className="glassBox"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="glassBox__imgBox">
            <img src={img} alt="Image" style={{ height: 200, width: 260 }} />
          </div>
          <div className="glassBox__title">
            <h3>{title}</h3>
            <div className="glassBox__content">{content}</div>
          </div>
          <Button onClick={() => navScreen(data.id)}>Click me</Button>
        </div>
      </div>
    </>
  );
}

export default CardView;
