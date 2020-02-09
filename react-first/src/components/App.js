import React, { Component } from 'react';
import './App.css';
import First from './First/first'
import Counter from "./Counter/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<First name='Rakibul Islam' email='test@gmail.com' address='Dhaka'/>*/}
        {/*<First name='Test' email='test2@gmail.com' address='Uttara,Dhaka'/>*/}
        {/*<First name='Test2' email='test3@gmail.com' address='Rampura,Dhaka'/>*/}

        <Counter/>
      </div>
    );
  }
}

export default App;
