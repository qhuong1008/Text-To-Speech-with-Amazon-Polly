// import React, { Component } from "react";
// // import { Routes } from "react-router-dom";
// class NewWord extends Component {
//   render() {
//     var AWS = require("aws-sdk");
//     var $ = require("jquery");
//     AWS.config.region = "us-east-1"; // Region
//     AWS.config.credentials = new AWS.Credentials(
//       "ASIASCU3UYOH5YS4YOM7",
//       "MQRvTMi7KkWYWeMgkeztQzoQq4YZEHetafoNiE5S",
//       "FwoGZXIvYXdzEFMaDM5LZgsdmABMiju/vCLPARhBne7qbNCXpJiPPeMpBRSNbwKwAxUDaq0V8Nqw9Q1uc2N5B47iDyiUK4GTxqTGJ4sJBCgiIkrO8ToKK0D9196iuOy1MOM+W3n7xbp6iZBLTeTBLjP433qc4TukWpmW2a29JvfzpsX3gvGp2LT5EOUAdRL3iQVMGMet+Rzun6AvKtl7esCjQn7Haf+5uw2MLUlk2r7YNcD5MUVD+/y2tw7YY7fT+TOemxgTC4K03nQRlBdgW9ZsEgTR8/3nWDJQ7DyL5IUskdE3+xpRKRDZzSjl7qabBjItSvzzK8SOia7U1hSZQYLnjdj7FmvKiZEQEQb5f5Rot6YIG6d4NYdiBB0e04Y3"
//     );

//     // var translate = new AWS.Translate({ region: AWS.config.region });
//     var polly = new AWS.Polly();

//     function doSynthesize(text, languageCode) {
//       var voiceId;
//       var textType = "text";
//       // // Get the checkbox
//       // var checkBox = document.getElementById("toggle");

//       // // If the checkbox is checked, display the output text
//       // if (checkBox.checked == true) {
//       //   textType = "ssml";
//       // }
//       switch (languageCode) {
//         case "En-US":
//           voiceId = "Matthew";
//           break;
//         case "En-UK":
//           voiceId = "Emma";
//           break;
//         case "En-AU":
//           voiceId = "Russell";
//           break;
//         case "Japanese":
//           voiceId = "Takumi";
//           break;
//         case "Korean":
//           voiceId = "Seoyeon";
//           break;
//         case "Norwegian":
//           voiceId = "Liv";
//           break;
//         case "Polish":
//           voiceId = "Male";
//           break;
//         case "Spanish":
//           voiceId = "Lucia";
//           break;
//         case "Russian":
//           voiceId = "Maxim";
//           break;
//         case "Dutch":
//           voiceId = "Ruben";
//           break;
//         case "Danish":
//           voiceId = "Vitoria";
//           break;
//         case "Chinese":
//           voiceId = "Zhiyu";
//           break;
//         case "Arabic":
//           voiceId = "Zeina";
//           break;
//         case "Hindi":
//           voiceId = "Aditi";
//           break;
//         case "French":
//           voiceId = "Mathieu";
//           break;
//         case "German":
//           voiceId = "Marlene";
//           break;
//         case "Icelandic":
//           voiceId = "Karl";
//           break;
//         case "Italian":
//           voiceId = "Bianca";
//           break;
//         default:
//           voiceId = null;
//           break;
//       }
//       if (!voiceId) {
//         alert(
//           'Speech synthesis unsupported for language code: "' +
//             languageCode +
//             '"'
//         );
//         return;
//       }
//       var params = {
//         OutputFormat: "mp3",
//         // SampleRate: document.querySelector("#rate").value,
//         Text: text,
//         TextType: textType,
//         VoiceId: voiceId,
//       };
//       polly.synthesizeSpeech(params, function (err, data) {
//         if (err) {
//           console.log(err, err.stack); // an error occurred
//           alert("Error calling Amazon Polly. " + err.message);
//         } else {
//           var uInt8Array = new Uint8Array(data.AudioStream);
//           var arrayBuffer = uInt8Array.buffer;
//           var blob = new Blob([arrayBuffer]);
//           var url = URL.createObjectURL(blob);
//           document.getElementById("audioSource").src = url;
//           document.getElementById("audioPlayback").load();
//           document.getElementById("audioPlayback").play();
//         }
//       });
//     }

//     var word = {
//       eng: "cat",
//       viet: "con mèo",
//     };
//     // Thực hiện chuyển văn bản thành giọng nói.
//     function doSynthesizeInput() {
//       // var text = document.getElementById("input").value.trim();
//       var text = word.eng;
//       if (!text) {
//         return;
//       }
//       var sourceLanguageCode = document.getElementById("languages").value;
//       doSynthesize(text, sourceLanguageCode);
//     }

//     return (
//       <>
//         <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.12.min.js"></script>
//         <select id="languages" className="form-select bg-secondary text-light">
//           <option value="En-US">English(US)</option>
//           <option value="En-UK">English(UK)</option>
//           <option value="En-AU">English(Australian)</option>
//           <option value="Dutch">Dutch(Netherland)</option>
//           <option value="Danish">Danish(Denmark)</option>
//           <option value="Chinese">Chinese</option>
//           <option value="Arabic">Arabic(Arab)</option>
//           <option value="Hindi">Hindi(India)</option>
//           <option value="French">French</option>
//           <option value="German">German</option>
//           <option value="Icelandic">Icelandic</option>
//           <option value="Italian">Italian</option>
//           <option value="Japanese">Japanese</option>
//           <option value="Korean">Korean</option>
//           <option value="Norwegian">Norwegian(Norway)</option>
//           <option value="Polish">Polish(Poland)</option>
//           <option value="Russian">Russian</option>
//           <option value="Spanish">Spanish(European)</option>
//         </select>
//         <button
//           id="start"
//           // className="btn btn-success mt-5 me-3"
//           onClick={doSynthesizeInput}
//         >
//           Convert
//         </button>
//         <audio id="audioPlayback" controls style={{ display: "none" }}>
//           <source id="audioSource" type="audio/mp3" src="" />
//         </audio>
//         <br />
//         New Word: {word.eng}
//         Meaning: {word.viet}
//       </>
//     );
//   }
// }

// export default NewWord;
