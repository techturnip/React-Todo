import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoArr.map(item => {
        if (item.task !== "") {
          return (
            <Todo
              todoItem={item}
              handleToggle={props.handleToggle}
              key={item.id}
            />
          );
        }
      })}
    </div>
  );
};

export default TodoList;
