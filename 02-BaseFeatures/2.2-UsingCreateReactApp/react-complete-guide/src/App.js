import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";
import Hobbies from "./Hobbies/hobbies";

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
    const buttonStyle = {
      background: "green",
      padding: "10px",
      margin: "16px auto",
      color: "#fff",
      fontSize: "14px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <button
            onClick={this.switchNameHandler.bind(this, "Shayarana Sahil")}
          >
            Switch Name
          </button>
          {this.state.persons.map(person => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
              >
                {person.hasHobbies ? <Hobbies /> : null}
              </Person>
            );
          })}
        </div>
      );
      buttonStyle.background = "red";
    }

    return (
      <div className="App">
        <h1>Welcome</h1>
        <button style={buttonStyle} onClick={this.togglePersons}>
          Toggle Persons
        </button>
        {persons}
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
