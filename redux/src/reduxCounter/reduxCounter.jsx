import React from "react";
import { createStore, compose } from "redux";

const initialState = { name: "redux-count-reducer", count: 0 };

const reduxCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UP":
            return {
                ...state,
                count: ++state.count
            };
        case "DOWN":
            return {
                ...state,
                count: --state.count
            };
        default:
            return state;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Expected the reducer always to be a function.
const reduxStore = createStore(reduxCountReducer, composeEnhancers())

console.log(reduxStore); // {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}

/**
 * @getState : It is a fucntion that returns the current state tree of your application.
 *              It is equal to the last value returned by the store's reducer.
 */
console.log(reduxStore.getState()) // {name: "redux-store", count: 0}

/**
 * @dispatch : It dispatches an action. This is the only way to trigger a state change.
 *  
 * @param {object}: Action object that must have to "type" property and its value as string. 
*/
// It will be returned from getState() from now on, and the change listeners will immediately be notified.
reduxStore.dispatch({ type: "UP", foo: "bar" });

// Working after calling the dispatch()

// Step 1 (current state of the store):
const currentState = reduxStore.getState();

// Step 2 (reducing function will be called with the current getState() result and the given action synchronously.): 
reduxCountReducer(currentState, { type: "UP" });

// Step 3 (Its return value will be considered the next state): 
const reduxState = reduxStore.getState();
console.log("reduxState :", reduxState); // {name: "redux-count-reducer", count: 2}

const btnStyle = {
    margin: "10px",
    background: "black",
    color: "white",
    fontWeight: "bold",
    padding: "8px 12px",
    minWidth: "80px",
}

let textColor = {

}

class ReduxCounter extends React.Component {
    state = {
        isStateChanged: false
    }

    upHandler = () => {
        reduxStore.dispatch({ type: "UP" });
        // This is done just to re-render the component.
        this.setState({ isStateChanged: true });
    }

    downHandler = () => {
        reduxStore.dispatch({ type: "DOWN" });
        // This is done just to re-render the component.
        this.setState({ isStateChanged: true });
    }

    replaceHandler = () => {
        const initialNextState = { name: "replaced-next-reducer" };
        const nextReducre = (state = initialNextState, action) => {
            switch (action.type) {
                case "RESET":
                    return {
                        ...state,
                        count: "Your reducer has been replaced with next reducer."
                    };
                default:
                    return state;
            }
        }
        reduxStore.replaceReducer(nextReducre)
        reduxStore.dispatch({ type: "RESET" });
        textColor = { color: "red", fontWeight: "bold" };
        // This is done just to re-render the component.
        this.setState({ isStateChanged: true });
    }



    render() {
        return <>
            <h1>Redux Counter</h1>
            <div style={textColor}>{reduxStore.getState().count}</div>
            <button style={btnStyle} onClick={this.upHandler}>REDUX UP</button>
            <button style={btnStyle} onClick={this.downHandler}>REDUX DOWN</button>
            <br />
            <button style={btnStyle} onClick={this.replaceHandler}>REPLACE REDUCER</button>
        </>
    }
}



export default ReduxCounter;