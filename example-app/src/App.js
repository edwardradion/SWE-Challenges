import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotegenerator from "./quotegenerator.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quotegenerator
          quotes={[
            "Get busy living or get busy dying.",
            "Those who dare to fail miserably can achieve greatly.",
            "It is hard to fail, but it is worse never to have tried to succeed.",
            "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
            "Remember that the happiest people are not those getting more, but those giving more."
          ]}
        />
      </div>
    );
  }
}

export default App;
