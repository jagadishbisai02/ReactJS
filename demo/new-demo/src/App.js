import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginRoute";
import Protected from "./components/ProtectedRoute"
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
          <Protected exact path="/" component={Home} />
        </Switch>
      </CartContext.Provider>
    );
  }
}
export default App;
