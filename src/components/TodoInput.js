import {React, useState} from 'react';

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
    <input
      type="text"
      placeholder={props.placeholder}
      value={state.text || ''}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
}

export default TodoInput;
