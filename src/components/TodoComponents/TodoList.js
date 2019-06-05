import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul>
      {props.todoArr.map(todo => {
        return <Todo todoData={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
