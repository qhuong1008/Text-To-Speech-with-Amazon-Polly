import AppHeader from "../../components/AppHeader";
import style from "./style.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CompletePage = () => {
  const params = useParams();

  return (
    <div className="completepage-container">
      <AppHeader accountId={params.accountId} />
      <div className="result-label">
        <div className="label">Bạn đã hoàn thành bài học!</div>
        <div className="label">Làm tốt lắm!</div>
      </div>
      <div className="choice-container">
        <div className="choice-label">Tiếp theo dành cho bạn</div>
        <div className="choice-btn">
          <Link
            to={`/${params.accountId}/course/${params.courseId}/topic`}
            className="choice-btn-item"
          >
            Học từ mới
          </Link>
          <Link
            to={`/${params.accountId}/course/${params.courseId}/topic/${params.topicId}/practicecommon`}
            className="choice-btn-item"
          >
            Ôn tập thông thường
          </Link>
          <Link
            to={`/${params.accountId}/course/${params.courseId}/topic/${params.topicId}/practicelistening`}
            className="choice-btn-item"
          >
            Ôn tập Listening
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;
