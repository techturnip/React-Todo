import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoList = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: todoList,
      task: "",
      id: 0,
      completed: false
    };
  }

  handleInputChange = e => {
    this.setState({ task: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTodo]
    });

    todoList.push(newTodo);

    console.log(this.state.todo);
  };

  render() {
    return (
      <div>
        <h2> Welcome to your Todo App! </h2>
        <TodoList todoArr={todoList} />
        <TodoForm
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default App;
