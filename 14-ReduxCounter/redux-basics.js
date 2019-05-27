const redux = require("redux");
const createStore = redux.createStore;

// It could be of any type i.e. string, number object etc.
const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action

// Subscription
