import { React, useState } from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';

const List = styled.li`
list-style-type: none;
border-bottom: 1px solid #ededed;
`;

const ListWrap = styled.div`
position: relative;
`;

const ListLabel = styled.label`
display: block;
font-size: 24px;
padding: 16px 50px 15px 60px;
list-style-type: none;
`;

const ListInput = styled.input`
position: absolute;
top: 14px;
left: 10px;
width: 30px;
height: 30px;
border: 1px solid #d1e5e2;
border-radius: 100%;
padding: 2px 6px;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;

&:before {
  position: absolute;
  content: none;
  font-size: 22px;
  color: #5dc2af;
}

&:checked {
  &:before {
    content: '✓';
  }
}

&:checked + ${ListLabel}{
  color: #d9d9d9;
  text-decoration: line-through;
}
`;

const ListBtn = styled.button`
position: absolute;
top: 13px;
right: 10px;
width: 30px;
height: 30px;
border: none;

&:before {
  content: none;
  position: absolute;
  top: -2px;
  cursor: pointer;
  right: 6px;
  font-size: 30px;
  color: #cc9a9a;
}

${ListWrap}:hover &:before {
  content: '×';
}
`;

function TodoItem({ todo, completeTodo, deleteTodo, editTodo }) {
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
        onSave={(text) => handleSave(todo.id, text)}
      />
    );
  } else {
    element = (
      <ListWrap>
        <ListInput
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
        <ListLabel onDoubleClick={handleDoubleClick}>
          {todo.text}
        </ListLabel>
        <ListBtn onClick={() => deleteTodo(todo.id)} />
      </ListWrap>
    );
  }

  return (
    <List>
      {element}
    </List>
  );
}

export default TodoItem;
