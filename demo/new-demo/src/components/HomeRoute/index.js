import { Component } from "react";
import Navbar from "../Navbar/navbar";
import SideBar from "../SideBar";

const apiStatusContants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class HomeRoute extends Component {
  state = {
    display: "flex",
    searchInput: "",
    searchValue: "",
    apiStatus: apiStatusContants.initial,
  };

  render() {
    return (
      <>
        <Navbar/>
        <SideBar/>
      </>
    );
  }
}

export default HomeRoute;
