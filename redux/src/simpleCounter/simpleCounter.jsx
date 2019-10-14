import React from "react";

const btnStyle = {
    margin: "10px",
    background: "black",
    color: "white",
    fontWeight: "bold",
    padding: "8px 12px",
    minWidth: "80px",
}

class SimpleCounter extends React.Component {

    state = {
        count: 0
    }

    upHandler = () => {
        this.setState((prevState) => {
            return { count: ++prevState.count }
        })
    }

    downHandler = () => {
        this.setState((prevState) => {
            return { count: --prevState.count }
        })
    }

    render() {
        return <>
            <h1>Simple Counter</h1>
            <div>{this.state.count}</div>
            <button style={btnStyle} onClick={this.upHandler}>UP</button>
            <button style={btnStyle} onClick={this.downHandler}>DOWN</button>
        </>
    }
}

export default SimpleCounter;