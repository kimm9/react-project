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

const list2 = [
  {
    title: 'React2',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux2',
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

console.log(mattkim.firstname)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
    };

    this.onClickMe = this.onClickMe.bind(this.state);

    this.onDismiss = this.onDismiss.bind(this);

  }

  onClickMe() {
    console.log(this)
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId); 
    this.setState({ list: updatedList });
  };

  render() {
    const hello = "This is created by Matthew Kim!"
    return (
      <div className="App">
        <h2>Hey This is News App</h2>
        <h2>{hello}</h2>
        <button
          onClick={this.onClickMe.bind(this)}
          type="button"
        >
          Click on
        </button>
        {this.state.list.map(item => 
            <div key={item.objectID}>
              <span>
                <a herf={item.url}> {item.title} </a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button onClick={() => 
                  this.onDismiss(item.objectID)} 
                  type="button"
                >
                Dismiss
                </button>
              </span>
            </div>
        )}
      </div>
    );
  }
}

export default App;
