import style from "./style.scss";
import GlobalStyle from "../GlobalStyle.scss";
import AppHeader from "../../components/AppHeader";
import { useState, useEffect } from "react";
import { TopicApi, CourseApi, WordApi } from "../../api/index";
import Loading from "../../pages/Loading/Loading";
import { Link, useParams } from "react-router-dom";
import AWS from "../../AWSPolly";
import $ from "jquery";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
// import AWS from "../../AWSPolly";

const PracticeCommon = (props) => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [wordlist, setWordlist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  var word = wordlist[currentIndex];
  const loadWordList = () => {
    setIsLoading(true);
    WordApi.getWordByTopicId(params.topicId)
      .then((response) => {
        setWordlist(response.data);
      })
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  };

  const [inputValue, setInputValue] = useState("");
  const [incorrect, setIncorrect] = useState(false);

  const handleNextWord = () => {
    if (inputValue == wordlist[currentIndex].eng.toLowerCase()) {
      setCurrentIndex(currentIndex + 1);
      setInputValue("");
      setIncorrect(false);
    } else {
      setIncorrect(true);
    }
  };
  useEffect(() => {
    loadWordList();
  }, []);

  var polly = new AWS.Polly();
  function doSynthesize(text, languageCode) {
    var voiceId;
    var textType = "text";

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
    var text = wordlist[currentIndex].eng;
    if (!text) {
      return;
    }
    var sourceLanguageCode = document.getElementById("languages").value;
    doSynthesize(text, sourceLanguageCode);
  };
  const doSynthesizeInput_US = () => {
    console.log("fduohfsodh");
    console.log(wordlist[currentIndex].eng);
    // var text = document.getElementById("input").value.trim();
    var text = wordlist[currentIndex].eng;
    if (!text) {
      return;
    }
    var sourceLanguageCode = "En-US";
    doSynthesize(text, sourceLanguageCode);
  };
  const doSynthesizeInput_UK = () => {
    // var text = document.getElementById("input").value.trim();
    var text = wordlist[currentIndex].eng;
    if (!text) {
      return;
    }
    var sourceLanguageCode = "En-UK";
    doSynthesize(text, sourceLanguageCode);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <AppHeader accountId={params.accountId} />
      <div className="learn-container">
        <div className="word-container">
          <div className="wordItem">
            <ul className="word-info">
              {/* <li className="word-info-item">
                    <label>TIẾNG ANH</label>
                    <div className="info english">{word.eng}</div>
                </li> */}
              <li className="word-info-item">
                <label>TIẾNG VIỆT</label>
                <div className="info english">
                  {wordlist[currentIndex].viet}
                </div>
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
              <li className="word-info-item">
                <label>TIẾNG ANH</label>
                {incorrect && (
                  <div className="word-incorrect">
                    {wordlist[currentIndex].eng}
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
                to={`/${params.accountId}/course/${params.courseId}/topic/${params.topicId}/complete`}
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
export default PracticeCommon;
