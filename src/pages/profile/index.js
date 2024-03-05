import React from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const navigation = useNavigate();
  return (
    <Container className="light-style flex-grow-1 container-p-y">
      <h1 className="font-weight-bold py-3 mb-4">MY PROJECTS</h1>
      <Row>
        <Col md={3} className="pt-0">
          <Card>
            <Nav variant="pills" className="flex-column account-settings-links">
              <Nav.Item>
                <Nav.Link href="#account-general">CRUD</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#account-change-password">
                  TICKET BOOKING
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#account-change-password">CALCULATOR</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#account-change-password">COUNTER</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#account-change-password">
                  EMAIL SENDER
                </Nav.Link>
              </Nav.Item>
              {/* Add other Nav.Item components for additional tabs */}
            </Nav>
          </Card>
        </Col>
        <Col md={9}>
          <Tab.Content>
            <Tab.Pane eventKey="#account-general">
              {/* General settings content */}
            </Tab.Pane>
            <Tab.Pane eventKey="#account-change-password">
              {/* Change password content */}
            </Tab.Pane>
            {/* Add additional Tab.Pane components for other tabs */}
          </Tab.Content>
        </Col>
      </Row>
      <div className="text-right mt-3">
        <Button variant="danger" onClick={() => navigation("/home")}>
          &hearts; Home page
        </Button>
        &nbsp;
        {/* <Button variant="default">Cancel</Button> */}
      </div>
    </Container>
  );
};

export default ProfileSettings;
