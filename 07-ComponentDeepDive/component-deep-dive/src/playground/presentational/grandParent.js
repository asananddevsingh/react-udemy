import React from "react";
import Parent from "./parent";
import MsgContext from "../context/msgContext";
import Stranger from "../presentational/stranger";

class GrandParent extends React.Component {
  render() {
    return (
      <div>
        <MsgContext.Consumer>
          {context => <h3>{context.msgToGrandParent}</h3>}
        </MsgContext.Consumer>
        <Parent parentMsg={this.props.grandMsg} />
        <Stranger />
      </div>
    );
  }
}

export default GrandParent;
