import { createContext, useState } from "react";

export const CounterContext = createContext<{
  count: number;
  theme: "light" | "dark";
  setCounter: (val: number) => void;
  setTheme: (string: "light" | "dark") => void;
}>({
  count: 0,
  theme: "light",
  setCounter: (val: number) => console.log(val),
  setTheme: (val: "light" | "dark") => console.log(val),
});

export default function CounterContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [count, setCounter] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <CounterContext.Provider value={{ count, setCounter, theme, setTheme }}>
      {children}
    </CounterContext.Provider>
  );
}
