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
      <AppHeader />
      <div className="topiclist-container">
        
        <div className="course-info">
          <div className="course-name">{course_name}</div>
          <div className="course-description">Course description</div>
        </div>
        <div className="course-topics grid">
          {topics.map((topicItem) => {
            return (
              <Link className="course-topic" to={`/course/${course_id}/topic/${topicItem.topicId}`}>
                <Topic topicId={topicItem.topicId} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopicList;
