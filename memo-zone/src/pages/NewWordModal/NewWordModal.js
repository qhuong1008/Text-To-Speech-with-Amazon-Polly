import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TopicApi, CourseApi, WordApi } from "../../api/index";

function NewWordModal(props) {
  const [english, setEnglish] = useState("");
  const [pronounce, setPronounce] = useState("");
  const [viet, setViet] = useState("");

  let word = {
    eng: "",
    pronounce: "",
    viet: "",
    topicId: props.topicId,
  };
  const addNewWord = () => {
    WordApi.addWord(word)
      .then((response) => {})
      .catch((error) => console.log(error));
  };

  const [wordlist, setWordlist] = useState([]);
  const loadWordList = () => {
    WordApi.getWordByTopicId(props.topicId)
      .then((response) => {
        setWordlist(response.data);
      })
      .catch((error) => console.log(error));
  };

  const WordAvailableCheck = (name) => {
    let check = false;
    wordlist.map((wordItem) => {
      if (wordItem.eng.toLowerCase() === name.toLowerCase()) check = true;
    });
    return check;
  };
  let count = 0;
  const handleAddNewWord = () => {
    if (english === "" || pronounce == "" || viet == "") {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    } else {
      let wordEng = english.toLowerCase();
      if (WordAvailableCheck(wordEng) == true) alert("Từ vựng đã tồn tại!");
      else {
        // push course item to data list
        word.eng = english;
        word.pronounce = pronounce;
        word.viet = viet;
        addNewWord(word);
        count++;

        // handle notification
        props.onHide();
        alert("Tạo từ vựng thành công!");
      }
    }
  };

  useEffect(() => {
    loadWordList();
  });
  useEffect(() => {
    loadWordList();
  }, [count]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thêm từ vựng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="wordinfo-wrapper">
          <div className="newcourse-item">
            <Form.Label>English</Form.Label>
            <Form.Control
              onChange={(e) => setEnglish(e.target.value.toLowerCase())}
              type="text"
            />
          </div>
          <div className="newcourse-item">
            <Form.Label>Pronounce</Form.Label>
            <Form.Control
              onChange={(e) => setPronounce(e.target.value.toLowerCase())}
              type="text"
            />
          </div>
          <div className="newcourse-item">
            <Form.Label>Vietnamese</Form.Label>
            <Form.Control
              onChange={(e) => setViet(e.target.value.toLowerCase())}
              type="text"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddNewWord}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default NewWordModal;
