import { useContext } from "react";
import { CounterContext } from "./context";

const Nieto = () => {
  const { count, setCounter, theme } = useContext(CounterContext);
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Nieto: {count}</h1>
      <h2>Theme: {theme}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Nieto;
