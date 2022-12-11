import style from "./style.scss";
import AppHeader from "../../components/AppHeader";
import data from "../../data";
import MyCourse from "../../components/MyCourse";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NewCourseModal from "../NewCourseModal/NewCourseModal";
import { CourseApi } from "../../api/index";
import Loading from "../../pages/Loading/Loading";

const MyCourses = () => {
  const params = useParams();

  const [modalShow, setModalShow] = React.useState(false);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadAllCourses = () => {
    CourseApi.getCourseByAccountId(params.accountId)
      .then((response) => {
        setCourses(response.data);
      })
      .then(setIsLoading(false))
      .catch((error) => {});
  };

  useEffect(() => {
    loadAllCourses();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div class="home-container">
      <AppHeader accountId={params.accountId} />
      <div className="mycourses-container">
        <h1>Khoá học của tôi</h1>
        <div className="createcourse-btn" onClick={() => setModalShow(true)}>
          Tạo khóa học mới
        </div>

        <div className="course-list">
          {courses.map((courseItem) => {
            const courseName = courseItem.courseName;
            return (
              <MyCourse
                accountId={params.accountId}
                courseId={courseItem.courseId}
                courseName={courseItem.courseName}
              />
            );
          })}
        </div>
      </div>
      <NewCourseModal
        accountId={params.accountId}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default MyCourses;
