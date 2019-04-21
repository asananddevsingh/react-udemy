import React, { Component } from "react";
import Person from "./Person/person";
import Hobbies from "./Hobbies/hobbies";
import "./App.css";

class App extends Component {
  state = {
    persons: [{ name: "Anand Dev", age: 32 }, { name: "Sahil", age: 33 }],
    otherValue: "Some other value."
  };

  /**
   * We would need to bind the class method with this keyword, if we don't create the arrow method on the class.
   */
  // switchNameHandler = this.switchNameHandler.bind(this);

  switchNameHandler = newName => {
    // DONT TO THIS: this.state.persons[0].name = "Andy";
    this.setState({
      persons: [{ name: "Anand Dev", age: 30 }, { name: newName, age: 33 }]
    });
    console.log("[Class]: state::", this.state);
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 30 },
        { name: "Sahil", age: 33 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <button onClick={this.switchNameHandler.bind(this, "Shayarana Sahil")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          <Hobbies />
        </Person>
      </div>
    );

    /**
     * @note - React will understand the above code something like below:
     */
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Welcome to the React world!")
    // );
  }
}

export default App;
