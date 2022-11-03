import { useEffect, useState } from "react";

const Button = (props) => {
  const { name, onCustomButtonClick, type } = props;

  const [buttonClass, setButtonClass] = useState("");
  useEffect(() => {
    initButtonClass();
  }, [type]);

  const initButtonClass = () => {
    switch (type) {
      case "primary":
        setButtonClass("btn btn-primary");
        return;
      case "secondary":
        setButtonClass("btn btn-secondary");
        return;
      case "danger":
        setButtonClass("btn btn-danger");
        return;
      case "warning":
        setButtonClass("btn btn-warning");
        return;
      case "info":
        setButtonClass("btn btn-info");
        return;
      default:
        setButtonClass("btn btn-success");
        return;
    }
  };

  return (
    <button className={buttonClass} onClick={onCustomButtonClick}>
      {name}
    </button>
  );
};
export default Button;
