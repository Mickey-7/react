// snippet : rafce - 2
import React, { useContext } from "react";
import ContextF from "./ContextF";
import { UserContext, ChannelContext } from "../App";

const ContextE = () => {
  // snippet : useC - 10
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {/* 6 */}
      <ContextF />
      {/* 11 */}
      {user} - {channel}
    </div>
  );
};

export default ContextE;
