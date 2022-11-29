import AppHeader from "../../components/AppHeader";
import style from "./style.scss";
import { Link } from "react-router-dom";

const CompletePage = () => {
  return (
    <div className="completepage-container">
      <AppHeader />
      <div className="result-label">
        <div className="label">Bạn đã hoàn thành bài học!</div>
        <div className="label">Làm tốt lắm!</div>
      </div>
      <div className="choice-container">
        <div className="choice-label">Tiếp theo dành cho bạn</div>
        <div className="choice-btn">
          <Link to="/newword" className="choice-btn-item">
            Học từ mới
          </Link>
          <Link to="/commonpractice" className="choice-btn-item">
            Học thông thường
          </Link>
          <Link to="/listenpractice" className="choice-btn-item">
            Học nghe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;
