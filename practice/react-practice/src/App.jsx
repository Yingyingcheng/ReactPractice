import "./App.css";
import { useState } from "react";
import Section from "./components/Section";
import TicTacToe from "./components/TicTacToe";
import Game from "./components/Game";
import ManageState from "./components/ManageState";

export default function App() {
  return (
    <>
      <Section />
      <TicTacToe />
      <Game />
      <ManageState />
    </>
  );
}
