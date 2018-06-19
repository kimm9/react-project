import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}

const mattkim = new Developer('Matthew', 'Kim');

console.log(mattkim.getName());

class App extends Component {
  render() {
    const hello = "This is created by Matthew Kim!"
    return (
      <div className="App">
        <h2>Hey This is News App</h2>
        <h2>{hello}</h2>
        {list.map(item => 
            <div key={item.objectID}>
              <span>
                <a herf={item.url}> {item.title} </a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
        )}
      </div>
    );
  }
}

export default App;
