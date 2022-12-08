import { useParams } from "react-router-dom";
import data from "../data";

const MyTopic = (props) => {
  const params = useParams();
  let course = data.find((courseItem) => {
    if (courseItem.courseId == params.courseId) return courseItem;
  });
  let topic = course.courseTopics.find((topicItem) => {
    if (topicItem.topicId == props.topicId) return topicItem;
  });
  return <div className="topicItem-container">{topic.topicName}</div>;
};

export default MyTopic;
