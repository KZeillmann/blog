import Keyboard from "./Keyboard";
import VolumeControl from "./VolumeControl";

const Synth = () => {
  return (
    <div class="container">
      <Keyboard />
      <div class="settingsBar">
        <VolumeControl gainNode />
        <div class="right">
          <span>Current waveform: </span>
          <select name="waveform">
            <option value="sine" selected>
              Sine
            </option>
            <option value="square">Square</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Synth;
