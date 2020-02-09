import React, { Component } from 'react';
import './App.css';
import First from './First/first'
import Counter from "./Counter/counter";

class App extends Component {
  state = {
    person: [
      {name:'Rakibul Islam', email:'test@gmail.com', address:'Dhaka'},
      {name:'Test', email:'test2@gmail.com', address:'Uttara,Dhaka'},
      {name:'Test2', email:'test3@gmail.com', address:'Rampura,Dhaka'}
    ]
  };

  render() {
    return (
      <div className="App">
          { this.state.person.map((people, index) => {
            return <First
                key={index}
                name={people.name}
                email={people.email}
                addres={people.address}/>
          })}
        {/*<Counter/>*/}
      </div>
    );
  }
}

export default App;
