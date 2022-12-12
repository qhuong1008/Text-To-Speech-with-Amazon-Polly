import { axiosInstance } from "../types/axios";

const getWords = async () => {
  return await axiosInstance.get("/api/words");
};

const getWordById = async (wordId) => {
  return await axiosInstance.get(`/api/words/${wordId}`);
};

const getWordByTopicId = async (topicId) => {
  return await axiosInstance.get(`/api/words/topic/${topicId}`);
};

const addWord = async (word) => {
  return await axiosInstance.post("/api/words", word);
};

const addWordList = async (wordlist) => {
  return await axiosInstance.post("/api/wordlist", wordlist);
};
const updateWordById = async (word, wordId) => {
  return await axiosInstance.post(`/api/words/${wordId}`, word);
};

const deleteWordById = async (wordId) => {
  return await axiosInstance.delete(`/api/words/${wordId}`);
};
export {
  getWords,
  getWordById,
  addWord,
  updateWordById,
  deleteWordById,
  getWordByTopicId,
  addWordList,
};
