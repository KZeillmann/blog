import { AVAILABLE_BOARDS } from "./constants/boards";

const BoardSelector = () => {
  return (
    <select name="board" id="board-select">
      {AVAILABLE_BOARDS.map((board) => (
        <option key={board.name} value={board.name}>
          Board {board.name}
        </option>
      ))}
    </select>
  );
};

export default BoardSelector;
