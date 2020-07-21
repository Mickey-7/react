import React from "react";
import logo from "./logo.svg";
import "./App.css";
//Here we call our provider to be as container for those component that need the data
import { DarkModeProvider } from "./context/DarkModeContext";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

function App() {
  //As you can see all the components inside of DarkModeProvider can acess or make the use of context

  return (
    <div className="App">
      <DarkModeProvider>
        <Navbar />
        <Content />
      </DarkModeProvider>
    </div>
  );
}

export default App;
