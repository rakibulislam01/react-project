import React, { Component } from 'react';
import './App.css';
import Books from "./Books/Books";


class App extends Component {
    state = {
         books: [
             {
                 name: 'Javascripte',
                 price: 20,
                 id: 1
             },
             {
                 name: 'React',
                 price: 30,
                 id: 2
             },
             {
                 name: 'Redux',
                 price: 33,
                 id: 3
             },
             {
                 name: 'React Native',
                 price: 24,
                 id: 4
             }

         ]
    };

    deleteHandler = (id) => {
        let newBooks = this.state.books.filter(book => book.id !== id)
        this.setState({
            books: newBooks
        })
    };

    changeHandler = (name, id) => {
        let newBooks = this.state.books.map(book => {
            if(id === book.id){
                return{
                    ...book,
                    name
                }
            }
            return book
        });
        this.setState({
            books: newBooks
        })
    };

    render() {
        return (
            <div className="App">
                <Books
                    changeHandler={this.changeHandler.bind(this)}
                    deleteHandler={this.deleteHandler.bind(this)}
                    books={this.state.books}/>
            </div>
        );
    }
}

export default App;
