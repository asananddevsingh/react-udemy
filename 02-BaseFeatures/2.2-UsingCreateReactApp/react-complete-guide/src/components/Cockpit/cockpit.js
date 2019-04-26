import React, { useEffect } from "react";

const cockpit = props => {
  useEffect(() => {
    setTimeout(() => {
      // alert("state changed.");
    });
  }, [props.showPersons]);

  const buttonStyle = {
    background: "green",
    padding: "10px",
    margin: "16px auto",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer"
  };

  if (props.showPersons) {
    buttonStyle.background = "red";
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <button style={buttonStyle} onClick={props.click}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
