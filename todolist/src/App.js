import React, { Component } from "react";
import "./App.css";
import Aux from "./hoc/Auxiliary/Auxiliary";
import Layout from "./containers/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Aux>
        <header className={"header"}>Tarefas Domésticas</header>
        <main className={"main"}>
          <Layout />
        </main>
      </Aux>
    );
  }
}

export default App;
