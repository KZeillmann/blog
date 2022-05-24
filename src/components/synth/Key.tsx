import useKey from './hooks/useKey';
import { Note } from './Keyboard';

type KeyProps = {
    note: Note;
    audioContext: AudioContext;
    gainNode: GainNode;
}

const Key = (props: KeyProps) => {
    const {
        note,
        audioContext,
        gainNode
    } = props;

    const {
        notePressed,
        noteReleased
    } = useKey(audioContext, gainNode, note.frequency);

    return (
        <div>
            <div className={`key ${note.keyColor}`} data-octave={note.octave} data-note={note.noteName} data-frequency={note.frequency}
                onMouseDown={notePressed} onMouseUp={noteReleased} onMouseOver={notePressed} onMouseLeave={noteReleased} />
            <div>{note.noteName}<sub>{note.octave}</sub></div>
        </div>
    );
}

export default Key;