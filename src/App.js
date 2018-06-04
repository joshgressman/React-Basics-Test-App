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

  deletePersonHandler = (personIndex) => {
   console.log("Selected delete " + personIndex);
   const persons = this.state.persons;
   //Splice creates a new version of the array
   persons.splice(personIndex, 1);
   this.setState({persons: persons});

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

    // Output lists in React
    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
         return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)}/>
        })}
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
