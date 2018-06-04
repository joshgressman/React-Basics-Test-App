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


   switchNameHandler = (newName) => {
    //  DONT DO THIS! this.state.persons[0].name = 'Bob';
    this.setState({
      persons: [
        { name: newName, age: 33},
        { name: 'Holly', age: 29},
        { name: 'Jessica', age: 86}
      ]
    });
   }

// Invokes two way data binding upon change in the text field
  nameChangedHandler = (event) => {
    this.setState({
      persons:{showPerson: false }
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  
  render() {

    // Inline Styles
    const buttonStyle = {
      backgroundColor: 'blue',
      padding: '10px',
      borderRadius: '6px',
      color: 'white',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
        <Person 
        name={ this.state.persons[0].name} 
        age={ this.state.persons[0].age} 
        />
        
        <Person 
        name={this.state.persons[1].name} 
        age={ this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Sally Jones')} 
        changed={this.nameChangedHandler}
        >
        My Hobbies: Watching Netflix</Person>

        <Person 
        name={ this.state.persons[2].name} 
        age={ this.state.persons[2].age}
        />

        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Is this working</p>
        {/* Used the .bind syntax below in place of the function call */}
        <button style={buttonStyle} 
        // onClick={() => this.switchNameHandler('Bob Dole')}
        onClick={this.togglePersonHandler}
        >Switch Name</button>

        {persons}
      </div>
    );
  }
}

export default App;
