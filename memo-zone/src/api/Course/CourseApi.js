import { axiosInstance } from "../types/axios";

const getCourses = async () => {
  return await axiosInstance.get("/api/courses");
};

const getCourseById = async (courseId) => {
  return await axiosInstance.get(`/api/courses/${courseId}`);
};

const getCourseByAccountId = async (accountId) => {
  return await axiosInstance.get(`/api/courses/account/${accountId}`);
};

const addCourse = async (course) => {
  return await axiosInstance.post("/api/courses", course);
};

const updateCourseById = async (course, courseId) => {
  return await axiosInstance.post(`/api/courses/${courseId}`, course);
};

const deleteCourseById = async (courseId) => {
  return await axiosInstance.delete(`/api/courses/${courseId}`);
};
export {
  getCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById,
  getCourseByAccountId,
};
