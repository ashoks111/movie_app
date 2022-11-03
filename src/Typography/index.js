const Typography = (props) => {
  const { text, mode } = props;
  return <h1 className={mode === 1 ? "text-light" : "text-dark"}>{text}</h1>;
};
export default Typography;
