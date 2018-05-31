import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

   state = {
     persons: [
       { name: 'Josh', age: 33},
       { name: 'Holly', age: 29},
       { name: 'Jessica', age: 26}
     ]
   }

   switchNameHandler = () => {
    //  DONT DO THIS! this.state.persons[0].name = 'Bob';
    this.setState({
      persons: [
        { name: 'Bob', age: 33},
        { name: 'Holly', age: 29},
        { name: 'Jessica', age: 86}
      ]
    });
   }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Is this working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={ this.state.persons[0].name} age={ this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={ this.state.persons[1].age} >My Hobbies: Watching Netflix</Person>
        <Person name={ this.state.persons[2].name} age={ this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
