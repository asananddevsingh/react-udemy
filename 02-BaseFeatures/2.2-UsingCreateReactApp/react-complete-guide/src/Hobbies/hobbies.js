import React, { useState } from "react";

const hobbies = () => {
  /**
   * @note - useState returns and array with always two elements.
   *
   * 1. First Element - Current state object.
   * 2. Second Element - function that allows us to update this state such that react is aware of this and re-render the component.
   */
  const [hobbiesStateObj, setHobbiesStateFn] = useState({
    hobbies: ["Running", "Writing"],
    otherValue: "Some other value."
  });

  const switchHobbyHandler = () => {
    setHobbiesStateFn({
      hobbies: ["Running", "Writing", "Playing Guitar"]
    });
  };

  /**
   * @note - In the case of using "useState" hook, values other than the updated fields will be lost.
   *
   * In this case: "otherValue" will be lost from the state object. So to maintian it, you may manually copy the rest of the values
   * into the sethobbiesStateFn or you can use "useState" multiple times set the values individually.
   *
   * e.g.
   *
   */
  console.log("[Functional]: state::", hobbiesStateObj);

  const [newVal] = useState({
    newValue: "Some new value."
  });

  console.log("[Functional]: state and newState::", hobbiesStateObj, newVal);

  const style = {
    color: "green"
  };

  return (
    <ul style={style}>
      <li>
        <button onClick={switchHobbyHandler}>Switch Hobby</button>
      </li>
      {hobbiesStateObj.hobbies.map(hobby => (
        <li key={hobby}>{hobby}</li>
      ))}
    </ul>
  );
};

export default hobbies;
