import AppHeader from "../../components/AppHeader";
import data from "../../data";
import { Link, useParams } from "react-router-dom";
import style from "./style.scss";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import NewWordModal from "../NewWordModal/NewWordModal";

const MyWordTopic = () => {
  const params = useParams();
  let course = data.find((courseItem) => {
    if (courseItem.courseId == params.courseId) return courseItem;
  });
  let course_name = course.courseName;
  let topic = course.courseTopics.find((topicItem) => {
    if (topicItem.topicId == params.topicId) return topicItem;
  });
  let topic_name = topic.topicName;
  let wordlist = topic.wordlist;

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <AppHeader accountId={params.accountId} />
      <div className="wordtopic-container">
        <div className="wordtopic-wordlist">
          <div className="topic-wrapper">
            <a className="course-name">{course_name}</a>
            <div className="topic-title">Chủ đề từ vựng: {topic_name}</div>
            <div className="addnewword-btn" onClick={() => setModalShow(true)}>
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
        <NewWordModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};
export default MyWordTopic;
