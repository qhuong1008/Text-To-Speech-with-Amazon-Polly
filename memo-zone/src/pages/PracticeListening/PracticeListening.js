import style from "./style.scss";
import GlobalStyle from "../GlobalStyle.scss";
import data from "../../data";
import AppHeader from "../../components/AppHeader";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AWS from "aws-sdk";
import $ from "jquery";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const PracticeListening = (props) => {
  const params = useParams();
  let course = data.find((courseItem) => {
    if (courseItem.courseId == params.courseId) return courseItem;
  });
  let course_name = course.courseName;
  let topic = course.courseTopics.find((topicItem) => {
    if (topicItem.topicId == params.topicId) return topicItem;
  });
  let topic_name = topic.topicName;
  let wordlist = topic.wordlist;
  console.log(course);
  let course_id = course.id;
  const [currentIndex, setCurrentIndex] = useState(0);
  var word = wordlist[currentIndex];

  const [inputValue, setInputValue] = useState("");
  const [incorrect, setIncorrect] = useState(false);

  const handleNextWord = () => {
    if (inputValue == word.eng.toLowerCase()) {
      setCurrentIndex(currentIndex + 1);
      setInputValue("");
      setIncorrect(false);
    } else {
      setIncorrect(true);
    }
  };

  var AWS = require("aws-sdk");
  var $ = require("jquery");
  AWS.config.region = "us-east-1"; // Region
  AWS.config.credentials = new AWS.Credentials(
    "ASIASCU3UYOHWDIR67P7",
    "lPDZk8Z8dyidQI1ZMeq1lqcX75kuMWacsAUcB84A",
    "FwoGZXIvYXdzEOP//////////wEaDKFEqnliHQ2VAru58CLPARBXiZFcNsO1+V2I0oU4T3u5BfFebiQbgnXpfyD5n/HMEKPhqOXllpOFRys99cBtHU9hp2rJ2m0C7zEnG4s9zuaT8T8xI3BxTRxDZsReVb78aBpWME+t9AGLkn+FDq7QUDv8tdQMx5FuFrH4EIgqkbNDjRm9XgA3ao3HI1xnsmgnhhUusZ+KMwifUxnMxTZnKDr3UjhOwkkwXBOF6B0A9uQW3yX7cp126AWnKs8VVEKs/kGOvcyVFWlpkpRYAtWOuTp7y11SNXHfMZ3RMH+quCjcgbecBjItCX1R6dIfenBLzvk1nGNlOx0tm7dSegaj/M6jNIEsfE5sZ/EZvrJrkHp4KWfw"
  );
  var polly = new AWS.Polly();
  function doSynthesize(text, languageCode) {
    var voiceId;
    var textType = "text";
    // // Get the checkbox
    // var checkBox = document.getElementById("toggle");

    // // If the checkbox is checked, display the output text
    // if (checkBox.checked == true) {
    //   textType = "ssml";
    // }
    switch (languageCode) {
      case "En-US":
        voiceId = "Matthew";
        break;
      case "En-UK":
        voiceId = "Emma";
        break;
      case "En-AU":
        voiceId = "Russell";
        break;
      default:
        voiceId = null;
        break;
    }
    if (!voiceId) {
      alert(
        'Speech synthesis unsupported for language code: "' + languageCode + '"'
      );
      return;
    }
    var params = {
      OutputFormat: "mp3",
      // SampleRate: document.querySelector("#rate").value,
      Text: text,
      TextType: textType,
      VoiceId: voiceId,
    };

    polly.synthesizeSpeech(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        alert("Error calling Amazon Polly. " + err.message);
      } else {
        var uInt8Array = new Uint8Array(data.AudioStream);
        var arrayBuffer = uInt8Array.buffer;
        var blob = new Blob([arrayBuffer]);
        var url = URL.createObjectURL(blob);
        document.getElementById("audioSource").src = url;
        document.getElementById("audioPlayback").load();
        document.getElementById("audioPlayback").play();
      }
    });
  }
  const doSynthesizeInput = () => {
    // var text = document.getElementById("input").value.trim();
    var text = word.eng;
    if (!text) {
      return;
    }
    var sourceLanguageCode = document.getElementById("languages").value;
    doSynthesize(text, sourceLanguageCode);
  };
  const doSynthesizeInput_US = () => {
    // var text = document.getElementById("input").value.trim();
    var text = word.eng;
    if (!text) {
      return;
    }
    var sourceLanguageCode = "En-US";
    doSynthesize(text, sourceLanguageCode);
  };
  const doSynthesizeInput_UK = () => {
    // var text = document.getElementById("input").value.trim();
    var text = word.eng;
    if (!text) {
      return;
    }
    var sourceLanguageCode = "En-UK";
    doSynthesize(text, sourceLanguageCode);
  };
  return (
    <>
      <AppHeader />
      <div className="learn-container">
        <div className="word-container">
          <div className="wordItem">
            <ul className="word-info">
              {/* <li className="word-info-item">
                    <label>TIẾNG ANH</label>
                    <div className="info english">{word.eng}</div>
                </li> */}
              {/* <li className="word-info-item">
                <label>TIẾNG VIỆT</label>
                <div className="info english">{word.viet}</div>
              </li> */}
              <li className="word-info-item">
                <label>PHÁT ÂM</label>
                <div className="info english pronounce">
                  <button id="start" onClick={doSynthesizeInput_US}>
                    <FontAwesomeIcon icon={faVolumeUp} />
                  </button>
                  <button id="start" onClick={doSynthesizeInput_UK}>
                    <FontAwesomeIcon icon={faVolumeUp} />
                  </button>
                </div>
              </li>
              <li className="word-info-item">
                <label>TIẾNG ANH</label>
                {incorrect && (
                  <div className="word-incorrect">
                    {" "}
                    {word.eng.toLowerCase()}
                  </div>
                )}
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </li>
            </ul>
          </div>
          <div className="wordItem">
            {/* <div className="next-btn" onClick={handleNextWord}>
          </div> */}
            {currentIndex != wordlist.length - 1 && (
              <div className="next-btn" onClick={handleNextWord}>
                <FontAwesomeIcon className="icon" icon={faAngleRight} />
                Next
              </div>
            )}
            {currentIndex == wordlist.length - 1 && (
              <Link
                className="next-btn"
                to={`/course/${course.courseId}/topic/${topic.topicId}/complete`}
                onClick={handleNextWord}
              >
                <FontAwesomeIcon icon={faAngleRight} />
                Next
              </Link>
            )}
          </div>
        </div>

        <audio id="audioPlayback" controls style={{ display: "none" }}>
          <source id="audioSource" type="audio/mp3" src="" />
        </audio>
        {/* <select id="languages" className="form-select bg-secondary text-light">
          <option value="En-US">English(US)</option>
          <option value="En-UK">English(UK)</option>
          <option value="En-AU">English(Australian)</option>
        </select> */}
      </div>
    </>
  );
};
export default PracticeListening;
