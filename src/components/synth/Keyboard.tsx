import Key from "./Key";
export type Note = {
  octave: number;
  frequency: number;
  noteName: string;
  keyColor: "white" | "black";
};

const NOTE_DIFFERENTIATOR = Math.pow(2, 1 / 12);

const createNoteTable = (tuningFrequency = 440): Note[] => {
  let noteFreq: Note[] = [];

  // https://stackoverflow.com/a/36953272/2464234
  // generates 0 -> 7
  Array.from(Array(8).keys()).forEach((octaveIndex) => {
    const octave = createOctave(
      (tuningFrequency / 16) * Math.pow(2, octaveIndex),
      octaveIndex
    );
    if (octaveIndex === 0) {
      // Keyboard begins with A natural
      noteFreq.push(...octave.slice(9));
    } else if (octaveIndex === 7) {
      noteFreq.push(...octave.slice(0, 1));
    } else {
      noteFreq.push(...octave);
    }
  });

  return noteFreq;
};

// TODO: Allow different tuning strategies. This is only applicable to equal temperament
const createOctave = (aFrequency: number, octave: number): Note[] => {
  const cNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 9),
    octave,
    noteName: "C",
    keyColor: "white",
  };
  const cSharpNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 8),
    octave,
    noteName: "C♯",
    keyColor: "black",
  };

  const dNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 7),
    octave,
    noteName: "D",
    keyColor: "white",
  };

  const eFlatNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 6),
    octave,
    noteName: "E♭",
    keyColor: "black",
  };

  const eNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 5),
    octave,
    noteName: "E",
    keyColor: "white",
  };

  const fNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 4),
    octave,
    noteName: "F",
    keyColor: "white",
  };

  const fSharpNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 3),
    octave,
    noteName: "F♯",
    keyColor: "black",
  };

  const gNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 2),
    octave,
    noteName: "G",
    keyColor: "white",
  };

  const gSharpNote: Note = {
    frequency: aFrequency / Math.pow(NOTE_DIFFERENTIATOR, 1),
    octave,
    noteName: "G♯",
    keyColor: "black",
  };

  const aNote: Note = {
    frequency: aFrequency,
    keyColor: "white",
    noteName: "A",
    octave,
  };
  const bFlatNote: Note = {
    frequency: aFrequency * Math.pow(NOTE_DIFFERENTIATOR, 1),
    octave,
    noteName: "B♭",
    keyColor: "black",
  };
  const bNote: Note = {
    frequency: aFrequency * Math.pow(NOTE_DIFFERENTIATOR, 2),
    octave,
    noteName: "B",
    keyColor: "white",
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
};

const Keyboard = () => {
  // TODO: Get these in context somehow
  const audioContext = new AudioContext();
  const gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  const keyData = createNoteTable();
  return (
    <div className="keyboard">
      {keyData.map((note) => {
        return (
          <Key note={note} audioContext={audioContext} gainNode={gainNode} />
        );
      })}
    </div>
  );
};

export default Keyboard;
