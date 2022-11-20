import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/Learn/Learn";
import Login from "./pages/Login/Login";
import Course from "./pages/Course/Course";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" name="Home" element={<Course />} />
          {/* <Route path="wordtopic" name="Home" element={<WordTopic />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
