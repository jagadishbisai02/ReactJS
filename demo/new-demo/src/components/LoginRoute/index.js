import { Component } from "react";
import {Redirect} from 'react-router-dom';
import Cookies from "js-cookie";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "./index.css";

class LoginPage extends Component {
  state = { username: "", password: "", showSubmitError: false, errorMsg: "" };

  getUsername = (event) => this.setState({ username: event.target.value });

  getPassword = (event) => this.setState({ password: event.target.value });

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;
    Cookies.set("jwt_token", jwtToken, { expires: 1, path: "/" });
    history.replace("/");
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  onSubmitLoginFrom = async (event) => {
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

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken !== undefined){
      return <Redirect to='/'/>
    }

    return (
      <div className="login-container">
        <div className="login-form">
          <h1 className="heading">Login Form</h1>
          <form className="form-container" onSubmit={this.onSubmitLoginFrom}>
            <label htmlFor="username" className="labels">
              Username:
            </label>
            <div id="username" className="input-icons">
              <input
                type="text"
                className="inputs"
                placeholder="username"
                onChange={this.getUsername}
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
                onChange={this.getPassword}
                placeholder="password"
              />
              <RiLockPasswordLine size={20} color="#ffffff" className="icons" />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {showSubmitError && <p className="error-msg">***{errorMsg}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
