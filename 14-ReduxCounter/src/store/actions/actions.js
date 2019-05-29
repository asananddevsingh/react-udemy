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
export const greet = name => {
  return {
    type: GREET,
    name
  };
};
