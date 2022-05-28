import BroadcastChannelComponent from "./BroadcastChannelComponent";
import Canvas from "./Canvas";
import Clipboard from "./Clipboard";
import ContactPicker from "./ContactPicker";
import GamePad from "./GamePad";

const WebApiPlayground = () => {
  return (
    <section class="container">
      <h1>Web APIs</h1>
      <BroadcastChannelComponent />
      <Canvas />
      <Clipboard />
      <ContactPicker />
      <GamePad />
    </section>
  );
};

export default WebApiPlayground;
