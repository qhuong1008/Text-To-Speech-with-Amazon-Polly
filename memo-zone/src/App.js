import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopicList from "./pages/TopicList/TopicList";
import Learn from "./pages/Learn/Learn";
import CompletePage from "./pages/CompletePage/CompletePage";
import WordTopic from "./pages/WordTopic/WordTopic";
import Home from "./pages/Home/Home";
import PracticeCommon from "./pages/Practice/PracticeCommon";
import PracticeListening from "./pages/PracticeListening/PracticeListening";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { formatCountdown } from "antd/lib/statistic/utils";
// import CourseList from "./pages/CourseList/CourseList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" name="Login" element={<Login />} />
          <Route path="/signup" name="Login" element={<Signup />} />
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
          <Route
            path="/course/:courseId/topic/:topicId/practicecommon"
            element={<PracticeCommon />}
          ></Route>
          <Route
            path="/course/:courseId/topic/:topicId/practicelistening"
            element={<PracticeListening />}
          ></Route>
        </Routes>
        {/* <Routes>
          <Route path="*" name="Login" element={<Login />} />
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/signup"
            name="Login"
            element={<Signup />}
          />
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/homepage"
            name="Login"
            element={<Home />}
          />
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/complete"
            name="Complete"
            element={<CompletePage />}
          />
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/course/:courseId/topic"
            element={<TopicList />}
          ></Route>
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/course/:courseId/topic/:topicId"
            element={<WordTopic />}
          ></Route>
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/course/:courseId/topic/:topicId/learn"
            element={<Learn />}
          ></Route>
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/course/:courseId/topic/:topicId/complete"
            element={<CompletePage />}
          ></Route>
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/course/:courseId/topic/:topicId/practicecommon"
            element={<PracticeCommon />}
          ></Route>
          <Route
            path="http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/course/:courseId/topic/:topicId/practicelistening"
            element={<PracticeListening />}
          ></Route>
        </Routes> */}
      </BrowserRouter>
    );
  }
}

export default App;
