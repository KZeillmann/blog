import { createEffect, createSignal } from "solid-js";
import DemoWrapper from "./DemoWrapper";
const WebMidi = () => {
  const [pitch, setPitch] = createSignal(60);
  const [midiOutput, setMidiOutput] = createSignal<any>(undefined);
  // Navigator only exists on client
  createEffect(() => {
    getMidiAccess();
  });
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
    if (midiOutput()) {
      midiOutput().send([0x90, pitch(), 0x7f]);
    }
  };
  const onNoteUp = () => {
    if (midiOutput()) {
      midiOutput().send([0x80, pitch(), 0x7f]);
    }
  };
  const onChangePitch = (event) => {
    setPitch(event.target.value);
  };
  return (
    <DemoWrapper id="web-midi" title="Web MIDI" open={true}>
      <p>
        Web MIDI is not widely supported yet, but if you have a digital keyboard
        or another MIDI device you can connect to your computer, you can test
        outputing to it here.
      </p>
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
