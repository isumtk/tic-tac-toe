import { useEffect, useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../../helper";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[step]);

  const handleClick = (idx) => {
    const timeInHistory = history.slice(0, step + 1);
    const squares = [...timeInHistory[step]];

    if (winner || squares[idx]) return;

    squares[idx] = xIsNext ? "X" : "O";

    setHistory([...timeInHistory, squares]);
    setStep(timeInHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStep(step);
    setXIsNext(step % 2 === 0);
  };

  useEffect(() => {
    console.log({ history });
  }, [history]);

  const RenderMoveMessage = ({ move }) => {
    return move ? (
      <p className="move_text">
        Go to move # <span>{move}</span>
      </p>
    ) : (
      <p className="move_text">Go to start</p>
    );
  };

  const renderMoves = () => {
    return (
      <ul className="move_list">
        {history.map((_step, move) => {
          return (
            <li key={move} className="move">
              <button className="move_body" onClick={() => jumpTo(move)}>
                <RenderMoveMessage move={move} />
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="game_container">
      <h1 className="game_title">Tic Tac Toe</h1>
      <Board squares={history[step]} onClick={handleClick} />
      <div className="game_state">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <p className="game_state_text">
            {winner ? "Winner is :" : "Current Player :"}
          </p>{" "}
          <span
            className={
              winner
                ? winner === "X"
                  ? "game_square_x"
                  : "game_square_o"
                : xIsNext
                ? "game_square_x"
                : "game_square_o"
            }
          />
        </div>
        {winner && (
          <p
            className="game_restart"
            onClick={() => window.location.reload(false)}
          >
            Restart
          </p>
        )}
      </div>
      {renderMoves()}
    </div>
  );
};

export default Game;
