import React from "react";
import "./person.css";

const person = props => {
  return (
    <div className="Person">
      <p>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      {props.children}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
