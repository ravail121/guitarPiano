import React, { useState } from "react";
import SoundfontProvider from "./soundfontprovider";
import { createRoot } from 'react-dom/client'
import Guitar, { getRenderFingerSpn } from "react-guitar";
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";
import "./index.css";
import _ from "lodash";
// import "react-piano/dist/styles.css";
import "./react-piano-master/src/styles.css";
import PianoWithRecording from "./PianoWithRecording";



function SampleGuitarWithSound() {
    const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0])
  const { play } = useSound({ fretting: strings, tuning: standard });
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";
const [isPlaying, setIsPlaying] = useState(false);
const [recording, setRecording] = useState({
  events: [],
  currentEvents: [],
});


const [showMusicalTyping] = useState(true);
const [accidentalType] = useState(0);

  return (

<React.Fragment>
<div className="mt-4">
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <PianoWithRecording
                recording={recording}
                isPlaying={isPlaying}
                setRecording={setRecording}
                noteRange={{ first: 53, last: 79 }}
                playNote={playNote}
                noteToPlay={60}
                stopNote={stopNote}
                disabled={isLoading}
                guitarNotes={setStrings}
                accidentalType={accidentalType}
                showMusicalTyping={showMusicalTyping}
              />
            )}
          />

          </div>

          <div className="mt-4" style={{ fontSize: '.5em' }}>
 <Guitar
      strings={strings}
      onChange={setStrings}
      frets={{
       from: 0,
       amount:  17,
         }}
         renderFinger={getRenderFingerSpn(standard)}
      playOnHover
      onPlay={play}
    />

</div>
      
</React.Fragment>
   
  );
}


createRoot(document.getElementById("root")).render(<SampleGuitarWithSound />);


 

