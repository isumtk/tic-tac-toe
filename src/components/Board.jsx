import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="game_board">
      {squares.map((square, idx) => (
        <Square key={idx} value={square} onClick={() => onClick(idx)} />
      ))}
    </div>
  );
};

export default Board;
