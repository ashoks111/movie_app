import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Typography from "./Typography";

function App() {
  const [wishes, setWishes] = useState("Hey Ammu ");
  // const [buttonText, setButtonText] = useState("Switch To Dark Mode");
  const [mode, setMode] = useState(1);

  const onToggleMode = () => {
    setMode(mode === 1 ? 0 : 1);
  };
  const changeText = () => {
    setWishes("Hey Ammu .. I love you");
  };

  return (
    <div className="App">
      <Typography text={mode === 1 ? "Good Morning" : "Good Night"} />
      <Button
        name={mode === 1 ? "Switch to Dark Mode" : "Switch To Ligt Mode"}
        onClick={onToggleMode}
      />
      <Button name={"Wish"} onClick={changeText} />
      <Typography text={wishes} />
    </div>
  );
}

export default App;
