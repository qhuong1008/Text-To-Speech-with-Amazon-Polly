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
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/register" name="Register" element={<Register />} />
          <Route path="/login" name="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
