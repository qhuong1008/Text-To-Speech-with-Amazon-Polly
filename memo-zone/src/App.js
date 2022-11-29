import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/Learn/Learn";
import Xong from "./pages/Xong";
import Login from "./pages/Login/Login";
import CompletePage from "./pages/CompletePage/CompletePage";
import Course from "./pages/Course/Course";
import PracticeCommon from "./pages/Practice/PracticeCommon";
import { formatCountdown } from "antd/lib/statistic/utils";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" name="Home" element={<CompletePage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
