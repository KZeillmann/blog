import { useEffect, useState } from "preact/hooks";
import "preact/debug";

const GamePad = () => {
  const myWindow = window;
  myWindow.addEventListener("gamepadconnected", () => {
    setConnected(true);
  });
  myWindow.addEventListener("gamepaddisconnected", () => {
    setConnected(false);
  });

  const gamePadConnectedMessage = "✔️ Gamepad connected! ";
  const gamePadDisconnectedMessage =
    "❌ No gamepad connected. If you have one connected, interact with it - press a button ore move a joystick.";
  const [connectionMessage, setConnectionMessage] = useState(
    gamePadDisconnectedMessage
  );

  const [connected, setConnected] = useState(false);

  const [gamePad, setGamePad] = useState<Gamepad | undefined>(undefined);

  useEffect(() => {
    if (connected) {
      const gp = navigator.getGamepads()[0];
      setGamePad(gp);
      setConnectionMessage(gamePadConnectedMessage);
      loop();
    } else {
      setConnectionMessage(gamePadDisconnectedMessage);
      setGamePad(undefined);
    }
  }, [connected]);

  const loop = () => {
    const gp = navigator.getGamepads()[0];
    setGamePad(gp);
    requestAnimationFrame(loop);
  };

  return (
    <details open>
      <summary>Game Pad API</summary>
      <p>Gamepad Status: {connectionMessage}</p>
      {connected && gamePad && (
        <div>
          <h4>Gamepad Info</h4>
          <ul>
            <li>id: {gamePad.id}</li>
            <li>index: {gamePad.index}</li>
            <li>axes: {gamePad.axes.join(", ")}</li>
          </ul>
        </div>
      )}
    </details>
  );
};

export default GamePad;
