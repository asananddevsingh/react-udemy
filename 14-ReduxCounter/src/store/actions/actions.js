export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";
export const GREET = "GREET";

// Action Creators.
export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const add = value => {
  return {
    type: ADD,
    value
  };
};
export const substract = value => {
  return {
    type: SUBSTRACT,
    value
  };
};

export const getName = name => {
  return {
    type: GREET,
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
