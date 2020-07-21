// snippet : rafce - 1
import React, { useReducer } from "react";

// create const initialState nad set
// firstCounter to 0 & secondCounter to 10
// 2
const initialState = {
  firstCounter: 0,
};
// create const reducer with state & action as input param
//   - snippet : nfn & snippet : switch
// invoke the firstCounter & value on return
// 3
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      // note that state : initialState
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  // snippet : useRe
  // invoke reducer & initialState on useReducer - 4
  const [state, dispatch] = useReducer(reducer, initialState);

  // now state : initialState & dispatch : reducer

  return (
    <div>
      {/* invoke on JSX the state & dispatch with ttype inside on onClick - 5 */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>{state.firstCounter}</div>
    </div>
  );
};

export default CounterTwo;
