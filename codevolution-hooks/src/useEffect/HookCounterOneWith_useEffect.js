// snippet : rafce - 1
import React, { useState, useEffect } from "react";

const HookCounterOneWith_useEffect = () => {
  //snippet : useS - 2
  const [count, setCount] = useState(0);
  //snippet : useE - 3
  //executed after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      {/* step - 4 */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click {count} times
      </button>
    </div>
  );
};

export default HookCounterOneWith_useEffect;
