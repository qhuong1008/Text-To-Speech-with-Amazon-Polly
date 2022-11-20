import style from "./style.scss";

const Word = (props) => {
  return (
    <div className="word-container">
      <div className="wordItem">
        <div className="word-eng">sad</div>
        <div className="word-viet">buồn</div>
        <div className="word-listen">*listen icon*</div>
      </div>
      <div className="wordItem">
        <div className="next-btn">Next</div>
      </div>
    </div>
  );
};
export default Word;
