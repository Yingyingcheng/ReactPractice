import { use, useState } from "react";

export default function ManageState() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing"); // typing, success or error
  const correctAnswer = "SAN FRANCISCO";

  if (status === "success") {
    return <h1>That's right!</h1>;
  }
  const handleSubmisson = (e) => {
    e.preventDefault();
    if (!answer) {
      return;
    } //why not need this
    if (answer.toUpperCase().trim() === correctAnswer) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };
  return (
    <>
      <h1>City quiz</h1>
      <p>In which city is there a Oracle Park?</p>
      <form onSubmit={handleSubmisson}>
        <textarea
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value); // whyyyy;
            setStatus("typing");
          }}
          disabled={status === "success"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "success"}>
          Submit
        </button>
        {/* JSX Logic: Wrapped the "Correct/Wrong" messages in curly braces {}. 
        In JSX, logic like ternary operators or && must be inside braces to be evaluated. */}
        {status === "error" && (
          <p style={{ color: "red" }}>
            Good guess but a wrong answer. Try again!
          </p>
        )}
      </form>
    </>
  );
}
