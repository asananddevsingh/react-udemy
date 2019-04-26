import React from "react";

import Person from "./Person/person";
import Hobbies from "../Hobbies/hobbies";
import ErrorBoundary from "../ErrorBoundary/errorBoundary";

class Persons extends React.Component {
  render() {
    return this.props.persons.map(person => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            changed={event => this.props.changed(event, person.id)}
          >
            {person.hasHobbies ? <Hobbies /> : null}
          </Person>
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
