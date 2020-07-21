// snippet : rafce - 1
import React, { useState, useEffect } from "react";

const HookCounterTwoWith_useEffect = () => {
  //snippet : useS - 2

  const [name, setName] = useState("");
  //snippet : useE - 3
  //executed whenever there is a change on [name]
  useEffect(() => {
    // notice that this log appears on the console
    // whenever we have a change on name at the input
    console.log("useEffect - updating document title");
  }, [name]);
  return (
    <div>
      {/* step - 4 */}
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />
    </div>
  );
};

export default HookCounterTwoWith_useEffect;
