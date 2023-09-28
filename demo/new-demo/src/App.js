import { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from "./components/LoginRoute"
import CartContext from "./context/CartContext"
import "./App.css";
import Home from "./components/HomeRoute"

class App extends Component {
  state = { isDarkTheme: false };

  onChangeTheme = () => {
    this.setState((prev) => ({ isDarkTheme: !prev.isDarkTheme }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={Home}/>
      </Switch>
    )
  }
}
export default App;
