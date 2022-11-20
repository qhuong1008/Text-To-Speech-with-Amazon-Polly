import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import { Link } from "react-router-dom";
import { useState } from "react";

// giả sử đã select được course từ trang trước đó
import data from "../../data";
const Course = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wordlist = data[0].courseTopics[0].wordlist;
  const word = wordlist[0];

  const nextWordHandle = () => {};
  return (
    <div>
      <AppHeader />
      <div className="course-container">
        <div className="course-info">
          <div>Tên khóa học: {data[0].courseName}</div>
          <div>
            Info: Phần 6 của nhiệm vụ đầy cảm hứng và hoàn chỉnh đến Memrise
            Toeic. Tranh luận trong tiếng Anh mà không sợ bị lép vế, nhặt nhạnh
            các lối nói gây cảm hứng, và nói như người bản địa với những câu đùa
            dí dỏm đa dụng.
          </div>
        </div>
        <div className="course-list">
          <div className="word-info">
            <div>Eng: {word.eng}</div>
            <div>Pronounce: {word.pronounce}</div>
            <div>Viet: {word.viet}</div>
          </div>
          <div style={{ color: "red" }} onClick={nextWordHandle}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
