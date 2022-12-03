import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace) {
      setHistory((prev) => {
        const newHistory = prev;
        newHistory[newHistory.length - 1] = newMode;
        return newHistory;
      });
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
  };

  const back = () => {
    setHistory((prev) => {
      if (prev.length > 1) {
        const copyHistory = [...prev];
        copyHistory.pop();
        setMode(copyHistory[copyHistory.length - 1]);
        return copyHistory;
      }
    });
  };

  return { mode, transition, back };
}
