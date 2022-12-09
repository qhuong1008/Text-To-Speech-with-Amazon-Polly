import { useParams } from "react-router-dom";
import data from "../data";

const MyTopic = (props) => {
  return <div className="topicItem-container">{props.topicName}</div>;
};

export default MyTopic;
