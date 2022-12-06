import { NavLink } from "react-router-dom";

const MyCourse = (props) => {
  return (
    <div className="course-container">
      <div className="course-name">{props.courseName}</div>
      <NavLink to={`/editmycourse`}>
        <div className="enterCourse-btn">Edit lớp học</div>
      </NavLink>
    </div>
  );
};

// trang này hiển thị danh sách chủ đề từ vựng

export default MyCourse;
