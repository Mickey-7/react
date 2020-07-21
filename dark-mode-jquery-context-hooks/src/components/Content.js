// snippet: rafc
import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const Content = () => {
  // to start use the context we just need to import the context that we created
  // and start use with useContext trigger of reactjs
  // snippet : useC
  const [isDarkMode] = useContext(DarkModeContext);

  // the trick of DarkMode is only a conditional style of element
  //if it true put as Dark Mode, if not put the normal mode
  return (
    <div className={isDarkMode ? "contentDark content" : "content"}>
      <h3>Hello Wolrd</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem atque
        soluta optio modi quo itaque cupiditate inventore vitae saepe odio esse
        eos ab placeat deleniti repellat facere magni nulla, quos assumenda
        excepturi velit doloremque fuga illum enim. Dolores reprehenderit
        eligendi rerum odit incidunt natus voluptates nam hic in, rem
        exercitationem.
      </p>
    </div>
  );
};
