import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import { Link, useParams } from "react-router-dom";
import MyTopic from "../../components/MyTopic";
import { useState } from "react";
import NewTopicModal from "../NewTopicModal/NewTopicModal";
import style from "./style.scss";

import data from "../../data";
const MyTopicList = (props) => {
  const params = useParams();
  let course = data.find((courseItem) => {
    if (courseItem.courseId == params.courseId) return courseItem;
  });
  let course_id = course.courseId;
  let course_name = course.courseName;
  let topics = course.courseTopics;

  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <div className="topiclist-container">
        <AppHeader />
        <div className="course-info">
          {/* <div className="course-description">Course description</div> */}
          <div className="course-topics">
            <div className="course-name">{course_name}</div>
            <div className="addtopic-btn" onClick={() => setModalShow(true)}>
              Thêm chủ đề mới
            </div>
            <div className="grid">
              {topics.map((topicItem) => {
                return (
                  <Link
                    to={`/mycourses/${course_id}/topic/${topicItem.topicId}`}
                  >
                    <MyTopic topicId={topicItem.topicId} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <NewTopicModal
        show={modalShow}
        courseId={course_id}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default MyTopicList;
