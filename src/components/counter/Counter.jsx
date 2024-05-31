import { useState } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementFunction(by) {
    setCount(count + by);
  }

  function decrementFunction(by) {
    setCount(count - by);
  }

  function resetButton() {
    setCount(0);
  }

  return (
    <>
      <CounterButton
        by={1}
        incrementFunction={incrementFunction}
        decrementFunction={decrementFunction}
      />
      <CounterButton
        by={2}
        incrementFunction={incrementFunction}
        decrementFunction={decrementFunction}
      />
      <CounterButton
        by={5}
        incrementFunction={incrementFunction}
        decrementFunction={decrementFunction}
      />
      <div className="count">{count}</div>
      <button className="resetButton" onClick={resetButton}>
        Reset
      </button>
    </>
  );
}

export default Counter;
