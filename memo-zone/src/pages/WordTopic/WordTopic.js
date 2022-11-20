import AppHeader from "../../components/AppHeader";
import data from "../../data";
import { Link } from "react-router-dom";
import style from "./style.scss";
import GlobalStyle from "../GlobalStyle.scss";
import Table from "react-bootstrap/Table";

const WordTopic = () => {
  let course = data[0];
  let course_name = course.courseName;
  let course_id = course.id;
  let topic = course.courseTopics[0];
  let topic_name = topic.topicName;
  let wordlist = topic.wordlist;
  return (
    <>
      <AppHeader />
      <div className="wordtopic-container">
        <div className="wordtopic-wordlist">
          <div className="topic-wrapper">
            <a className="course-name">{course_name}</a>
            <div className="topic-title">Chủ đề từ vựng: {topic_name}</div>
            <div className="learn-btn">Học những từ này</div>
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
