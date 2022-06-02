import BroadcastChannelComponent from "./BroadcastChannelComponent";
import Canvas from "./Canvas";
import Clipboard from "./Clipboard";
import ContactPicker from "./ContactPicker";
import GamePad from "./GamePad";
import GeolocationComponent from "./GeolocationComponent";
import Sensor from "./Sensor";
import MediaStreamComponent from "./MediaStream";
import WebMidi from "./WebMidi";
const WebApiPlaygroundSolid = () => {
  return (
    <section class="flex flex-col items-start gap-2">
      <h1 class="text-2xl">Web APIs</h1>
      <BroadcastChannelComponent />
      <Canvas />
      <Clipboard />
      <ContactPicker />
      <GamePad />
      <GeolocationComponent />
      <MediaStreamComponent />
      <Sensor />
      <WebMidi />
    </section>
  );
};
export default WebApiPlaygroundSolid;
