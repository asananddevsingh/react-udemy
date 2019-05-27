const redux = require("redux");
const createStore = redux.createStore;

// It could be of any type i.e. string, number object etc.
const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState()); // It will return "initialState" becuase we don't have dispatched any action yet and not modified the store.

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState()); // It will return "{ counter: 11 }".
