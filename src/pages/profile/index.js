import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardView from "../../styleComponent/cardView";
import imagePath from "../../components/imagePath";

const ProfileSettings = () => {
  const navigation = useNavigate();

  const [data, setData] = useState([
    {
      id: 1,
      title: "Crud",
      content: "Basic Crud",
      image: imagePath.curdImg,
    },
    {
      id: 2,
      title: "Ticket",
      content: "Ticket Booking",
      image: imagePath.ticketImg,
    },
    {
      id: 3,
      title: "Gmail",
      content: "Mail sender",
      image: imagePath.gmailImg,
    },
    {
      id: 4,
      title: "Cal-C",
      content: "Calculator Project",
      image: imagePath.calClImg,
    },
  ]);

  const goToProject = (item) => {
    console.log(item, "from project");

    switch (item) {
      case 1:
        navigation("/crud");
        console.log("crud item working");

        break;
      case 2:
        navigation("/TicketApp");
        console.log("ticket item working");

        break;
      case 3:
        navigation("/gmail");
        console.log("gmail item working");

        break;

      default:
        navigation("/maintenance");
        console.log("default item working");
        break;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#ededf9",
        height: "100vh",
        width: "100%",
      }}
    >
      <Container className="light-style flex-grow-1 container-p-y">
        <h1
          className="font-weight-bold py-3 mb-4"
          style={{ fontWeight: "700", color: "dimgray" }}
        >
          MY PROJECTS
        </h1>
        <div
          style={{
            borderBottom: "4px groove #faf0f0",
            width: "100%",
            marginBottom: 10,
          }}
        ></div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gridGap: "150px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {data.map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",

                    justifyContent: "center",
                  }}
                >
                  <CardView
                    data={item}
                    index={index}
                    img={item.image}
                    title={item.title}
                    content={item.content}
                    navScreen={(item) => goToProject(item)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileSettings;
