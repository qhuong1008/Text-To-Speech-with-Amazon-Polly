import style from "./style.scss";
import AppHeader from "../../components/AppHeader";
import Course from "../../components/Course";
import { useParams } from "react-router-dom";
import { CourseApi } from "../../api/index";
import { useState, useEffect } from "react";

const Home = () => {
  const params = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAllCourses = () => {
    CourseApi.getCourses()
      .then((response) => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    loadAllCourses();
  }, []);

  return (
    <div class="home-container">
      <AppHeader accountId={params.accountId} />
      {loading == false && (
        <div className="mycourses-container">
          <h1>Tất cả các khoá học</h1>
          <div className="course-list">
            {courses.map((courseItem) => {
              return (
                <Course
                  key={courseItem.courseId}
                  accountId={params.accountId}
                  courseId={courseItem.courseId}
                  courseName={courseItem.courseName}
                />
              );
            })}
          </div>
        </div>
      )}
      {loading && <>loading..</>}
    </div>
  );
};

export default Home;
