import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import { Link, useParams } from "react-router-dom";
import Topic from "../../components/Topic";
import { useState, useEffect } from "react";
import { TopicApi, CourseApi } from "../../api/index";
import style from "./style.scss";

import data from "../../data";
const TopicList = (props) => {
  const params = useParams();

  const [course, setCourse] = useState({});
  const [courseName, setCourseName] = useState("");

  const loadCurrentCourse = () => {
    CourseApi.getCourseById(params.courseId)
      .then((response) => {
        setCourse(response.data);

        setCourseName(course[0].courseName);
      })
      .catch((error) => console.log(error));
  };

  const [topics, setTopics] = useState([]);

  const loadAllTopics = () => {
    TopicApi.getTopicByCourseId(params.courseId)
      .then((response) => {
        setTopics(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadCurrentCourse();
    loadAllTopics();
  }, []);

  return (
    <div>
      <div className="topiclist-container">
        <AppHeader accountId={params.accountId} />
        <div className="course-info">
          {/* <div className="course-description">Course description</div> */}
          <div className="course-topics">
            <div className="course-name">{courseName}</div>

            <div className="grid">
              {topics.map((topicItem) => {
                return (
                  <Link
                    to={`/${params.accountId}/course/${params.courseId}/topic/${topicItem.topicId}`}
                  >
                    <Topic topicName={topicItem.topicName} />
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
