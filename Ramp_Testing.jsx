import "./App.css";
import { useState, useEffect } from "react";

const secretWord = "spend";

export default function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [round, setRound] = useState(0);
  const [matrix, setMatrix] = Array(5)
    .fill(null)
    .map(() => Array(5).fill(""));

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      setCurrentGuess((prev) => prev + e.key);
      setMatrix[round][currentGuess.length] = e.key;

      if (currentGuess.length === 5 && currentGuess != secretWord) {
        setRound(round + 1);
      }

      // if (round < 5) {
      //   setRound((prev) => prev + 1)
      // }
    });
  }, []);

  return (
    <div className="display">
      {currentGuess}
      {matrix.map((row) => (
        <div>
          {" "}
          {row.map((cell) => (
            <div className="grid">{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
