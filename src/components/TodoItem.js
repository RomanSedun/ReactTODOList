import React, { useState } from "react";
import TodoInput from "./TodoInput";

const TodoItem = ({todo, completeTodo, deleteTodo, editTodo}) => {

  const [state, setState] = useState(false);

  const handleDoubleClick = () => {
    setState({ editing: true });
  };

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    setState({ editing: false });
  };

  let element;
  if (state.editing) {
    element = (
      <TodoInput
        text={todo.text}
        editing={state.editing}
        onSave={text => handleSave(todo.id, text)}
      />
    );
  } else {
    element = (
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>
          {todo.text}
        </label>
        <button onClick={() => deleteTodo(todo.id)} />
      </div>
    );
  }

  return (
    <li>
      {element}
    </li>
  );
}

export default TodoItem;