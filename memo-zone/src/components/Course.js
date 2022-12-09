import { NavLink } from "react-router-dom";

const Course = (props) => {
  return (
    <div className="course-container">
      <div className="course-name">{props.courseName}</div>
      <NavLink to={`/${props.accountId}/course/${props.courseId}/topic`}>
        <div className="enterCourse-btn">Tham gia lớp học</div>
      </NavLink>
    </div>
  );
};

// trang này hiển thị danh sách chủ đề từ vựng

export default Course;
