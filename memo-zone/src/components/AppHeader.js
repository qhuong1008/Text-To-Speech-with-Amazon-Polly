import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./style.scss";

const AppHeader = () => {
  return (
    <>
      <Navbar className="header-wrapper" bg="primary" variant="dark">
        <Container>
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
