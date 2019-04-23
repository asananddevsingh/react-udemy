import React, { Component } from "react";
import classes from "./App.css";
// import Radium, { StyleRoot } from "radium";
import Persons from "../components/Persons/persons";
import Cockpit from "../components/Cockpit/cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "01", name: "Anand Dev", age: 32 },
      { id: "02", name: "Sahil", age: 33, hasHobbies: true }
    ],
    otherValue: "Some other value.",
    showPersons: false
  };

  /**
   * We would need to bind the class method with this keyword, if we don't create the arrow method on the class.
   */
  // switchNameHandler = this.switchNameHandler.bind(this);

  switchNameHandler = newName => {
    // DONT TO THIS: this.state.persons[0].name = "Andy";
    this.setState({
      persons: [
        { id: "01", name: "Anand Dev", age: 30, shouldChanged: true },
        { id: "02", name: newName, age: 33, hasHobbies: true }
      ]
    });
    console.log("[Class]: state::", this.state);
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <button
            className={classes.SwitchName}
            onClick={this.switchNameHandler.bind(this, "Shayarana Sahil")}
          >
            Switch Name
          </button>
          <Persons
            persons={this.state.persons}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          click={this.togglePersons}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
