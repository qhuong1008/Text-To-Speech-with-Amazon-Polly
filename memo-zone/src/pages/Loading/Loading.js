import Spinner from "react-bootstrap/Spinner";
import style from "./style.scss";
function Loading() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
