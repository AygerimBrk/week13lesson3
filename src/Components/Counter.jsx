import React, { useContext } from "react";
import { counterContext } from "../CounterContextProvider";

function Counter() {
  const { increment, counter, decrement } = useContext(counterContext);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
