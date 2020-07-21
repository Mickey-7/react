import React, { createContext, useState, useEffect } from "react";
// manual import
// snippet : imp + tab
import $ from "jquery";

//Here we create our context that is a instance of createContext class.
//the name must be the same as the file of the context.
// manually created
export const DarkModeContext = createContext();

// snippet : nfn
export const DarkModeProvider = (props) => {
  // that is the state that we assume to be global to our app
  // snippet : useS
  const [isDarkMode, setIsDarkMode] = useState(false);

  //when the App render, its see if what was the UI the mode
  //  that user used at last time he choose
  //and parse it to a state.
  //   sniipet : useE
  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("isDarkMode"));
    setIsDarkMode(mode);
    if (mode) {
      $(".sw").addClass("swOn");
    } else {
      $(".sw").removeClass("swOn");
    }
  }, [isDarkMode]);
  //The Object that we created got the Property Provider that will provide
  //   for our components the value of our context, that is
  // a [isDarkMode, setsetIsDarkModeMode]
  // isDarkMode is a boolean variable
  //setIsDarkMode is the method that can change the value of the context
  //All children component can use this Context.

  return (
    <DarkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
