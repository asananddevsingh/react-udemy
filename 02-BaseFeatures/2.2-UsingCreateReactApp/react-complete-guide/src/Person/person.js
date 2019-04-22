import React from "react";
import classes from "./person.css";
// import Radium from "radium";

const person = props => {
  // const style = {
  //   "@media (min-width: 500px)": {
  //     width: "450px"
  //   }
  // };

  const rndm = Math.random();

  if (rndm > 0.7) {
    throw new Error("Oops! Something went wrong.");
  }

  return (
    <div className={classes.Person}>
      <p>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      {props.children}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
