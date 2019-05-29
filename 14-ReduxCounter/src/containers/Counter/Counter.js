import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/actions";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counterResult} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubstractCounter(5)}
        />
        <hr />
        <button onClick={() => this.props.onGreet("Anand Dev")}>
          Greet Me in 2sec
        </button>
        <br />
        <strong>{this.props.greetMsg}</strong>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counterResult: state.ctr.counter,
    greetMsg: state.grt.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: value => dispatch(actionCreators.add(value)),
    onSubstractCounter: value => dispatch(actionCreators.substract(value)),
    onGreet: name => dispatch(actionCreators.greet(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
