import { React, useState } from 'react';
import styled from 'styled-components';

const MainInput = styled.input`
display: block;
width: 100%;
font-family: Arial;
font-size: 24px;
line-height: 1.4em;
outline: none;
padding: 13px 13px 13px 60px;
border: none;
background: rgba(0, 0, 0, 0.003);
box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
::placeholder {
  color: rgba(0, 0, 0, 0.07);
  font-style: italic;
}
`;

function TodoInput(props) {
  const [state, setState] = useState('');
  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      props.onSave(text);
      if (props.newTodo) {
        setState({ text: '' });
      }
    }
  };

  const handleChange = (e) => {
    setState({ text: e.target.value });
  };

  return (
    <MainInput
      type="text"
      placeholder={props.placeholder}
      value={state.text || ''}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
}

export default TodoInput;
