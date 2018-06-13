import React from 'react';
import myClasses from './Person.css';



const person = (props) => {

   


    return (
    <div className={myClasses.Person}>
    <p onClick={props.click}>I'm {props.name} and I am { props.age } years old</p>
    <p>{props.children}</p>
    <input type="text" value={props.name} onChange={props.changed}/>
    </div>
    )
};

export default person;