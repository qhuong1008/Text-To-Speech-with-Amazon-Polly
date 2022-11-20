import style from "./style.scss";
import GlobalStyle from "../GlobalStyle.scss";
import data from "../../data";
import AppHeader from "../../components/AppHeader";
import Word from "../Word/Word";
import Xong from "../Xong";
import { useState } from "react";
import { Link } from "react-router-dom";

const Learn = (props) => {
  let course = data[0];
  let course_name = course.courseName;
  let course_id = course.id;
  let topic = course.courseTopics[0];
  let topic_name = topic.topicName;
  let wordlist = topic.wordlist;

  const handleNextWord = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  var word = wordlist[currentIndex];
  console.log(currentIndex);
  return (
    <>
      <AppHeader />
      <div className="word-container">
        <div className="wordItem">
          <ul className="word-info">
            <li className="word-info-item">
              <label>TIẾNG ANH</label>
              <div className="info english">{word.eng}</div>
            </li>
            <li className="word-info-item">
              <label>TIẾNG VIỆT</label>
              <div className="info english">{word.viet}</div>
            </li>
            <li className="word-info-item">
              <label>PHÁT ÂM</label>
              <div className="info english">pronounce</div>
            </li>
          </ul>
        </div>
        <div className="wordItem">
          {/* <div className="next-btn" onClick={handleNextWord}>
          </div> */}
          {currentIndex != wordlist.length - 1 && (
            <div className="next-btn" onClick={handleNextWord}>
              Next
            </div>
          )}
          {currentIndex == wordlist.length - 1 && (
            <Link className="next-btn" to="/xong" onClick={handleNextWord}>
              Next
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Learn;
