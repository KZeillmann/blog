import Key from "./Key";

export type Note = {
  octave: number;
  frequency: number;
  noteName: string;
  keyColor: "white" | "black";
}

const NOTE_DIFFERENTIATOR = Math.pow(2, 1/12);

const createNoteTable = (tuningFrequency = 440): Note[] => {
  let noteFreq: Note[] = [];

  const testOctave = createOctave(440, 1)
  noteFreq.push(...testOctave);

  return noteFreq;
}

const createOctave = (aFrequency: number, octave: number): Note[] => {
  
  const cNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 9),
    octave,
    noteName: "C",
    keyColor: "white"
  }
  const cSharpNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 8),
    octave,
    noteName: "C♯",
    keyColor: "black"
  }

  const dNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 7),
    octave,
    noteName: "D",
    keyColor: "white"
  }

  const eFlatNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 6),
    octave,
    noteName: "E♭",
    keyColor: "black"
  }

  
  const eNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 5),
    octave,
    noteName: "E",
    keyColor: "white"
  }

  const fNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 4),
    octave,
    noteName: "F",
    keyColor: "white"
  }

  const fSharpNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 3),
    octave,
    noteName: "F♯",
    keyColor: "black"
  }

  const gNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 2),
    octave,
    noteName: "G",
    keyColor: "white"
  }

  const gSharpNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 1),
    octave,
    noteName: "G♯",
    keyColor: "black"
  }

  const aNote: Note = {
    frequency: aFrequency,
    keyColor: "white",
    noteName: "A",
    octave
  };
  const bFlatNote: Note = {
    frequency: aFrequency * Math.pow(NOTE_DIFFERENTIATOR, 1),
    octave,
    noteName: "B♭",
    keyColor: "black"
  };
  const bNote: Note = {
    frequency: aFrequency * Math.pow(NOTE_DIFFERENTIATOR, 2),
    octave,
    noteName: "B",
    keyColor: "white"
  };

  return [
    cNote, 
    cSharpNote, 
    dNote, 
    eFlatNote, 
    eNote, 
    fNote, 
    fSharpNote, 
    gNote, 
    gSharpNote, 
    aNote, 
    bFlatNote, 
    bNote, 
  ];
}

type KeyboardProps = {
    audioContext: AudioContext;
    gainNode: GainNode;
}

const Keyboard = (props: KeyboardProps) => {
  
  const keyData = createNoteTable();
  const {
    audioContext,
    gainNode
  } = props;
  return (
    <div className="keyboard">
      {keyData.map((note) => {
          return (<Key note={note} audioContext={audioContext} gainNode={gainNode} />)
      })}
    </div>
  );
};

export default Keyboard;
