import React from "react";
import borgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={borgerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;
