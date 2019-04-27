import React from "react";
import Child from "./child";
import MsgContext from "../context/msgContext";

class Parent extends React.Component {
  static contextType = MsgContext;

  render() {
    return (
      <React.Fragment>
        <h2>{this.context.msgToParent}</h2>
        <Child msg={this.props.parentMsg} />
      </React.Fragment>
    );
  }
}

export default Parent;
