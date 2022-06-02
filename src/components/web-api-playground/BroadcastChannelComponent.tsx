import { createSignal } from "solid-js";
import DemoWrapper from "./DemoWrapper";
const BroadcastChannelComponent = () => {
  const channel = new BroadcastChannel("kevin");
  channel.onmessage = (event) => {
    setSentMessages([...sentMessages(), event.data]);
  };
  const [message, setMessage] = createSignal("");

  const [sentMessages, setSentMessages] = createSignal<string[]>([]);

  const onMessageInputChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSentMessages([...sentMessages(), message()]);
    channel.postMessage(message());
  };
  return (
    <DemoWrapper id="broadcast-channel" title="Broadcast Channel">
      <p>
        Broadcast channels allow you to post and receive messages across many
        different browsing contexts - if you have the same domain open in
        different windows, tabs, frames, or iframes, you should be able to
        send/receive messages.
      </p>
      <p>
        Try it now - duplicate this tab and send a message to the other browser
        context!
      </p>
      <div className="chat-area">
        {sentMessages().map((sentMessage) => {
          return <p>{sentMessage}</p>;
        })}
      </div>
      <form onSubmit={onSubmit} autocomplete="off" class="flex gap-2">
        <input
          type="text"
          name="message"
          value={message()}
          onInput={onMessageInputChange}
        />
        <input type="Submit" value="Submit" />
      </form>
    </DemoWrapper>
  );
};

export default BroadcastChannelComponent;
