import { useEffect, useState } from "preact/hooks";
import DemoWrapper from "./DemoWrapper";

const WebMidi = () => {
  const [pitch, setPitch] = useState(60);
  const [midiOutput, setMidiOutput] = useState<any>(undefined);
  const [midiInput, setMidiInput] = useState<any>(undefined);
  // Navigator only exists on client
  useEffect(() => {
    getMidiAccess();
  }, []);
  const getMidiAccess = async () => {
    // TypeScript is NOT happy with requestMIDIAccess, and @types/webmidi doesn't help
    navigator.requestMIDIAccess().then(
      (midiAccess) => {
        midiAccess.outputs.forEach((output) => console.log(output));
        setMidiOutput(midiAccess.outputs.get("output-1"));
      },
      (error) => console.log(error)
    );
  };
  const onNoteDown = () => {
    if (midiOutput) {
      midiOutput.send([0x90, pitch, 0x7f]);
    }
  };
  const onNoteUp = () => {
    if (midiOutput) {
      midiOutput.send([0x80, pitch, 0x7f]);
    }
  };
  const onChangePitch = (event) => {
    setPitch(event.target.value);
  };
  return (
    <DemoWrapper id="web-midi" title="Web MIDI" open={true}>
      <p>Web MIDI!</p>
      <button
        onMouseDown={onNoteDown}
        onMouseUp={onNoteUp}
        onMouseOut={onNoteUp}
      >
        Try me
      </button>
      <label htmlFor="pitch" class="flex gap-4">
        <span>Pitch</span>
        <input
          type="range"
          name="pitch"
          id="pitch"
          min={1}
          max={127}
          value={pitch}
          onChange={onChangePitch}
          class=""
        />
      </label>
    </DemoWrapper>
  );
};

export default WebMidi;
