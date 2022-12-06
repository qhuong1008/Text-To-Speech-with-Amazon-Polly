import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Word</Modal.Title>
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
export default MyVerticallyCenteredModal;
