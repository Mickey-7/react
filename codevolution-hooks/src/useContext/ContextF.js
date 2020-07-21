// snippet : rafce - 3
import React from "react";
import { UserContext } from "../App";

const ContextF = () => {
  return (
    <div>
      {/* 8 */}
      <UserContext.Consumer>
        {(value) => {
          return <div>context value - {value}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ContextF;
