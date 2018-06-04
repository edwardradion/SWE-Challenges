import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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

  render() {
    return (
      <form>
        <br />
        <TextField
          name="yourname"
          id="yourname"
          placeholder="Name"
          value={this.state.yourname}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <TextField
          name="company"
          id="company"
          placeholder="Company"
          value={this.state.company}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <TextField
          name="details"
          id="details"
          placeholder="Contract Details"
          value={this.state.details}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={e => this.onSubmit(e)}
        >
          Submit
        </Button>
        <br />
        <br />
      </form>
    );
  }
}
