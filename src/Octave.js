import React, { Component } from "react";
import "./Style.css";
import Key from "./Key";

class Octave extends Component {
  keys = [
    { color: "white", note: "C" },
    { color: "black", note: "CSharp" },
    { color: "white", note: "D" },
    { color: "black", note: "DSharp" },
    { color: "white", note: "E" },
    { color: "white", note: "F" },
    { color: "black", note: "FSharp" },
    { color: "white", note: "G" },
    { color: "black", note: "GSharp" },
    { color: "white", note: "A" },
    { color: "black", note: "ASharp" },
    { color: "white", note: "B" },
  ];

  render() {
    return (
      <div>
        {this.keys.map((key) => (
          <Key
            key={key.note}
            color={key.color}
            note={key.note + this.props.octaveNumber}
            onPlay={this.props.playNote}
          />
        ))}
      </div>
    );
  }
}

export default Octave;
