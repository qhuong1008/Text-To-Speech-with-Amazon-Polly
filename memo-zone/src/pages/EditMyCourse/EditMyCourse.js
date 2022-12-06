import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import style from "./style.scss";
import Form from "react-bootstrap/Form";
import MyVerticallyCenteredModal from "../MyVerticallyCenteredModal/MyVerticallyCenteredModal";

import data from "../../data";
const EditMyCourse = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <AppHeader />
      <div className="wordtopic-container">
        <div className="wordtopic-wordlist">
          <div className="topic-wrapper">
            <a className="course-name">Course name</a>
            <div className="topic-title">Chủ đề từ vựng: cai chu de</div>
          </div>
          <div className="topic-wordlist">
            <div className="addword-btn" onClick={() => setModalShow(true)}>
              Thêm từ vựng
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Engish</th>
                  <th>Pronounce</th>
                  <th>Vietnamese</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ㅗㅇㄴ래ㅙ</td>
                  <td>ㅗㅇㄴ래ㅙ</td>
                  <td>ㅗㅇㄴ래ㅙ</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default EditMyCourse;
