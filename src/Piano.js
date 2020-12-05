import React from "react";
import "./Style.css";
import Octave from "./Octave";

const Piano = () => {
  const playHandler = (event) => {
    const note = event.currentTarget.value;
    const audio = new Audio(`sounds/piano_${note}.mp3`);
    audio.play();
  };

  return (
    <div>
      <div className="header">Keyspace</div>
      <div className="piano">
        <Octave octaveNumber="1" playNote={playHandler} />
        <Octave octaveNumber="2" playNote={playHandler} />
      </div>
    </div>
  );
};

export default Piano;
