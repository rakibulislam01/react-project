import React, { Component } from 'react';
import './App.css';

class App extends Component {

    render() {
        let obj = {
            padding: '30px',
            fontFamily: 'Arial',
            fontSize: '30px'
        };

        return (
            <div className="App">
                <h1 style={obj}>Hello Programmer</h1>
            </div>
        );
    }
}

export default App;
