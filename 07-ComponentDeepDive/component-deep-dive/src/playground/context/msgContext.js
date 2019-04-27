import React from "react";

const msgContext = React.createContext({
  msgToGrandParent: null,
  msgToParent: null,
  msgToChild: null,
  msgToStranger: null
});

export default msgContext;
