import React, { Component } from 'react';
import Person from './Person/Person';
import myClasses from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = '';

    if (this.state.showPerson){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
         return <ErrorBoundary key={person.id}><Person  name={person.name} age={person.age} changed={(event) => this.nameChangedHandler(event, person.id)} click={() => this.deletePersonHandler(index)}/></ErrorBoundary>
        })}
        </div>
      );
      btnClass = myClasses.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(myClasses.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(myClasses.bold);
    }


    return (
 
      <div className={myClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>Is this working</p>
        {/* Used the .bind syntax below in place of the function call */}
        <button className={btnClass}
        // onClick={() => this.switchNameHandler('Bob Dole')}
        onClick={this.togglePersonHandler}
        >Switch Name</button>

        {persons}
      </div>
   
    );
  }
}

export default App;
