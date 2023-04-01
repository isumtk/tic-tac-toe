const squareDesign = {
  fontSize: "30px",
  fontWeight: "700",
  minWidth: "117px",
  maxWidth: "200px",
  aspectRatio: "1",
  cursor: "pointer",
  outline: "none",
  border: "none",
  borderRadius: "6px",
};

const Square = ({ onClick, value }) => {
  return (
    <button className="game_square" onClick={onClick}>
      <span
        className={
          value
            ? value === "X"
              ? "game_square_x"
              : "game_square_o"
            : "game_square_info"
        }
      />
    </button>
  );
};

export default Square;
