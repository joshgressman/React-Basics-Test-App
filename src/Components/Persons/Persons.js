import React, {Component} from 'react';
import Person from './Person/Person';

//props will contain an array of persons
class Persons extends Component {

    constructor(props){
        super(props);
        console.log(props);
      }
    
      //Lifecycle hooks
      componentWillMount() {
       console.log('[Persons.js] inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Persons.js] inside componentDidlMount()');
      }

      componentWillReceiveProps(nextProps) {
          console.log('Persons.js inside will receive props');
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE] persons.js Inside shouldUpdateComponet ', nextProps + " " + nextState)
        return true;
    }

    render() {
   
        console.log('[Persosn.js] inside render()');

        return this.props.persons.map((person, index) => {
            return <Person  
                   key={person.id} 
                   name={person.name} 
                   age={person.age} 
                   changed={(event) => this.props.changed(event, person.id)} 
                   click={() => this.props.clicked(index)}/>
            });
    }
} 

export default Persons;
