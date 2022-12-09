import axios from "axios";

const getTopics = async () => {
  return await axios.get("http://localhost:8090/api/topics");
};

const getTopicById = async (topicId) => {
  return await axios.get(`http://localhost:8090/api/topics/${topicId}`);
};

const getTopicByCourseId = async (courseId) => {
  return await axios.get(`http://localhost:8090/api/topics/course/${courseId}`);
};

const addTopic = async (topic) => {
  return await axios.post("http://localhost:8090/api/topics", topic);
};

const updateTopicById = async (topic, topicId) => {
  return await axios.post(`http://localhost:8090/api/topics/${topicId}`, topic);
};

const deleteTopicById = async (topicId) => {
  return await axios.delete(`http://localhost:8090/api/topics/${topicId}`);
};
export {
  getTopics,
  getTopicById,
  addTopic,
  updateTopicById,
  deleteTopicById,
  getTopicByCourseId,
};
