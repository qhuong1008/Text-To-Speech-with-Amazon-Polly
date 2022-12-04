import { useParams } from "react-router-dom";
import data from "../data";

const Topic = (props) => {
  const params = useParams();
  let course = data.find((courseItem) => {
    if (courseItem.courseId == params.courseId) return courseItem;
  });
  let topic = course.courseTopics.find((topicItem) => {
    if (topicItem.topicId == props.topicId) return topicItem;
  });
  console.log(topic);
  return (
    <div className="topicItem-container">
      <div className="topic-icon"></div>
      {topic.topicName}
    </div>
  );
};

export default Topic;
