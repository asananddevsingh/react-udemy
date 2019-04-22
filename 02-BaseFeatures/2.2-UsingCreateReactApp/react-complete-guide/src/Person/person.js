import React from "react";
import "./person.css";
import Radium from "radium";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };

  return (
    <div className="Person" style={style}>
      <p>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      {props.children}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
