import React from 'react';
import { CardList } from './components/card-list/card-list';
import './App.css';

class App extends React.Component {

  constructor() {
    super();//permite usar o state, neste exemplo

    this.state = {
      monsters : []
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
    return ( 
      <div className="App">
        <CardList>Aleluja!!</CardList>
        {this.state.monsters.map(monster => (
          <h2 key={monster.id}>{monster.name}</h2>
        ))}
      </div>
    );
  }
}

export default App;
