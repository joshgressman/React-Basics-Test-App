import React from "react";
import myClasses from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = myClasses.Button;

  if (props.showPerson) {
    btnClass = [myClasses.Button, myClasses.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(myClasses.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(myClasses.bold);
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>Is this working</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </Aux>
  );
};

export default cockpit;
