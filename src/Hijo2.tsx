import { useContext } from "react";
import { CounterContext } from "./context";
import Button from "./components/button";
const Hijo2 = () => {
  const { count, setCounter, setTheme, theme } = useContext(CounterContext);
  if (count === 3) {
    return null;
  }
  return (
    <div style={{ border: "1px solid blue" }}>
      <h1>Hijo2: {count}</h1>
      <Button onClick={() => setCounter((prev) => prev + 1)} title={"+"} />
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        title={theme === "light" ? "Cambiar a oscuro" : "Cambiar a claro"}
      />
    </div>
  );
};

export default Hijo2;
