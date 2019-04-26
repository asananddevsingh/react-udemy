import React, { Component } from "react";
import withClass from "../../../hoc/WithClass";
// import Aux from "../../../hoc/Aux";

import classes from "./Person.css";
import PropTypes from "prop-types";

class Person extends Component {
  detailElement = React.createRef();

  componentDidMount() {
    // Way 1
    // document.querySelectorAll("input")[2].focus();

    // Way 2
    this.inputElement.focus();

    // Way 3
    this.detailElement.current.style.color = "green";
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      // <div className={classes.Person}>
      <React.Fragment>
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
        <p key="key1" onClick={this.props.click} ref={this.detailElement}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="key2">{this.props.children}</p>
        <input
          key="key3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={inputEl => {
            this.inputElement = inputEl;
          }}
        />
      </React.Fragment>
      // </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
