import React, { Component } from "react";
import "./App.css";
import Aux from "./hoc/Auxiliary/Auxiliary";
import Layout from "./containers/Layout/Layout";
import FormTask from "./containers/FormTask/FormTask";

class App extends Component {
  render() {
    return (
      <Aux>
        <header className={"header"}>Frank Hebert</header>        
        <FormTask />
        <main className={"main"}>
          <Layout />
        </main>
      </Aux>
    );
  }
}

export default App;
