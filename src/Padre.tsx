import { useState, useContext } from "react";
import { CounterContext } from "./context";
import Hijo1 from "./Hijo1";
import Hijo2 from "./Hijo2";

export default function Padre() {
  const { theme } = useContext(CounterContext);

  return (
    <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
      <Hijo1 />
      <Hijo2 />
    </div>
  );
}
