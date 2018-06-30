import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`

console.log(url)

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

const user = {
  firstname: 'Jane',
  lastname: 'Cho'
}

const {
  firstname,
  lastname
} = user;

console.log(firstname + ' ' + lastname)

const users = ['Rachelle', 'Peter', 'Matt']

const [
  user1,
  user2,
  user3
] = users

console.log(user1, user2, user3)

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

const isSearched = searchTerm => item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClickMe = this.onClickMe.bind(this.state);
    this.onDismiss = this.onDismiss.bind(this);

  }

  onClickMe = () => {
    console.log(this)
  }

  setSearchTopStories(result) {
    this.setState({ result })
  }

  componentDidMount() {
    const { searchTerm } = this.state;

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId); 
    this.setState({ list: updatedList });
  };

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">  
      <div className="interactions"> 
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search
        </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    )
  }
}

const Search = ({ value, onChange, children }) => 

  <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>


const Table = ({ list, pattern, onDismiss}) => 
  <div className="table">
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID} className="table-row">
            <span style={{ width:'40%' }}>
              <a href={item.url}> {item.title} </a>
            </span>
            <span style={{ width:'30%' }}>{item.author}</span>
            <span style={{ width:'10%' }}>{item.num_comments}</span>
            <span style={{ width:'10%' }}>{item.points}</span>
            <span style={{ width:'10%' }}>
              <button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
                >
                Dismiss
              </button>
            </span>
          </div>
        )}
  </div>



// class Table extends Component {
//   render() {
//     const { list, pattern, onDismiss } = this.props;
//     return (
//       <div>
//         {list.filter(isSearched(pattern)).map(item =>
//           <div key={item.objectID}>
//             <span>
//               <a href={item.url}> {item.title} </a>
//             </span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//             <span>
//               <button
//                 onClick={() => onDismiss(item.objectID)}>
//                 Dismiss
//               </button>
//             </span>
//           </div>
//         )}
//       </div>
//     )
//   }
// }

const button = ({ onClick, className='', children }) =>
  <button
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
  </button>


// class Button extends Component {
//   render() {
//     const {
//       onClick,
//       className = '',
//       children,
//     } = this.props;

//     return (
//       <Button
//         onClick={onClick}
//         className={className}
//         type="button"
//       >
//         {children}
//       </Button>
//     );
//   }
// }

export default App;
