import React from "react";
import TodoInput from "./TodoInput";

const Header = (props) => {

  const handleSave = (text) => {
    if (text.length !== 0) {
      props.addTodo(text);
    }
  };

  return (
    <div>
      <h1>todos</h1>
      <TodoInput
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </div>
  );
}

export default Header;
