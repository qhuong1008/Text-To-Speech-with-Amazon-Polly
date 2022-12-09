import axios from "axios";

const getCourses = async () => {
  return await axios.get("http://localhost:8090/api/courses");
};

const getCourseById = async (courseId) => {
  return await axios.get(`http://localhost:8090/api/courses/${courseId}`);
};

const getCourseByAccountId = async (accountId) => {
  return await axios.get(
    `http://localhost:8090/api/courses/account/${accountId}`
  );
};

const addCourse = async (course) => {
  return await axios.post("http://localhost:8090/api/courses", course);
};

const updateCourseById = async (course, courseId) => {
  return await axios.post(
    `http://localhost:8090/api/courses/${courseId}`,
    course
  );
};

const deleteCourseById = async (courseId) => {
  return await axios.delete(`http://localhost:8090/api/courses/${courseId}`);
};
export {
  getCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById,
  getCourseByAccountId,
};
