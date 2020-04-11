import React from 'react';
import { CardList } from './components/card-list/card-list';
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
  
  render(){
    const { monsters, searchField } = this.state;

    //Add to array if pass on the function test
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return ( 
      <div className='app'>
        <input type='text' placeholder='Search monsters' 
        onChange={
          e => this.setState(
            {searchField : e.target.value}, () =>{
            console.log(this.state)
            })
          }/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
