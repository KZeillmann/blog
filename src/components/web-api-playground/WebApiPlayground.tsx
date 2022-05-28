import BroadcastChannelComponent from "./BroadcastChannelComponent";
import Canvas from "./Canvas";
import Clipboard from "./Clipboard";

const WebApiPlayground = () => {
  return (
    <section class="container">
      <h1>Web APIs</h1>
      <BroadcastChannelComponent />
      <Canvas />
      <Clipboard />
    </section>
  );
};

export default WebApiPlayground;
