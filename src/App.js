import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoList = [
  {
    task: "Take out trash",
    id: Date.now(),
    completed: false
  },
  {
    task: "Take out trash",
    id: Date.now() + 1,
    completed: false
  },
  {
    task: "Take out trash",
    id: Date.now() + 2,
    completed: false
  }
];

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

  addTodo = newItem => {
    const newTodoItem = {
      task: newItem,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTodoItem]
    });
  };

  handleToggle = id => {
    let newList = this.state.todo.map(item => {
      if (item.id === id) {
        const newObj = {
          ...item,
          completed: !item.completed
        };
        return newObj;
      } else {
        return item;
      }
    });
    this.setState({ todo: newList });
  };

  clearCompleted = e => {
    if (this.state.todo.length >= 0) {
      let newList = this.state.todo.filter(item => item.completed !== true);

      this.setState({ todo: newList.filter(item => item.task !== "") });
    }

    console.log(this.state.todo);
  };

  render() {
    return (
      <div className="container">
        <h2> Welcome to your Todo App! </h2>
        <TodoList todoArr={this.state.todo} handleToggle={this.handleToggle} />
        <TodoForm
          addNewTodo={this.addTodo}
          onClearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
