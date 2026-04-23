import "../App.css";
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  const handleCliclk = () => {
    setValue("X");
  };

  return (
    <>
      <button className="square" onClick={handleCliclk}>
        {value}
      </button>
    </>
  );
}

export default function TicTacToe() {
  return (
    <>
      <h2 style={{ backgroundColor: "pink", padding: "5px" }}>SECTION 3</h2>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
