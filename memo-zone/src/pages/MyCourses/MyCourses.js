import style from "./style.scss";
import AppHeader from "../../components/AppHeader";
import data from "../../data";
import MyCourse from "../../components/MyCourse";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import NewCourseModal from "../NewCourseModal/NewCourseModal";

const MyCourses = () => {
  const params = useParams();
  console.log("check:", params.accountId);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div class="home-container">
      <AppHeader accountId={params.accountId} />
      <h1>Khoá học của tôi</h1>
      <div className="createcourse-btn" onClick={() => setModalShow(true)}>
        Tạo khóa học mới
      </div>

      <div className="course-list">
        {data.map((courseItem) => {
          return (
            <MyCourse
              accountId={params.accountId}
              courseId={courseItem.courseId}
              courseName={courseItem.courseName}
              courseTopics={courseItem.courseTopics}
            />
          );
        })}
      </div>
      <NewCourseModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default MyCourses;
