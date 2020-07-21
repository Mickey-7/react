// snippet : rafce
// 1.create HookCounter.js (snippet : rafce)
import React, { useState } from "react";

const HookCounter = () => {
  // snippet : useS
  // 2.setInitialValue to 0 using useState()
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 3.create method to change value when counting  */}
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default HookCounter;
