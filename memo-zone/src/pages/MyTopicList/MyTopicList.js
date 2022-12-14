import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import { Link, useParams } from "react-router-dom";
import MyTopic from "../../components/MyTopic";
import { useState, useEffect } from "react";
import { TopicApi, CourseApi } from "../../api/index";
import NewTopicModal from "../NewTopicModal/NewTopicModal";
import style from "./style.scss";
import Loading from "../../pages/Loading/Loading";

const MyTopicList = (props) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [courseName, setCourseName] = useState("");

  const loadCurrentCourse = () => {
    setIsLoading(true);
    CourseApi.getCourseById(params.courseId)
      .then((response) => {
        setCourse(response.data);
        setCourseName(course[0].courseName);
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

  useEffect(() => {
    loadCurrentCourse();
    loadAllTopics();
  }, []);
  const [modalShow, setModalShow] = useState(false);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="topiclist-container">
        <AppHeader accountId={params.accountId} />
        <div className="course-info">
          {/* <div className="course-description">Course description</div> */}
          <div className="course-topics">
            <div className="course-name">{courseName}</div>
            <div className="addtopic-btn" onClick={() => setModalShow(true)}>
              Thêm chủ đề mới
            </div>
            <div className="grid">
              {topics.map((topicItem) => {
                return (
                  <Link
                    to={`/${params.accountId}/mycourses/${params.courseId}/topic/${topicItem.topicId}`}
                  >
                    <MyTopic
                      topicId={topicItem.topicId}
                      topicName={topicItem.topicName}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <NewTopicModal
        show={modalShow}
        courseId={params.courseId}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default MyTopicList;
