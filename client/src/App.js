import React, { Component } from 'react';
import TodoForm from './components/TodoForm';

class App extends Component {

  state = {
    todos: []
  };

  updateList = (value) => {
    const newTodos = this.state.todos.concat([value]);
    console.log(newTodos);
    this.setState({ todos: newTodos });
  }


  render() {
    return (
      <div className="App">
        <TodoForm updateList={this.updateList} />
      </div>
    );
  }
}

export default App;
