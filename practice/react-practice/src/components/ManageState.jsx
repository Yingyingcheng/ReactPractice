import { useState } from "react";

export default function ManageState() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing"); // status: typing, success or error
  const correctAnswer = "SAN FRANCISCO";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmisson = (e) => {
    e.preventDefault();
    if (!answer) {
      return;
    }
    if (answer.toUpperCase().trim() === correctAnswer) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <h2 style={{ backgroundColor: "pink", padding: "5px" }}>
        SECTION 4: useState{" "}
      </h2>
      <h3>1. City quiz</h3>
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

        {status === "success" && (
          <p style={{ color: "green" }}>That's right!</p>
        )}

        {status === "error" && (
          <p style={{ color: "red" }}>
            Good guess but a wrong answer. Try again!
          </p>
        )}
      </form>
      <h3>2. Let's check you in!</h3>

      <label>First Name : </label>
      <input
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <label>Last Name : </label>
      <input
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <p>
        Your ticket will be issued to: {firstName} {lastName}
      </p>
    </>
  );
}
