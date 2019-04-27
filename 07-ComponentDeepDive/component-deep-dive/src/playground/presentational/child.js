import React from "react";
import MsgContext from "../context/msgContext";

const child = props => {
  const msgContext = React.useContext(MsgContext);
  return (
    <div>
      <strong>Child</strong>
      <p>Grand father's msg {props.msg}</p>
      <i>{msgContext.msgToChild}</i>
    </div>
  );
};

export default child;
