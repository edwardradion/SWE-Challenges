import React, { Component } from "react";

class Quotegenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0
    };
  }

  handleClick = () => {
    if (this.state.i + 2 > this.props.quotes.length) {
      this.setState({
        i: 0
      });
    } else {
      this.setState({
        i: this.state.i + 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1> {this.props.quotes[this.state.i]} </h1>
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

export default Quotegenerator;
