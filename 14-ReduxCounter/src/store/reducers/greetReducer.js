import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  message: "Welcome"
};

const greetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GREET:
      return {
        message: state.message.concat(" ", action.name)
      };
    default:
      return state;
  }
};

export default greetReducer;
