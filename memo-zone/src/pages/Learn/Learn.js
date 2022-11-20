import style from "./style.scss";
import GlobalStyle from "../GlobalStyle.scss";
import data from "../../data";
import AppHeader from "../../components/AppHeader";
import Word from "../Word/Word";
import Xong from "../Xong";
import { useState } from "react";
import { Link } from "react-router-dom";
import AWS from "aws-sdk";
import $ from "jquery";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Learn = (props) => {
  let course = data[0];
  let course_name = course.courseName;
  let course_id = course.id;
  let topic = course.courseTopics[0];
  let topic_name = topic.topicName;
  let wordlist = topic.wordlist;
  const [currentIndex, setCurrentIndex] = useState(0);
  var word = wordlist[currentIndex];

  const handleNextWord = () => {
    setCurrentIndex(currentIndex + 1);
  };

  var AWS = require("aws-sdk");
  var $ = require("jquery");
  AWS.config.region = "us-east-1"; // Region
  AWS.config.credentials = new AWS.Credentials(
    "ASIASCU3UYOHS5MY75VI",
    "ipWt7BfnYg6wtcTkgxuSBSWc22O1nbtAcvaX4PYb",
    "FwoGZXIvYXdzEH8aDBnFmpx4EWSbSVwZGSLPATbeXP1LlM5Kh7y4v8Pda4UmSNBp/fIXhc81mqAUlLnkKxkPVnJU6a9e6NCzl/7PFBiemA2RjnuobqHlOBCtbB6H4tN/AEXGPoPr8OKW8bKfdNQfAOO/i9V4RawvAtChSY96XexmmBmOKq6ItMPWuD0fNhEgTYKgHcRrU3H5EIoMImnt8cvxyRAzxGUY5ZEhY4jy+XK26BTxgjqgEZFZpwz8gfWtNYVi0l+looKdwRCbMSgN+aV5YY+sPsqvUVtT5SvzHBagchAGvM2Tg+vjxCjW0uibBjItdAzd6z2GRKa8rDwWb+RKq3Yvg8DTvZaW2VoY1bWfam1aG5L7NB7noyW5TngR"
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
              <li className="word-info-item">
                <label>TIẾNG ANH</label>
                <div className="info english">{word.eng}</div>
              </li>
              <li className="word-info-item">
                <label>TIẾNG VIỆT</label>
                <div className="info english">{word.viet}</div>
              </li>
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
              <Link className="next-btn" to="/xong" onClick={handleNextWord}>
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
export default Learn;
