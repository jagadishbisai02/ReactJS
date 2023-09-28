import { Component } from "react"
import './index.css'


class LoginPage extends Component {
  state = { username: "", password: "" }

  

  render(){
    const {username, password} = this.state
    return(
        <div className="login-container">
            <form>
                <label forhtml="username">Username:</label>
                <input type="text" id="username" />
            </form>
        </div>
    )
  }
}

export default LoginPage;
