import React, { Component } from 'react';
import TodoLists  from './components/TodoLists';
import './App.css';


class App extends Component{
  render(){
    return (
      <div className="App">
        <TodoLists />
      </div>
    );
  }
}

export default App;
