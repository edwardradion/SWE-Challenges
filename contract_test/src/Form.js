import React from "react";

export default class contractform extends React.Component {
  state = {
    name: "",
    company: "",
    details: ""
  };

  render() {
    return (
      <form>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input
          placeholder="Company"
          value={this.state.company}
          onChange={e => this.setState({ company: e.target.value })}
        />
        <input
          placeholder="Contract Details"
          value={this.state.details}
          onChange={e => this.setState({ details: e.target.value })}
        />
      </form>
    );
  }
}
