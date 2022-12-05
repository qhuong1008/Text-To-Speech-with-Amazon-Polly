import Scss_Login from "./Scss_Login.scss";
import { useState } from "react";
import userdata from "../../userdata";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/homepage";
  };
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
