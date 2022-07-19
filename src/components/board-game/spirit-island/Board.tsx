import useBoard from "./hooks/useBoard";

interface BoardProps {
  // browserWidth: number;
}

const Board = (props: BoardProps) => {
  const { graphRef } = useBoard();

  return (
    <div>
      <h3>Board: Work in Progress</h3>
      <canvas ref={graphRef} width={1000} height={600}>
        Need a browser that can use the HTML <code>canvas</code> element
      </canvas>
    </div>
  );
};

export default Board;
