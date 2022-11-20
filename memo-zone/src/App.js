import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/Learn/Learn";
import Xong from "./pages/Xong";
import Login from "./pages/Login/Login";
import Course from "./pages/Course/Course";
import { formatCountdown } from "antd/lib/statistic/utils";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" name="Home" element={<Learn />} />
          <Route path="/xong" element={<Xong />} />
          {/* <Route path="wordtopic" name="Home" element={<WordTopic />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
