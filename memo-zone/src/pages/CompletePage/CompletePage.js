import AppHeader from "../../components/AppHeader";
import style from "./style.scss";
import { Link, useParams } from "react-router-dom";
import data from "../../data";

const CompletePage = () => {
  const params = useParams();
  console.log(params);
  let course = data.find((courseItem) => {
    if (courseItem.courseId == params.courseId) return courseItem;
  });
  let topic = course.courseTopics.find((topicItem) => {
    if (topicItem.topicId == params.topicId) return topicItem;
  });
  return (
    <div className="completepage-container">
      <AppHeader />
      <div className="result-label">
        <div className="label">Bạn đã hoàn thành bài học!</div>
        <div className="label">Làm tốt lắm!</div>
      </div>
      <div className="choice-container">
        <div className="choice-label">Tiếp theo dành cho bạn</div>
        <div className="choice-btn">
          <Link
            to={`/course/${course.courseId}/topic`}
            className="choice-btn-item"
          >
            Học từ mới
          </Link>
          <Link
            to={`/course/${course.courseId}/topic/${topic.topicId}/practicecommon`}
            className="choice-btn-item"
          >
            Ôn tập thông thường
          </Link>
          <Link
            to={`/course/${course.courseId}/topic/${topic.topicId}/practicelistening`}
            className="choice-btn-item"
          >
            Ôn tập Listening
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;
