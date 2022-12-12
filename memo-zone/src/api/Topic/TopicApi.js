import { axiosInstance } from "../types/axios";

const getTopics = async () => {
  return await axiosInstance.get("/api/topics");
};

const getTopicById = async (topicId) => {
  return await axiosInstance.get(`/api/topics/${topicId}`);
};

const getTopicByCourseId = async (courseId) => {
  return await axiosInstance.get(`/api/topics/course/${courseId}`);
};

const addTopic = async (topic) => {
  return await axiosInstance.post("/api/topics", topic);
};

const updateTopicById = async (topic, topicId) => {
  return await axiosInstance.post(`/api/topics/${topicId}`, topic);
};

const deleteTopicById = async (topicId) => {
  return await axiosInstance.delete(`/api/topics/${topicId}`);
};
export {
  getTopics,
  getTopicById,
  addTopic,
  updateTopicById,
  deleteTopicById,
  getTopicByCourseId,
};
