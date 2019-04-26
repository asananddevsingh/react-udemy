import React from "react";
import classes from "../Person/person.css";

class Person extends React.Component {
  render() {
    return (
      <div className={classes.Person}>
        <p>
          I'm {this.props.name} and I'm {this.props.age} years old.
        </p>
        {this.props.children}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
