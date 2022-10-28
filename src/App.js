import logo from "./logo.svg";
import "./App.css";

// import "./Appy.css";
import Scene from "./Components/3dComp";
import PlayGround from "./Components/PlayGround/PlayGround";
import Staged from "./Components/Stage/Stage";
import { React, useState } from "react";
import { Page } from "./Components/Page";

function App() {
  const [moveIndex, setmoveIndex] = useState(0);

  return <Page />;
}

export default App;
