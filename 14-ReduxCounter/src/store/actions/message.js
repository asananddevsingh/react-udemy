import * as actionTypes from "./actionsTypes";

export const getName = name => {
  return {
    type: actionTypes.GREET,
    name
  };
};

export const greet = name => {
  // Middleware runs between dispatching an action and the point of time action reaches the reducer.
  // Here dispatch will be available becuase we have added thunk.
  return dispatch => {
    setTimeout(() => {
      dispatch(getName(name));
    }, 2000);
  };
};
