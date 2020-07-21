// snippet : rafce - 1
import React, { useState, useEffect } from "react";

const HookCounterThreeWith_useEffect = () => {
  // snippet : useS
  // setInitialValue to 0 using useState() - 2
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // set the document title using useEffect() - 3
  // executed once only - notice on the console the useEffect
  // event appears only once on initial then no more
  useEffect(() => {
    // appears only once on initial then no more on console
    console.log("useEffect event");
    window.addEventListener("mousemove", logMousePosition);

    //added for HookCounterFourWith_useEffect.js only - 5
    //remove event listener purpose once button is clicked
    return () => {
      console.log("component removing event listener code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  // snippet : nfn
  const logMousePosition = (e) => {
    console.log("mouse event");
    //set coordinates
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div>
      {/* invoke the x and y values - 5  */}
      Hooks : X - {x} Y - {y}
    </div>
  );
};

export default HookCounterThreeWith_useEffect;
