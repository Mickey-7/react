import React from "react";

import "./App.css";
import HookCounter from "./useState/HookCounter";
import HookCounterTwo from "./useState/HookCounterTwo";
import HookCounterThree from "./useState/HookCounterThree";
import HookCounterFour from "./useState/HookCounterFour";
import HookCounterOneWith_useEffect from "./useEffect/HookCounterOneWith_useEffect";
import HookCounterTwoWith_useEffect from "./useEffect/HookCounterTwoWith_useEffect";
import HookCounterThreeWith_useEffect from "./useEffect/HookCounterThreeWith_useEffect";
import HookCounterFourWith_useEffect from "./useEffect/HookCounterFourWith_useEffect";
import HookCounterFiveWith_useEffect from "./useEffect/HookCounterFiveWith_useEffect";
import DataFetching from "./useEffectAxiosFetch/DataFetching";
import DataFetching1 from "./useEffectAxiosFetch/DataFetching1";
import DataFetching2 from "./useEffectAxiosFetch/DataFetching2";
import ContextC from "./useContext/ContextC";
import CounterOne from "./useReducer/CounterOne";
import CounterTwo from "./useReducer/CounterTwo";

// for Context - 7
export const UserContext = React.createContext();
// for Context - 9
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* 4.invoke HookCounter.js - 4*/}
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <hr />
      {/* ------------------------------------------ */}
      {/* for useEffect - 5 */}
      <HookCounterOneWith_useEffect />
      <HookCounterTwoWith_useEffect />
      <HookCounterThreeWith_useEffect />
      {/* for useEffect - 6 */}
      <HookCounterFourWith_useEffect />
      {/* for useEffect - 5 */}
      <HookCounterFiveWith_useEffect />
      <hr />
      {/* ------------------------------------------ */}
      {/* 6 */}
      <DataFetching />
      {/* 8 */}
      <DataFetching1 />
      {/* 11 */}
      <DataFetching2 />
      <hr />
      {/* ------------------------------------------ */}
      {/* Context - 7 */}
      <UserContext.Provider value={"Vishwas"}>
        {/* Context - 9 */}
        <ChannelContext.Provider value={"codevolution"}>
          {/* 4 */}
          <ContextC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <hr />
      {/* ------------------------------------------ */}
      {/* const[state, dispathc] = useReducer(reducer, initialState, init) */}
      {/* 6 */}
      <CounterOne />
      {/* 6 */}
      <CounterTwo />
    </div>
  );
}

export default App;
