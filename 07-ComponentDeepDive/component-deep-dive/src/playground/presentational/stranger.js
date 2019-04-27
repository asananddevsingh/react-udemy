import React from "react";
import MsgContext from "../context/msgContext";

class Stranger extends React.Component {
  static contextType = MsgContext;

  render() {
    return <React.Fragment>{this.context.msgToStranger}</React.Fragment>;
  }
}

export default Stranger;
