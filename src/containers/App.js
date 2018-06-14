import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import myClasses from './App.css';


class App extends Component {

   state = {
     persons: [
       { id: '1', name: 'Josh', age: 33},
       { id: '2', name: 'Holly', age: 29},
       { id: '3', name: 'Jessica', age: 26}
     ]
   }

  deletePersonHandler = (personIndex) => {
   console.log("Selected delete " + personIndex);
  //  const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
   //Splice creates a new version of the array
   persons.splice(personIndex, 1);
   this.setState({persons: persons});

  }
  

// Invokes two way data binding upon change in the text field
  nameChangedHandler = (event, id) => {

    //find element based on assigned index, returns if true = found
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //person is now the selected person via the index from the findIndex()
    const person = {
      ...this.state.persons[personIndex]
    };

    //Person name is assigned from the event target value
    person.name = event.target.value;

    //new updated of the persons array initialez with the spread operator same as slice() creating an instance of the array
    const persons = [...this.state.persons];

    //new person property is updated to the person name update
    persons[personIndex] = person;

    //The state is updated with the new persons array
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  
  render() {

    
    // Output lists in React
    let persons = null;

    if (this.state.showPerson){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />;
    }

   
    return (
 
      <div className={myClasses.App}>
        <Cockpit 
        showPerson={this.state.showPerson} 
        persons={this.state.persons}
        clicked={this.togglePersonHandler}
        />

        {persons}
      </div>
   
    );
  }
}

export default App;
