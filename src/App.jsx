import React from "react";
import { Header } from "./components/Header/Header";
import { Launch } from "./components/Launch/Launch";
import { Launches } from "./components/Launches/Launches";
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Launches />
    </div>
  );
}

export default App;
