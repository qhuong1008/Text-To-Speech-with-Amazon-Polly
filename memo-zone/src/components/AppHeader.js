import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AppHeader = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="header-wrapper">
          <Navbar.Brand href="#home">Memo Zone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav className="user-info">
              <Nav.Link className="user-name">Alissa</Nav.Link>
              <Nav.Link className="logo">
                <img />
              </Nav.Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default AppHeader;
