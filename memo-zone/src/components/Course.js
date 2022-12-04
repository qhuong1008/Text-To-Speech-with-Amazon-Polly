import { NavLink } from "react-router-dom";

const Course = (props) => {
  return (
    <div className="course-container">
      <div className="course-name">{props.courseName}</div>
      <NavLink to={`/course/${props.courseId}/learn`}>
        <div className="learn-btn">Học từ mới</div>
      </NavLink>
    </div>
  );
};

// trang này hiển thị danh sách chủ đề từ vựng

export default Course;
