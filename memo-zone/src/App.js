import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Routes path="*" name="Home" element={<DefaultLayout />} />
          <Routes path="/register" name="Register" element={<Register />} />
          <Routes path="/login" name="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
