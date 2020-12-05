import React, { Component } from "react";
import "./Style.css";

class Key extends Component {
  render() {
    if (this.props.color === "white") {
      return (
        <button
          className="whiteKey"
          value={this.props.note}
          onClick={this.props.onPlay}
        >
          {this.props.note}
        </button>
      );
    } else {
      return (
        <button
          className="blackKey"
          value={this.props.note}
          onClick={this.props.onPlay}
        />
      );
    }
  }
}

export default Key;
