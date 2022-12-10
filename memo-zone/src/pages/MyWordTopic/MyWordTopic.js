import AppHeader from "../../components/AppHeader";
import data from "../../data";
import { Link, useParams } from "react-router-dom";
import style from "./style.scss";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import NewWordModal from "../NewWordModal/NewWordModal";
import { TopicApi, CourseApi, WordApi } from "../../api/index";
import { useEffect } from "react";

const MyWordTopic = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const [course, setCourse] = useState({});
  const [courseName, setCourseName] = useState("");

  const loadCurrentCourse = () => {
    CourseApi.getCourseById(params.courseId)
      .then((response) => {
        setCourse(response.data);
        setCourseName(course[0].courseName);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const [topic, setTopic] = useState({});
  const [topicName, setTopicName] = useState("");

  const loadCurrentTopic = () => {
    TopicApi.getTopicById(params.topicId)
      .then((response) => {
        setTopic(response.data);
        setTopicName(topic[0].topicName);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const [wordlist, setWordlist] = useState([]);
  const loadWordList = () => {
    WordApi.getWordByTopicId(params.topicId)
      .then((response) => {
        setWordlist(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadCurrentCourse();
    // loadCurrentCourse();
  }, []);
  useEffect(() => {
    loadCurrentTopic();
    // loadCurrentTopic();
  });
  useEffect(() => {
    loadWordList();
    // loadWordList();
  }, []);
  return (
    <>
      <AppHeader accountId={params.accountId} />
      <div className="wordtopic-container">
        {loading == false && (
          <div className="wordtopic-wordlist">
            <div className="topic-wrapper">
              <a className="course-name">{courseName}</a>
              <div className="topic-title">Chủ đề từ vựng: {topicName}</div>
              <div
                className="addnewword-btn"
                onClick={() => setModalShow(true)}
              >
                Thêm từ mới
              </div>
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
        )}
        {loading && <>loading..</>}
        <NewWordModal
          topicId={params.topicId}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};
export default MyWordTopic;
