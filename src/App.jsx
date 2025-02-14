import React, { useState } from "react";
import "./App.css"; // Ensure CSS is linked

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setHistory([...history, input]);
        setRedoStack([]);
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setHistory([]);
      setRedoStack([]);
    } else {
      setHistory([...history, input]);
      setRedoStack([]);
      setInput(input + value);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      setRedoStack([input, ...redoStack]);
      setInput(history[history.length - 1]);
      setHistory(history.slice(0, -1));
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      setHistory([...history, input]);
      setInput(redoStack[0]);
      setRedoStack(redoStack.slice(1));
    }
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="calculator">
      <button className="toggle" onClick={toggleDarkMode}>Toggle Dark Mode</button>

      <div className="undo-redo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>

      <input type="text" value={input} readOnly />

      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"].map(
          (item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          )
        )}
      </div>

      <button className="clear" onClick={() => handleClick("C")}>C</button>
    </div>
  );
};

export default Calculator;
