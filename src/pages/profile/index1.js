import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const [userDetails, setUserDetails] = useState({}); // State for user details

  useEffect(() => {
    // Fetch user details from backend (replace with your API call)
    fetch("https://your-api-endpoint/get-user-details")
      .then((response) => response.json())
      .then((data) => setUserDetails(data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array to fetch data only once

  const handleEditProfile = () => {
    // Handle profile edit logic
    console.log("Edit profile clicked");
  };

  return (
    <div className="container py-5">
      <Row>
        <Col md={4}>
          <Card className="shadow border-0">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300"
              alt="Profile Picture"
            />
            <Card.Body className="text-center">
              <Card.Title>{userDetails.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {userDetails.email}
              </Card.Subtitle>
              <Button variant="primary" onClick={handleEditProfile}>
                <FontAwesomeIcon icon={faPencil} /> Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="shadow border-0">
            <Card.Body>
              <Card.Title className="mb-3">About Me</Card.Title>
              <Card.Text>{userDetails.bio}</Card.Text>
              <Card.Title className="mb-3">Upcoming Tickets</Card.Title>
              <ListGroup className="list-group-flush">
                {userDetails.tickets && userDetails.tickets.length > 0 ? (
                  userDetails.tickets.map((ticket) => (
                    <ListGroupItem key={ticket.id}>
                      {ticket.event} - {ticket.date}
                    </ListGroupItem>
                  ))
                ) : (
                  <ListGroupItem>No upcoming tickets found.</ListGroupItem>
                )}
              </ListGroup>
              <Card.Title className="mb-3">Past Tickets</Card.Title>
              <ListGroup className="list-group-flush">
                {userDetails.pastTickets &&
                userDetails.pastTickets.length > 0 ? (
                  userDetails.tickets.map((ticket) => (
                    <ListGroupItem key={ticket.id}>
                      {ticket.event} - {ticket.date}
                    </ListGroupItem>
                  ))
                ) : (
                  <ListGroupItem>No past tickets found.</ListGroupItem>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
