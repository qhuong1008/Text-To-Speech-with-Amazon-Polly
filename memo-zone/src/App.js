import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopicList from "./pages/TopicList/TopicList";
import Learn from "./pages/Learn/Learn";
import CompletePage from "./pages/CompletePage/CompletePage";
import WordTopic from "./pages/WordTopic/WordTopic";
import Home from "./pages/Home/Home";
import PracticeCommon from "./pages/Practice/PracticeCommon";
import { formatCountdown } from "antd/lib/statistic/utils";
// import CourseList from "./pages/CourseList/CourseList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" name="Login" element={<Home />} />
          <Route path="/homepage" name="Login" element={<Home />} />
          <Route path="/complete" name="Complete" element={<CompletePage />} />
          <Route path="/course/:courseId/topic" element={<TopicList />}></Route>
          <Route
            path="/course/:courseId/topic/:topicId"
            element={<WordTopic />}
          ></Route>
          <Route
            path="/course/:courseId/topic/:topicId/learn"
            element={<Learn />}
          ></Route>
          <Route
            path="/course/:courseId/topic/:topicId/complete"
            element={<CompletePage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
