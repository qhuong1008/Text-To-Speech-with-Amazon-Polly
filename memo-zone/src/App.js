import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/Learn/Learn";
import Xong from "./pages/Xong";
import Login from "./pages/Login/Login";
import CompletePage from "./pages/CompletePage/CompletePage";
import Course from "./pages/Course/Course";
import Home from "./pages/Home/Home";
import PracticeCommon from "./pages/Practice/PracticeCommon";
import { formatCountdown } from "antd/lib/statistic/utils";
// import CourseList from "./pages/CourseList/CourseList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" name="Login" element={<Login />} />
          <Route path="/homepage" name="Login" element={<Home />} />
          <Route path="/course/:courseId/learn" element={<Learn />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
