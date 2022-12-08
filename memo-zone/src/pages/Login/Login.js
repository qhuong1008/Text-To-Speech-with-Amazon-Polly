import Scss_Login from "./Scss_Login.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userdata from "../../userdata";
import axios from "axios";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { UserApi } from "../../api/index";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);

  const handleLogin = () => {
    if (username == "" || password == "") {
      alert("Vui lòng nhập đủ thông tin!");
    } else {
      let user = userdata.find((userItem) => {
        if (userItem.username == username && userItem.password == password) {
          return userItem;
        }
      });
      if (user == undefined) {
        alert("User not exist!");
      } else {
        window.location.href = "/homepage";
        // window.location.href =
        // "http://deploy-react-memozone.s3-website-us-east-1.amazonaws.com/homepage";
      }
    }
    // console.log(user);
  };

  // database test
  const [datauser, setDatauser] = useState();
  // const getUsers = async () => {
  //   const response = await axios.get("http://localhost:8090/api/users");
  //   setDatauser(response.data);
  // };
  console.log(datauser);

  const loadDataUser = () => {
    UserApi.getUsers()
      .then((response) => {
        setDatauser(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    loadDataUser();
  }, []);
  return (
    <div class="body">
      <div className="center">
        <h1>Login</h1>
        <form>
          <div className="txt_field">
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <div className="login-btn" onClick={handleLogin}>
            Login
          </div>
          <div className="signup_link">
            Not a member? <a href="/signup">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
