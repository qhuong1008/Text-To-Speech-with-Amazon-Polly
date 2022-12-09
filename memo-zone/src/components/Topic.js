import { useParams } from "react-router-dom";
import data from "../data";

const Topic = (props) => {
  return (
    <div className="topicItem-container">
      <div className="topic-icon"></div>
      {props.topicName}
    </div>
  );
};

export default Topic;
