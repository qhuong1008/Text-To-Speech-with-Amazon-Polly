import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import Loading from "../../pages/Loading/Loading";
import { Link, useParams } from "react-router-dom";
import Topic from "../../components/Topic";
import { useState, useEffect } from "react";
import { TopicApi, CourseApi } from "../../api/index";

const TopicList = (props) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [course, setCourse] = useState([]);

  const loadCurrentCourse = () => {
    setIsLoading(true);
    CourseApi.getCourseById(params.courseId)
      .then((response) => {
        setCourse(response.data);
      })
      .then(setIsLoading(false))
      .catch((error) => console.log(error));
  };

  const [topics, setTopics] = useState([]);

  const loadAllTopics = () => {
    setIsLoading(true);
    TopicApi.getTopicByCourseId(params.courseId)
      .then((response) => {
        setTopics(response.data);
      })
      .then(setIsLoading(false))

      .catch((error) => console.log(error));
  };
  // setCourseName(course[0].courseName);
  useEffect(() => {
    loadCurrentCourse();
    loadAllTopics();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="topiclist-container">
        <AppHeader accountId={params.accountId} />
        <div className="course-info">
          <div className="course-topics">
            <div className="course-name"></div>
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
