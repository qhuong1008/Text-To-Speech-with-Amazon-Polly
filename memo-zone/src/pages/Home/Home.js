import style from "./style.scss";
import AppHeader from "../../components/AppHeader";
import data from "../../data";
import Course from "../../components/Course";

const Home = () => {
  var vonglap = 5;
  return (
    <div class="home-container">
      <AppHeader />
      <h1>Tất cả các khoá học</h1>
      <div className="course-list">
        {data.map((courseItem) => {
          return (
            <Course
              courseId={courseItem.courseId}
              courseName={courseItem.courseName}
              courseTopics={courseItem.courseTopics}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
