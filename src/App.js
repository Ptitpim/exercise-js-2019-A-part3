import React, { Component } from 'react';
import UITree from './UITree';

class App extends Component {
  state = {
    tree: [
      {id: 1, label: 'Todo 1'},
      {id: 2, label: 'Todo 2'},
      {id: 3, label: 'Todo 3'},
      {id: 4, label: 'Todo 4'},
      {id: 5, label: 'Todo 5'},
      {id: 6, label: 'Todo 6'},
      {id: 7, label: 'Todo 7'},
    ]
  };

  render() {
    return (
      <div className="app">
        <UITree tree={this.state.tree} />
      </div>
    );
  }
}

export default App;
