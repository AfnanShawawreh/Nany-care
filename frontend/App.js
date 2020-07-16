

import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import Routes from "./components/Routes.js";


class NanyApp extends Component {
  render() {
    return <Routes />;
  }
}

AppRegistry.registerComponent("NanyApp", () => NanyApp);
export default NanyApp;