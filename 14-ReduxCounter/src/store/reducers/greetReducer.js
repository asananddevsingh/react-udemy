import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  message: "Welcome"
};

const greetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GREET:
      return updateObject(state, {
        message: state.message.concat(" ", action.name)
      });
    default:
      return state;
  }
};

export default greetReducer;
