import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import data from "../../data";

function NewCourseModal(props) {
  const [name, setName] = useState("");
  const course = {
    courseId: 0,
    courseName: "",
    courseTopics: [],
  };
  const CourseAvailableCheck = (name) => {
    let check = false;
    data.map((courseItem) => {
      if (name === courseItem.courseName) check = true;
    });
    return check;
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
        course.courseId = data.length + 1;
        data.push(course);

        // handle notification
        props.onHide();
        console.log(CourseAvailableCheck(course.courseName));
        alert("Tạo khóa học thành công!");
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
