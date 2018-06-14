import React, {Component} from 'react';
import myClasses from './Person.css';



class Person extends Component{

    constructor(props){
        super(props);
        console.log(props);
      }
    
      //Lifecycle hooks
      componentWillMount() {
       console.log('[Person.js] inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Person.js] inside componentDidlMount()');
      }
    
   render() {
    
    console.log('[Person.js] inside rendert()');

    return (
        <div className={myClasses.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I am { this.props.age } years old</p>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.changed}/>
        </div>
        )
   }
}

export default Person;