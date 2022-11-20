import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./pages/Learn/Learn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" name="Home" element={<Learn />} />
          {/* <Route path="wordtopic" name="Home" element={<WordTopic />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
