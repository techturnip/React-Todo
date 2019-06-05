import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <input type="text" placeholder="...todo" onChange={props.onInputChange} />
      <button type="submit">Add Todo</button>
      <button type="reset">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
