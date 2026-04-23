import "./App.css";
import { useState } from "react";
import Section from "./components/Section";
import TicTacToe from "./components/TicTacToe";

export default function App() {
  return (
    <>
      <Section />
      <TicTacToe />
    </>
  );
}
