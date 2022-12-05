import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import { Link, useParams } from "react-router-dom";
import Topic from "../../components/Topic";
import { useState } from "react";
import style from "./style.scss";

import data from "../../data";
const TopicList = (props) => {
  const params = useParams();
  let course = data.find((courseItem) => {
    if (courseItem.courseId == params.courseId) return courseItem;
  });
  let course_id = course.courseId;
  let course_name = course.courseName;
  let topics = course.courseTopics;
  return (
    <div>
      <div className="topiclist-container">
        <AppHeader />
        <div className="course-info">
          {/* <div className="course-description">Course description</div> */}
          <div className="course-topics">
            <div className="course-name">{course_name}</div>
            <div className="grid">
              {topics.map((topicItem) => {
                return (
                  <Link to={`/course/${course_id}/topic/${topicItem.topicId}`}>
                    <Topic topicId={topicItem.topicId} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicList;
