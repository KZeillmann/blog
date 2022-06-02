import { createSignal } from "solid-js";

const useKey = (
  audioContext: AudioContext,
  gainNode: GainNode,
  frequency: number
) => {
  const [pressed, setPressed] = createSignal(false);
  const [oscillator, setOscillator] = createSignal<OscillatorNode | null>(null);

  const notePressed = (event) => {
    if (event.buttons & 1) {
      if (!pressed()) {
        setOscillator(playTone(frequency));
        setPressed(true);
      }
    }
  };

  const noteReleased = (event) => {
    if (pressed()) {
      oscillator().stop();
      setPressed(false);
    }
  };

  const playTone = (frequency: number) => {
    let osc = audioContext.createOscillator();
    osc.connect(gainNode);

    // TODO: Let this be changed
    let type: OscillatorType = "sine"; //wavePicker.options[wavePicker.selectedIndex].value;

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
