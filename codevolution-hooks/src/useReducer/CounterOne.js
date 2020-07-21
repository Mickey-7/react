// snippet : rafce - 1
import React, { useReducer } from "react";

// create const initialState to 0 - 2
const initialState = 0;
// create const reducer with state &
// action as input param - snippet : nfn
// 3
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  // snippet : useRe
  // invoke reducer & initialState on useReducer - 4
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* invoke action - 5 */}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>{state}</div>
    </div>
  );
};

export default CounterOne;
