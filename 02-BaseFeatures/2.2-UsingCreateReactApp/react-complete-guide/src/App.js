// import React, { Component } from "react";
import React, { useState } from "react";
import Person from "./Person/person";
import "./App.css";

const app = () => {
  /**
   * @note - useState returns and array with always two elements.
   *
   * 1. First Element - Current state object.
   * 2. Second Element - function that allows us to update this state such that react is aware of this and re-render the component.
   */
  const [personsStateObj, setPersonsStateFn] = useState({
    persons: [{ name: "Anand", age: 32 }, { name: "Dev", age: 33 }],
    otherValue: "Some other value."
  });

  useState({
    mergeThis: "Merged value."
  });

  const switchNameHandler = () => {
    setPersonsStateFn({
      persons: [{ name: "Shayarana", age: 30 }, { name: "Sahil", age: 24 }]
    });
  };

  /**
   * @note - In the case of using "useState" hook, values other than the updated fields will be lost.
   *
   * In this case: "otherValue" will be lost from the state object. So to maintian it, you may manually copy the rest of the values
   * into the setPersonsStateFn or you can use "useState" multiple times set the values individually.
   *
   * e.g.
   *
   */
  console.log("[Functional]: state::", personsStateObj);

  const [newVal] = useState({
    newValue: "Some new value."
  });

  console.log("[Functional]: state and newState::", personsStateObj, newVal);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsStateObj.persons[0].name}
        age={personsStateObj.persons[0].age}
      />
      <Person
        name={personsStateObj.persons[1].name}
        age={personsStateObj.persons[1].age}
      >
        <i>Hobiees: [Running, Writing]</i>
      </Person>
    </div>
  );
};

export default app;

// class App extends Component {
//   state = {
//     persons: [{ name: "Anand Dev", age: 32 }, { name: "Sahil", age: 33 }],
//     otherValue: "Some other value."
//   };

//   /**
//    * We would need to bind the class method with this keyword, if we don't create the arrow method on the class.
//    */
//   // switchNameHandler = this.switchNameHandler.bind(this);

//   switchNameHandler = () => {
//     // DONT TO THIS: this.state.persons[0].name = "Andy";
//     this.setState({
//       persons: [{ name: "Sahil", age: 30 }, { name: "Sahil", age: 33 }]
//     });
//     console.log("[Class]: state::", this.state);
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Welcome</h1>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           <i>Hobiees: [Running, Writing]</i>
//         </Person>
//       </div>
//     );

//     /**
//      * @note - React will understand the above code something like below:
//      */
//     // return React.createElement(
//     //   "div",
//     //   { className: "App" },
//     //   React.createElement("h1", null, "Welcome to the React world!")
//     // );
//   }
// }

// export default App;
