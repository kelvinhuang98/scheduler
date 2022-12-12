import { useState } from "react";

// function responsible for switching back and forth between views and adding/removing the mode to the history stack
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // changes to a new view depending on the current view, adds the current view to the history stacks
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

  // returns to a previous view depending on the history stack
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
