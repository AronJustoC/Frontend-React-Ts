import { useContext } from "react";
import { CounterContext } from "../context";

export default function Button({
  onClick,
  title,
}: {
  onClick: () => void;
  title: string;
}) {
  const { theme } = useContext(CounterContext);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
      }}
    >
      {title}
    </button>
  );
}
