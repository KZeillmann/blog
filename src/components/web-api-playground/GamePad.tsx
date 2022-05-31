import { useEffect, useRef, useState } from "preact/hooks";
import "preact/debug";
import DemoWrapper from "./DemoWrapper";

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

  // Corresponds to my 360 controller
  const buttonNames = [
    "A",
    "B",
    "X",
    "Y",
    "LB",
    "RB",
    "LT",
    "LB",
    "Back",
    "Start",
    "L3",
    "R3",
    "D Up",
    "D Down",
    "D Left",
    "D Right",
  ];

  const [connected, setConnected] = useState(false);

  const [gamePad, setGamePad] = useState<Gamepad | undefined>(undefined);

  const canvasRef = useRef();

  let lastAnimationFrame = undefined;

  useEffect(() => {
    if (connected) {
      const gp = navigator.getGamepads()[0];
      console.log(gp.buttons);
      setGamePad(gp);
      setConnectionMessage(gamePadConnectedMessage);
      // setupCanvas();
      requestAnimationFrame(loop);
    } else {
      setConnectionMessage(gamePadDisconnectedMessage);
      setGamePad(undefined);
    }
  }, [connected]);

  const loop = () => {
    const gp = navigator.getGamepads()[0];
    setGamePad(gp);
    animateCanvas(gp);
    requestAnimationFrame(loop);
  };

  const animateCanvas = (gp: Gamepad) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const leftXCenter = canvas.width / 3;
    const YCenter = canvas.height / 2;
    const radius = 40;
    ctx.strokeStyle = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--theme-text");
    ctx.beginPath();
    ctx.arc(leftXCenter, YCenter, radius, 2 * Math.PI, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(leftXCenter * 2, YCenter, radius, 2 * Math.PI, false);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = "red";

    const [leftX, leftY, rightX, rightY] = gp.axes;
    ctx.fillRect(leftX * radius + leftXCenter, leftY * radius + YCenter, 5, 5);
    ctx.fillRect(
      rightX * radius + leftXCenter * 2,
      rightY * radius + YCenter,
      5,
      5
    );
  };

  return (
    <DemoWrapper id="game-pad" title="Game Pad">
      <p>Gamepad Status: {connectionMessage}</p>
      {connected && gamePad && (
        <div>
          <h4>Gamepad Info</h4>
          <ul>
            <li>id: {gamePad.id}</li>
            <li>index: {gamePad.index}</li>
          </ul>
          <canvas width={400} height={200} ref={canvasRef}>
            Text here
          </canvas>
        </div>
      )}
    </DemoWrapper>
  );
};

export default GamePad;
