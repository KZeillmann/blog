import Board from "./Board";
import BoardSelector from "./BoardSelector";
import SpiritSelector from "./SpiritSelector";

const SpiritIsland = () => {
  return (
    <main>
      <h1>Spirit Island Demo</h1>
      <p>
        Spirit Island is a game created by Eric Reuss and published by Greater
        Than Games. It's an excellent game, and if you like this, you should
        check it out.
      </p>
      <BoardSelector />
      <SpiritSelector />
      <Board />
    </main>
  );
};

export default SpiritIsland;
