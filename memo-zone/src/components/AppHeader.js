import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import style from "./style.scss";
import { FaUserCircle } from "react-icons/fa";
const AppHeader = (props) => {
  return (
    <>
      <Navbar className="header-wrapper" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href={`/homepage/${props.accountId}`}>
            MemoZone
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={`/${props.accountId}/mycourses`}>
              My Courses
            </Nav.Link>
            <Nav.Link href={`/homepage/${props.accountId} `}>
              All Courses
            </Nav.Link>
            {/* <Nav.Link href="#features">Courses</Nav.Link> */}
            <Nav className="user-info">
              <FaUserCircle className="logo" />
            </Nav>
          </Nav>
        </Container>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
          ></Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item href="/profile">Hồ sơ</Dropdown.Item>
            <Dropdown.Item href="/login">Đăng xuất</Dropdown.Item>
            <Dropdown.Item href="/settings">Cài đặt</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </>
  );
};
export default AppHeader;
