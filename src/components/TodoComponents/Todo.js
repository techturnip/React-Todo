import React from "react";
import "./Todo.css";

const Todo = props => {
  const clickHandler = () => {
    props.handleToggle(props.todoItem.id);
  };

  return (
    <div
      className={`item${props.todoItem.completed ? " completed" : ""}`}
      onClick={clickHandler}
    >
      {props.todoItem.task}
    </div>
  );
};

export default Todo;
