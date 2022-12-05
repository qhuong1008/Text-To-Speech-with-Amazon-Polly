import Scss_Signup from "./Scss_Signup.scss";
import { useState } from "react";
import userdata from "../../userdata";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const AddNewUser = (username, password, name, email) => {
    let user = new Object();
    user.username = username;
    user.password = password;
    user.name = name;
    user.email = email;
    userdata.push(user);
    console.log(userdata);
  };
  const handleSignup = () => {
    if (
      username == "" ||
      password == "" ||
      retypePassword == "" ||
      name == "" ||
      email == ""
    ) {
      alert("Vui lòng nhập đủ thông tin!");
    } else {
      if (password != retypePassword)
        alert("Password nhập lại không trùng nhau!");
      else {
        AddNewUser(username, password, name, email);
        alert("Signup successfully!");
        window.location.href = "http://localhost:3000/signup";
      }
    }
  };
  return (
    <div class="body">
      <div className="center">
        <h1>Sign up</h1>
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
          <div className="txt_field">
            <input
              type="password"
              required
              onChange={(e) => setRetypePassword(e.target.value)}
            />
            <span></span>
            <label>Retype Password</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <span></span>
            <label>Name</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="signup-btn" onClick={handleSignup}>
            Signup
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
