import { Component } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "./index.css";

class LoginPage extends Component {
  state = { username: "", password: "" };

  getPassword = (event) => this.setState({ username: event.target.value });

  getUsername = (event) => this.setState({ password: event.target.value });

  onSumbitLoginForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const loginUrl = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(loginUrl, options);
    const data = await response.json();
    console.log(data);
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-container">
        <div className="login-form">
          <h1 className="heading">Login Form</h1>
          <form className="form-container" onSubmit={this.onSumbitLoginForm}>
            <label htmlFor="username" className="labels">
              Username:
            </label>
            <div id="username" className="input-icons">
              <input
                type="text"
                className="inputs"
                placeholder="username"
                onChnage={this.getUsername}
              />
              <AiOutlineUser size={20} color="#ffffff" className="icons" />
            </div>
            <label htmlFor="password" className="labels">
              Password:
            </label>
            <div id="password" className="input-icons">
              <input
                type="password"
                className="inputs"
                onChnage={this.getPassword}
                placeholder="password"
              />
              <RiLockPasswordLine size={20} color="#ffffff" className="icons" />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
