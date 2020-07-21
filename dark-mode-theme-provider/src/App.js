import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./global/GlobalStyles";
import { ThemeProvider } from "styled-components";

function App() {
  // snippet : useS
  const [theme, setTheme] = useState("light");

  // The function that toggles between themes
  // snippet : nfn
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* Pass the toggle functionality to the button */}
      <button onClick={toggleTheme}>Toggle theme</button>
      <h3>It's a light theme!</h3>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;
