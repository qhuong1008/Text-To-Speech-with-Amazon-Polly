import axios from "axios";

const getWords = async () => {
  return await axios.get("http://localhost:8090/api/words");
};

const getWordById = async (wordId) => {
  return await axios.get(`http://localhost:8090/api/words/${wordId}`);
};

const getWordByTopicId = async (topicId) => {
  return await axios.get(`http://localhost:8090/api/words/topic/${topicId}`);
};

const addWord = async (word) => {
  return await axios.post("http://localhost:8090/api/words", word);
};

const addWordList = async (wordlist) => {
  return await axios.post("http://localhost:8090/api/wordlist", wordlist);
};
const updateWordById = async (word, wordId) => {
  return await axios.post(`http://localhost:8090/api/words/${wordId}`, word);
};

const deleteWordById = async (wordId) => {
  return await axios.delete(`http://localhost:8090/api/words/${wordId}`);
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
