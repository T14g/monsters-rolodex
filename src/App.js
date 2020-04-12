import React from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import './App.css';

class App extends React.Component {

  constructor() {
    super();//permite usar o state, neste exemplo

    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount() {
    //api request return a promisse
    //then promisse then another promisse
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
  }

  handgleChange = (e) => {
    this.setState({searchField : e.target.value})
  }
  
  render(){
    const { monsters, searchField } = this.state;

    //Add to array if pass on the function test
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return ( 
      <div className='App'>
        <h1>Monsters Roledex</h1>
        <SearchBox placeholder='Search Monsters!' handleChange={this.handgleChange} />
        <CardList monsters={filteredMonsters}  />
      </div>
    );
  }
}

export default App;
