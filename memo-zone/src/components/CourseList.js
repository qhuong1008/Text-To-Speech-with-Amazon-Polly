import data from "../data";
// component này chứa nhiều course
const CourseList = () => {
  return (
    <div>
      {data.map((courseItem) => {
        return <Course courseItem={courseItem.courseTopics} />;
      })}
    </div>
  );
};
export default CourseList;
