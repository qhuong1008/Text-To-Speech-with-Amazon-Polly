import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopicList from "./pages/TopicList/TopicList";
import Learn from "./pages/Learn/Learn";
import CompletePage from "./pages/CompletePage/CompletePage";
import WordTopic from "./pages/WordTopic/WordTopic";
import MyWordTopic from "./pages/MyWordTopic/MyWordTopic";
import Home from "./pages/Home/Home";
import PracticeCommon from "./pages/Practice/PracticeCommon";
import PracticeListening from "./pages/PracticeListening/PracticeListening";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MyCourses from "./pages/MyCourses/MyCourses";
import EditMyCourse from "./pages/EditMyCourse/EditMyCourse";
import MyTopicList from "./pages/MyTopicList/MyTopicList";
import { formatCountdown } from "antd/lib/statistic/utils";
import MyForm from "./MyForm";
// import CourseList from "./pages/CourseList/CourseList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" name="Login" element={<Login />} />
          {/* <Route path="*" name="Login" element={<MyForm />} /> */}
          <Route path="/signup" name="Login" element={<Signup />} />
          <Route
            path="/homepage/:accountId"
            name="Home Page"
            element={<Home />}
          />
          <Route
            path="/:accountId/mycourses"
            name="MyCourses"
            element={<MyCourses />}
          />
          <Route
            path="/:accountId/editmycourse"
            name="EditMyCourse"
            element={<EditMyCourse />}
          />
          <Route
            path="/:accountId/mycourses/:courseId/topic"
            name="MyTopicList"
            element={<MyTopicList />}
          />

          <Route
            path="/:accountId/course/:courseId/topic"
            element={<TopicList />}
          ></Route>
          <Route
            path="/:accountId/course/:courseId/topic/:topicId"
            element={<WordTopic />}
          ></Route>
          <Route
            path="/:accountId/mycourses/:courseId/topic/:topicId"
            element={<MyWordTopic />}
          ></Route>
          <Route
            path="/:accountId/course/:courseId/topic/:topicId/learn"
            element={<Learn />}
          ></Route>
          <Route
            path="/:accountId/course/:courseId/topic/:topicId/complete"
            element={<CompletePage />}
          ></Route>
          <Route
            path="/:accountId/course/:courseId/topic/:topicId/practicecommon"
            element={<PracticeCommon />}
          ></Route>
          <Route
            path="/:accountId/course/:courseId/topic/:topicId/practicelistening"
            element={<PracticeListening />}
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
