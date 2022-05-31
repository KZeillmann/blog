import BroadcastChannelComponent from "./BroadcastChannelComponent";
import Canvas from "./Canvas";
import Clipboard from "./Clipboard";
import ContactPicker from "./ContactPicker";
import GamePad from "./GamePad";
import GeolocationComponent from "./GeolocationComponent";
import MediaStream from "./MediaStream";
import Sensor from "./Sensor";

const WebApiPlayground = () => {
  return (
    <section class="flex flex-col items-start gap-2">
      <h1 class="text-2xl">Web APIs</h1>
      <BroadcastChannelComponent />
      <Canvas />
      <Clipboard />
      <ContactPicker />
      <GamePad />
      <GeolocationComponent />
      <MediaStream />
      <Sensor />
    </section>
  );
};

export default WebApiPlayground;
