import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopicApi, CourseApi } from "../../api/index";

function NewTopicModal(props) {
  const params = useParams();

  const [name, setName] = useState("");
  const topic = {
    topicName: "",
    courseId: props.courseId,
  };
  const [course, setCourse] = useState({});
  const [courseName, setCourseName] = useState("");

  const loadCurrentCourse = () => {
    CourseApi.getCourseById(params.courseId)
      .then((response) => {
        setCourse(response.data);

        setCourseName(course[0].courseName);
      })
      .catch((error) => console.log(error));
  };

  const [topiclist, setTopiclist] = useState([]);
  const loadTopicList = () => {
    TopicApi.getTopicByCourseId(course.courseId)
      .then((response) => {
        setTopiclist(response.data);
      })
      .catch((error) => {});
  };

  const TopicAvailableCheck = (name) => {
    let check = false;
    topiclist.map((topicItem) => {
      if (name == topicItem.name) check = true;
    });
    return check;
  };

  const addNewTopic = () => {
    TopicApi.addTopic(topic)
      .then((response) => {})
      .catch((error) => console.log(error));
  };

  const handleAddNewTopic = () => {
    if (name === "") {
      alert("Vui lòng nhập tên chủ đề!");
      return;
    } else {
      console.log(name);
      let topicName = name.toLowerCase();
      if (TopicAvailableCheck(topic.topicName) == true)
        alert("Chủ đề đã tồn tại!");
      else {
        // push course item to data list
        topic.topicName = topicName;
        addNewTopic();
        // handle notification
        props.onHide();
        alert("Tạo chủ đề thành công!");
      }
    }
  };

  useEffect(() => {
    loadCurrentCourse();
    loadTopicList();
  }, []);
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
