//snippet : rafce - 1
import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  //snippet : useS - 2
  const [count, setCount] = useState(initialCount);

  //snippet : nfn
  //for incrementByFive method
  const incrementByFive = () => {
    //the for loop will be executed 5 times : 0-4
    for (let i = 0; i < 5; i++) {
      //NEED to create prevCount to get
      //access of the previousCount value
      setCount((prevCount) => prevCount + 1);
    }
    console.log(count);
  };

  return (
    <div>
      Count : {count}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      {/* the two above onClick method will work but it is safer to use below - 3*/}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={incrementByFive}>Increment by 5</button>
    </div>
  );
};

export default HookCounterTwo;
