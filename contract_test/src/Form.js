import React from "react";

export default class Form extends React.Component {
  state = {
    yourname: "",
    company: "",
    details: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // name = getInputVal("name");
    // company = getInputVal("company");
    // details = getInputVal("details");

    // saveMessage(name, company, details);

    //VIDEO ENTRY
    this.props.onSubmit(this.state);
    this.setState({
      yourname: "",
      company: "",
      details: ""
    });
  };

  //get form value
  getInputVal(id) {
    return document.getElementById(id).value;
  }

  //save to Firebase
  // saveMessage(name, company, details) {
  //   newMessageRef = messageRef.push();
  //   newMessageRef.set({
  //     name: name,
  //     company: company,
  //     details: details
  //   });
  // }

  render() {
    return (
      <form>
        <input
          name="yourname"
          id="yourname"
          placeholder="Name"
          value={this.state.yourname}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="company"
          id="company"
          placeholder="Company"
          value={this.state.company}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="details"
          id="details"
          placeholder="Contract Details"
          value={this.state.details}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
