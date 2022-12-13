import { useParams } from "react-router-dom";

const MyTopic = (props) => {
  return <div className="topicItem-container">{props.topicName}</div>;
};

export default MyTopic;
