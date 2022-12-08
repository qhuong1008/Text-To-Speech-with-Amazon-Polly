import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import data from "../../data";

function NewTopicModal(props) {
  const [name, setName] = useState("");
  const topic = {
    topicId: 1,
    topicName: "",
    wordlist: [],
  };
  const course = data.find((courseItem) => {
    if (courseItem.courseId == props.courseId) return courseItem;
  });
  const TopicAvailableCheck = (name) => {
    const topiclist = course.courseTopics;
    let check = false;
    topiclist.map((topicItem) => {
      if (name == topicItem.name) check = true;
    });
    return check;
  };
  const handleAddNewTopic = () => {
    if (name === "") {
      alert("Vui lòng nhập tên chủ đề!");
      return;
    } else {
      console.log(name);
      let topicName = name.toLowerCase();
      if (TopicAvailableCheck(topic) == true) alert("Chủ đề đã tồn tại!");
      else {
        // push course item to data list
        topic.topicId = course.courseTopics.length + 1;
        topic.topicName = topicName;
        data.forEach((courseItem) => {
          if (courseItem.courseId == course.courseId) {
            courseItem.courseTopics.push(topic);
          }
        });
        // handle notification
        props.onHide();
        alert("Tạo chủ đề thành công!");
        console.log(data);
      }
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thêm chủ đề từ vựng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="wordinfo-wrapper">
          <div className="newcourse-item">
            <Form.Label>Tên chủ đề</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value.toLowerCase())}
              type="text"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddNewTopic}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default NewTopicModal;
