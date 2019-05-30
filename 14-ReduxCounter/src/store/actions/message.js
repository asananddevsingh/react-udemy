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
  // NOTE: Also, it gives second argument as "getState" function, that we can use to get the previous state of the store.
  return dispatch => {
    setTimeout(() => {
      dispatch(getName(name));
    }, 2000);
  };
};
