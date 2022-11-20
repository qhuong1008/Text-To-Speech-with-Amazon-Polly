import style from "./style.scss";
import data from "../../data";
import AppHeader from "../../components/AppHeader";
import Word from "../Word/Word";

const Learn = (props) => {
  let course = data[0];
  let course_name = course.courseName;
  let course_id = course.id;
  let topic = course.courseTopics[0];
  let topic_name = topic.topicName;
  let wordlist = topic.wordlist;

  return (
    <>
      <AppHeader />
      <div className="word-container">
        <div className="wordItem">
          <></>
        </div>
        <div className="wordItem">
          <div className="next-btn">Next</div>
        </div>
      </div>
    </>
  );
};
export default Learn;
