// snippet : rafce - 1
import React, { useState, useEffect } from "react";

const HookCounterFiveWith_useEffect = () => {
  // snippet : useS - 2
  const [count, setCount] = useState(0);

  // solution 1
  // snippet : nfn - 4
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // snippet : useE - 5
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  //   // or solution  2
  //   const tick = () => {
  //     setCount(count + 1);
  //   };
  //   useEffect(() => {
  //     const interval = setInterval(tick, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  return (
    <div>
      {/* invoke count - 3 */}
      {count}
    </div>
  );
};

export default HookCounterFiveWith_useEffect;
