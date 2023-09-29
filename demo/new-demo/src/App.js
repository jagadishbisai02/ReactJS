import { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LoginPage from "./components/LoginRoute";
import CartContext from "./context/CartContext";
import "./App.css";
import Home from "./components/HomeRoute";

class App extends Component {
  state = { isDarkTheme: false };

  onChangeTheme = () => {
    this.setState((prev) => ({ isDarkTheme: !prev.isDarkTheme }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <CartContext.Provider value={{
        isDarkTheme,
        onChangeTheme: this.onChangeTheme
      }}>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </CartContext.Provider>
    );
  }
}
export default App;
