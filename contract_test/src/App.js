import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.js";
//import firebase from "https://www.gstatic.com/firebasejs/5.0.4/firebase.js";

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDnUgzcxDZqvXTJ1b_OE49ybacRw7F6lJM",
//   authDomain: "contracttest-70b40.firebaseapp.com",
//   databaseURL: "https://contracttest-70b40.firebaseio.com",
//   projectId: "contracttest-70b40",
//   storageBucket: "contracttest-70b40.appspot.com",
//   messagingSenderId: "737784620167"
// };
// firebase.initializeApp(config);

class App extends Component {
  state = {
    fields: {}
  };

  // messagesRef = firebase.database().ref('messages');

  // document.getElementById('contactForm').addEventListener('submit', submitForm);

  onSubmit = fields => {
    this.setState({ fields });
    //fields.push(fields);
  };

  render() {
    return (
      <div className="App">
        Enter your contract information below
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <div>{JSON.stringify(this.state.fields, null, 2)}</div>
      </div>
    );
  }
}

export default App;

//I'm not sure how to upload forms without using getElementById
