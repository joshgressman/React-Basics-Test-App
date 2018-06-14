import React from 'react';
import myClasses from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
   
    if(props.showPerson) {
       btnClass = myClasses.Red;
    }

    if(props.persons.length <= 2){
      assignedClasses.push(myClasses.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(myClasses.bold);
    }
 
    return (
        <div className={myClasses.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>Is this working</p>
        <button className={btnClass}
        onClick={props.clicked}
        >Switch Name</button>
        </div>
    );
};


export default cockpit