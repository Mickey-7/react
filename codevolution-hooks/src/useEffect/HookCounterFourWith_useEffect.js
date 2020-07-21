// snippet : rafce - 1
import React, { useState, useEffect } from "react";
import HookCounterThreeWith_useEffect from "./HookCounterThreeWith_useEffect";

const HookCounterFourWith_useEffect = () => {
  // snippet : useS - 2
  const [display, setDisplay] = useState(true);

  return (
    <div>
      {/* invoke display - 3 */}
      <button onClick={() => setDisplay(!display)}>toggle display</button>
      {/* invoke also display && HookCounterThreeWith_useEffect.js component - 4 */}
      {display && <HookCounterThreeWith_useEffect />}
    </div>
  );
};

export default HookCounterFourWith_useEffect;
