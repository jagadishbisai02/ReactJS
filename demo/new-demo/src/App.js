import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginRoute";
import Home from "./components/HomeRoute";
import ProtectedRoute from "./components/ProtectedRoute/protected"
import CartContext from "./context/CartContext";
import "./App.css";

class App extends Component {
  state = { isDarkTheme: false, activeTab: 'Home' };

  onChangeTheme = () => {
    this.setState((prev) => ({ isDarkTheme: !prev.isDarkTheme }));
  };

  activeTabItem = item =>{
    this.setState({activeTab: item})
  }

  render() {
    const { isDarkTheme, activeTab } = this.state;
    return (
      <CartContext.Provider value={{
        isDarkTheme,
        onChangeTheme: this.onChangeTheme,
        activeTab,
        activeTabItem: this.activeTabItem,
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
