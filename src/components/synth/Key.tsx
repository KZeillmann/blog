import useKey from "./hooks/useKey";
import { Note } from "./Keyboard";
type KeyProps = {
  note: Note;
  audioContext: AudioContext;
  gainNode: GainNode;
};

const Key = (props: KeyProps) => {
  const { note, audioContext, gainNode } = props;

  const { notePressed, noteReleased } = useKey(
    audioContext,
    gainNode,
    note.frequency
  );
  const offsetNotes = ["D", "E", "G", "A", "B"];
  const offset = offsetNotes.includes(note.noteName) ? "offset" : "";

  return (
    <div
      className={`key ${note.keyColor} ${offset}`.trim()}
      data-octave={note.octave}
      data-note={note.noteName}
      data-frequency={note.frequency}
      onMouseDown={notePressed}
      onMouseUp={noteReleased}
      onTouchStart={notePressed}
      onTouchEnd={noteReleased}
      onMouseOver={notePressed}
      onMouseLeave={noteReleased}
    />
  );
};

export default Key;
