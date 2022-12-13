import Scss_Signup from "./Scss_Signup.scss";
import { useState, useEffect } from "react";
import { AccountApi } from "../../api/index";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const AddNewUser = (username, password, name, email) => {
  //   let user = new Object();
  //   user.username = username;
  //   user.password = password;
  //   user.name = name;
  //   user.email = email;
  //   userdata.push(user);
  //   console.log(userdata);
  // };

  let account = {
    accountId: "",
    username: "",
    password: "",
    name: "",
    email: "",
  };
  const [accountlist, setAccountlist] = useState([]);

  const loadAllAccounts = () => {
    AccountApi.getAccounts()
      .then((response) => {
        setAccountlist(response.data);
      })
      .catch((error) => {});
  };
  const accountAvailableCheck = (username) => {
    let check = false;
    accountlist.forEach((accountItem) => {
      if (accountItem.username == username) check = true;
    });
    return check;
  };
  const addNewAccount = () => {
    AccountApi.addAccount(account)
      .then((response) => {})
      .catch((error) => console.log(error));
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
        if (accountAvailableCheck(username) == true) {
          alert("Username đã tồn tại! Vui lòng nhập username khác!");
        } else {
          account.username = username;
          account.password = password;
          account.name = name;
          account.email = email;
          addNewAccount();
          alert("Signup successfully!");
          window.location.href = "http://localhost:3000/";
        }
      }
    }
  };
  useEffect(() => {
    loadAllAccounts();
  }, []);
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
          <div className="signup_link">
            Already a member? <a href="/">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
