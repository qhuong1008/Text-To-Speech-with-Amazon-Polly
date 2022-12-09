import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import data from "../../data";
import { TopicApi, CourseApi, WordApi } from "../../api/index";

function NewCourseModal(props) {
  const [name, setName] = useState("");
  const course = {
    courseName: "",
    accountId: props.accountId,
  };
  const CourseAvailableCheck = (name) => {
    let check = false;
    courselist.map((courseItem) => {
      if (name === courseItem.courseName) check = true;
    });
    return check;
  };

  const [courselist, setCourselist] = useState([]);
  const loadCourseList = () => {
    CourseApi.getCourseByAccountId(props.accountId)
      .then((response) => {
        setCourselist(response.data);
      })
      .catch((error) => {});
  };

  const addNewCourse = () => {
    console.log(course);
    CourseApi.addCourse(course)
      .then((response) => {})
      .catch((error) => console.log(error));
  };

  const handleAddNewCourse = () => {
    if (name === "") {
      alert("Vui lòng nhập tên khóa học!");
      return;
    } else {
      console.log(name);
      course.courseName = name.toLowerCase();
      if (CourseAvailableCheck(course.courseName) == true)
        alert("Khóa học đã tồn tại!");
      else {
        // push course item to data list
        addNewCourse();
        loadCourseList();
        // handle notification
        props.onHide();
        alert("Tạo khóa học thành công!");
      }
    }
  };

  useEffect(() => {
    loadCourseList();
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
          Thêm khóa học
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="wordinfo-wrapper">
          <div className="newcourse-item">
            <Form.Label>Tên khóa học</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value.toLowerCase())}
              type="text"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Add</Button> */}
        <Button onClick={handleAddNewCourse}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default NewCourseModal;
