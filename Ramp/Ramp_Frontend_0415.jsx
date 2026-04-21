import "./styles.css";
import { useState, useEffect } from "react";

const ANSWER = "spend";

export default function App() {
  const [guesses, setGuesses] = useState(
    Array(5)
      .fill("")
      .map(() => Array(5).fill("")),
  );
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isAlpha =
        e.key.length === 1 && e.key.toLowerCase() !== e.key.toUpperCase();
      if (currentGuess.length < 5 && isAlpha) {
        setGuesses((prev) => {
          const updated = prev;
          updated[turn][currentGuess.length] = e.key;
          return updated;
        });
        setCurrentGuess(currentGuess + e.key);
      } else if (currentGuess.length == 5 && e.key == "Enter" && turn < 5) {
        setTurn((prev) => prev + 1);
        setCurrentGuess("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentGuess]);

  useEffect(() => {
    if (currentGuess === ANSWER || turn >= 5) {
      setGameEnded(true);
    }
  }, [currentGuess, turn]);

  return gameEnded ? (
    <>
      {currentGuess === ANSWER && "You've won!"}
      {turn >= 5 && "You've lost!"}
    </>
  ) : (
    <div>
      {guesses.map((row) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {row.map((col, colIndex) => (
            <div
              className="grid"
              style={{
                color:
                  col == ANSWER[colIndex]
                    ? "green"
                    : ANSWER.includes(col)
                      ? "yellow"
                      : "red",
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
