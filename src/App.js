import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor () {
    super();

    this.state = {
      monsters: [
        { name: 'scsdcdscsdc', id: '001' },
        { name: 'dfdfdfdfdf', id: '002' },
        { name: 'ererererrer', id: '003' },
      ]
    }
  }
  render() {

    return (
      <div className="App">

        {
          this.state.monsters.map( monster => <h1 key={ monster.id }>{ monster.name }</h1> )
        }
      </div>
    )
  }
}


export default App;
