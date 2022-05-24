import Keyboard from "./Keyboard";
import VolumeControl from "./VolumeControl";

const Synth = () => {
  const audioContext = new window.AudioContext();
  const gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);

  // const setup = () => {

  //   // Create the keys; skip any that are sharp or flat; for
  //   // our purposes we don't need them. Each octave is inserted
  //   // into a <div> of class "octave".

  //   noteFreq.forEach(function (keys, idx) {
  //     let keyList = Object.entries(keys);
  //     // let octaveElem = document.createElement("div");
  //     octaveElem.className = "octave";

  //     keyList.forEach(function (key) {
  //       if (key[0].length == 1) {
  //         octaveElem.appendChild(createKey(key[0], idx, key[1]));
  //       }
  //     });

  //     keyboard.appendChild(octaveElem);
  //   });

  //   document
  //     .querySelector("div[data-note='C'][data-octave='1']")
  //     .scrollIntoView(false);

  //   sineTerms = new Float32Array([0, 0, 1, 0, 1]);
  //   cosineTerms = new Float32Array(sineTerms.length);
  //   customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);

  //   for (let i = 0; i < 9; i++) {
  //     oscList[i] = {};
  //   }
  // };

  return (
        <div class="container">
          <Keyboard audioContext={audioContext} gainNode={gainNode} />
          <div class="settingsBar">
            <VolumeControl gainNode />

            <div class="right">
              <span>Current waveform: </span>
              <select name="waveform">
                <option value="sine" selected>Sine</option>
                <option value="square">
                  Square
                </option>
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
