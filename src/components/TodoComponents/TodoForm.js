import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ""
    };
  }

  changeHandler = e => {
    this.setState({ todoItem: e.target.value });
  };

  clickHandler = e => {
    e.stopPropagation();
    this.props.onClearCompleted();
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.addNewTodo(this.state.todoItem);

    this.setState({ todoItem: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          value={this.state.todoItem}
          className="todo-input"
          type="text"
          placeholder="...todo"
          onChange={this.changeHandler}
        />
        <button className="btn submit" type="submit">
          Add Todo
        </button>
        <button type="button" className="btn clear" onClick={this.clickHandler}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
