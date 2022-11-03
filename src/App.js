import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import Typography from "./Typography";

function App() {
  const [wishes, setWishes] = useState("Hey Ammu ");
  // const [buttonText, setButtonText] = useState("Switch To Dark Mode");
  const [mode, setMode] = useState(1);
  const [type, setType] = useState("primary");

  const onToggleMode = () => {
    setMode(mode === 1 ? 0 : 1);
  };
  const changeText = () => {
    setWishes("Hey Ammu .. I love you");
  };

  return (
    <div
      // className="bg-dark"
      className={mode === 1 ? "bg-dark" : "bg-light"}
      style={{ height: "100vh" }}
    >
      <Typography
        text={mode === 1 ? "Good Morning" : "Good Night"}
        mode={mode}
      />
      <Button
        name={mode === 1 ? "Switch to Light Mode" : "Switch To Dark Mode"}
        onCustomButtonClick={onToggleMode}
        type={mode === 1 ? "primary" : "secondary"}
      />
      <Button name={"Wish"} onCustomButtonClick={changeText} type={"info"} />
      <Typography text={wishes} mode={mode} />
    </div>
  );
}

export default App;
