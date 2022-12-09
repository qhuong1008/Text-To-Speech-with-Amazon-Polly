import AppHeader from "../../components/AppHeader";
import data from "../../data";
import { Link, useParams } from "react-router-dom";
import style from "./style.scss";
import GlobalStyle from "../GlobalStyle.scss";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { TopicApi, CourseApi, WordApi } from "../../api/index";

const WordTopic = () => {
  const params = useParams();
  // let course = data.find((courseItem) => {
  //   if (courseItem.courseId == params.courseId) return courseItem;
  // });
  // let course_name = course.courseName;
  // let topic = course.courseTopics.find((topicItem) => {
  //   if (topicItem.topicId == params.topicId) return topicItem;
  // });
  // let topic_name = topic.topicName;
  // let wordlist = topic.wordlist;
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

  const [topic, setTopic] = useState({});
  const [topicName, setTopicName] = useState("");
  const loadCurrentTopic = () => {
    TopicApi.getTopicById(params.topicId)
      .then((response) => {
        setTopic(response.data);
        setTopicName(topic.topicName);
      })
      .catch((error) => console.log(error));
  };
  const [wordlist, setWordlist] = useState([]);
  const loadWordList = () => {
    WordApi.getWordByTopicId(params.topicId)
      .then((response) => {
        setWordlist(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadCurrentCourse();
    loadCurrentTopic();
    loadWordList();
  }, []);

  return (
    <>
      <AppHeader accountId={params.accountId} />
      <div className="wordtopic-container">
        <div className="wordtopic-wordlist">
          <div className="topic-wrapper">
            <a className="course-name">{courseName}</a>
            <div className="topic-title">Chủ đề từ vựng: {topicName}</div>
            <Link
              to={`/${params.accountId}/course/${params.courseId}/topic/${params.topicId}/learn`}
            >
              <div className="learn-btn">Học những từ này</div>
            </Link>
          </div>
          <div className="topic-wordlist">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Engish</th>
                  <th>Pronounce</th>
                  <th>Vietnamese</th>
                </tr>
              </thead>
              <tbody>
                {wordlist.map((word) => {
                  return (
                    <tr>
                      <td>{word.eng}</td>
                      <td>{word.pronounce}</td>
                      <td>{word.viet}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
export default WordTopic;
