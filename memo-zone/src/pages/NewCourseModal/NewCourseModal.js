import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function NewCourseModal(props) {
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
            <Form.Label>English</Form.Label>
            <Form.Control type="text" />
          </div>
          <div className="newcourse-item">
            <Form.Label>Pronounce</Form.Label>
            <Form.Control type="text" />
          </div>
          <div className="newcourse-item">
            <Form.Label>Vietnamese</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default NewCourseModal;
