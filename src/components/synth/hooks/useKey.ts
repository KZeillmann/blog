import { useState } from "preact/hooks";

const useKey = (
  audioContext: AudioContext,
  gainNode: GainNode,
  frequency: number
) => {
  const [pressed, setPressed] = useState(false);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
  const notePressed = (event) => {
    if (event.buttons & 1) {
      if (!pressed) {
        setOscillator(playTone(frequency));
        setPressed(true);
      }
    }
  };

  const noteReleased = (event) => {
    setTimeout(() => {
      if (pressed) {
        oscillator.stop();
        setPressed(false);
      }
    }, 200);
  };

  const playTone = (frequency) => {
    audioContext.resume();
    let osc = audioContext.createOscillator();
    osc.connect(gainNode);

    // TODO: Let
    let type: OscillatorType = "triangle"; //wavePicker.options[wavePicker.selectedIndex].value;

    // if (type == "custom") {
    //   osc.setPeriodicWave(customWaveform);
    // } else {
    osc.type = type;
    // }

    osc.frequency.value = frequency;
    osc.start();

    return osc;
  };

  return {
    notePressed,
    noteReleased,
  };
};

export default useKey;
