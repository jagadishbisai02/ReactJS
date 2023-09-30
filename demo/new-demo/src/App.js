import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginRoute";
import Home from "./components/HomeRoute";
import ProtectedRoute from "./components/ProtectedRoute/protected"
import CartContext from "./context/CartContext";
import "./App.css";

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
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </CartContext.Provider>
    );
  }
}
export default App;
