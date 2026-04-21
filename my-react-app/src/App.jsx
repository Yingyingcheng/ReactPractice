import "./App.css";
import { useState, useEffect } from "react";

const secretWord = "spend";

export default function App() {
  const [matrix, setMatrix] = useState(
    Array(5)
      .fill("")
      .map(() => Array(5).fill("")),
  );
  const [currentGuess, setCurrentGuess] = useState("");
  const [round, setRound] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isAlpha =
        e.key.length === 1 && e.key.toLowerCase() !== e.key.toUpperCase();

      if (currentGuess.length < 5 && isAlpha) {
        setMatrix((prev) => {
          const updatedMatrix = prev;
          updatedMatrix[round][currentGuess.length] = e.key;
          return updatedMatrix;

          // 可以這樣寫嗎？為什麼要return ???
          // prev[round][currentGuess.length] = e.key;
          // return prev;
        });
        setCurrentGuess((prev) => prev + e.key);
        // setCurrentGuess(currentGuess + e.key);
      } else if (currentGuess.length === 5 && e.key == "Enter" && round < 5) {
        setRound((prev) => prev + 1);
        // setRound(round + 1);
        setCurrentGuess("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentGuess]);

  useEffect(() => {
    if (round >= 5 || currentGuess === secretWord) {
      setGameEnded(true);
    }
  }, [round, currentGuess]);

  return gameEnded ? (
    <>
      {currentGuess === secretWord && "You've won!"}
      {round >= 5 && "You've lost!"}
    </>
  ) : (
    <div>
      {matrix.map((row, rowIndex) => (
        <div className="display">
          {row.map((col, colIndex) => (
            <div
              className="grid"
              style={{
                color:
                  col === secretWord[colIndex] && rowIndex < round
                    ? "green"
                    : secretWord.includes(col) && rowIndex < round
                      ? "yellow"
                      : !secretWord.includes(col) && rowIndex < round
                        ? "red"
                        : "black",
              }}
            >
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
