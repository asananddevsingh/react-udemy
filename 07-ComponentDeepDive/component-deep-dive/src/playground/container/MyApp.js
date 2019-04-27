import React from "react";
import classes from "./MyApp.css";
import GrandParent from "../presentational/grandParent";
import MsgContext from "../context/msgContext";

class MyApp extends React.Component {
  static contextType = MsgContext;

  render() {
    return (
      <div className={classes.MyApp}>
        <h1>{this.props.appTitle}</h1>
        <MsgContext.Provider
          value={{
            msgToGrandParent:
              "MSG to Grand Father using context API: Long live Grand Father",
            msgToParent: "MSG to Parent using context API: You are my Son.",
            msgToChild:
              "MSG to Child using context API: : You are my Grand Son",
            msgToStranger: "Hello Stranger."
          }}
        >
          <GrandParent grandMsg="Passing through Parent: God bless you Grand Son" />
        </MsgContext.Provider>
      </div>
    );
  }
}

export default MyApp;
