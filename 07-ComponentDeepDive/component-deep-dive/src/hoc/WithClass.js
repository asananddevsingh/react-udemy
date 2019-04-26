import React from "react";

// Way 1

// const withClass = props => (
//   <div className={props.classes}>{props.children}</div>
// );

// export default withClass;

const withClass = (WrapperComponent, classes) => {
  return props => (
    <div className={classes}>
      <WrapperComponent {...props} />
    </div>
  );
};

export default withClass;
