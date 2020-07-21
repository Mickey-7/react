// snippet : rafc
import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
// manual import
// snippet : imp + tab
import $ from "jquery";

export const Navbar = () => {
  // Here we make a use of the context Just import
  //it and start use with useContext Hook feature of react.
  const [isDarkMode, setIsDarkMode] = useContext(DarkModeContext);

  // snippet : nfn
  const tooglemode = () => {
    $(".sw").toogleClass("swOn");
    //that is the method that we pass as a value of our context to help manipulate or change it.
    // that just make a toggle of the value.
    // At another situation you might need to compare the old value to update like:
    // setIsDarkMode(prevValue=> ... ) that way you can acess the old value in method and change or maybe
    // add new one
    setIsDarkMode(!isDarkMode);

    //we store our UI theme mode on localstorage
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  const addDarkMode = () => {
    $(".sw").addClass("swOn");
    setIsDarkMode(true);
    localStorage.setItem("isDarkMode", true);
  };

  const addLightMode = () => {
    $(".sw").removeClass("swOn");
    setIsDarkMode(false);
    localStorage.setItem("isDarkMode", false);
  };

  // the trick of DarkMode is only a conditional style of element
  //if it true put as Dark Mode, if not put the normal mode
  return (
    <div className={isDarkMode ? "navbarDark navbar" : "navbar"}>
      <h3>React App</h3>

      <div className="btnMode">
        <span role="img" onClick={addLightMode}>
          🌞
        </span>
        <div onClick={tooglemode} className="switch_toggle">
          <div id="sw" className={isDarkMode ? "swOn sw" : "sw"}></div>
        </div>
        <span role="img" onClick={addDarkMode}>
          🌚
        </span>
      </div>
    </div>
  );
};
